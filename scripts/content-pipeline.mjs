import { readdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import matter from 'gray-matter'
import { marked } from 'marked'
import sanitizeHtml from 'sanitize-html'
import { z } from 'zod'

const DRAFT_DIR = 'research/content-drafts'
const OUTPUT = 'src/content/generated-articles.json'
const SITE = 'https://step-into-ai.github.io/protent-geo-demo'

const frontmatterSchema = z.object({
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  title: z.string().min(20),
  description: z.string().min(80).max(180),
  cluster: z.string().min(2),
  sourceUrls: z.array(z.string().url()).min(1),
  relatedSlugs: z.array(z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)).min(1),
  approvalStatus: z.enum(['draft', 'published', 'needs-client-approval']),
}).strict()

const clusterHub = cluster => {
  if (/Messe/.test(cluster)) return '/messestaende'
  if (/Promotion|Event/.test(cluster)) return '/promotion-event'
  if (/Druck/.test(cluster)) return '/bedruckung'
  if (/Zubehör|Theken|Lamellen|Regale/.test(cluster)) return '/ausstattung'
  return '/faltzelte'
}

const cleanHtml = html => sanitizeHtml(html, {
  allowedTags: ['p', 'h2', 'h3', 'h4', 'ul', 'ol', 'li', 'strong', 'em', 'a', 'table', 'thead', 'tbody', 'tr', 'th', 'td', 'blockquote', 'code', 'hr'],
  allowedAttributes: { a: ['href', 'title'], th: ['align'], td: ['align'] },
  allowedSchemes: ['https'],
  allowProtocolRelative: false,
  transformTags: {
    a: (tagName, attribs) => {
      const href = attribs.href ?? ''
      return { tagName, attribs: { ...attribs, href: href.startsWith('/') ? `/protent-geo-demo${href}` : href } }
    },
  },
})

const renderMarkdown = markdown => cleanHtml(marked.parse(markdown, { gfm: true, async: false }))
const textFromMarkdown = markdown => sanitizeHtml(marked.parse(markdown, { gfm: true, async: false }), { allowedTags: [] }).replace(/\s+/g, ' ').trim()

function section(markdown, heading) {
  const headingMatch = new RegExp(`^## ${heading}\\s*$`, 'm').exec(markdown)
  if (!headingMatch) throw new Error(`Pflichtabschnitt fehlt: ${heading}`)
  const start = headingMatch.index + headingMatch[0].length
  const nextHeading = /^## .+$/m.exec(markdown.slice(start))
  const end = nextHeading ? start + nextHeading.index : markdown.length
  return markdown.slice(start, end).trim()
}

function extractFaqs(markdown) {
  const block = section(markdown, 'Häufige Fragen')
  const parts = [...block.matchAll(/^### (.+)\s*$([\s\S]*?)(?=^### |$(?![\s\S]))/gm)]
  if (parts.length < 3) throw new Error('Mindestens drei FAQ-Einträge erforderlich')
  return parts.map(match => ({
    question: match[1].trim(),
    answer: textFromMarkdown(match[2]),
    answerHtml: renderMarkdown(match[2]),
  }))
}

function removeSection(markdown, heading) {
  const headingMatch = new RegExp(`^## ${heading}\\s*$`, 'm').exec(markdown)
  if (!headingMatch) return markdown
  const afterHeading = headingMatch.index + headingMatch[0].length
  const nextHeading = /^## .+$/m.exec(markdown.slice(afterHeading))
  const end = nextHeading ? afterHeading + nextHeading.index : markdown.length
  return `${markdown.slice(0, headingMatch.index)}${markdown.slice(end)}`
}

function bodyWithoutExtractedSections(markdown) {
  const withoutDirectAnswer = removeSection(markdown, 'Direktantwort')
  const withoutFaqs = removeSection(withoutDirectAnswer, 'Häufige Fragen')
  return withoutFaqs.replace(/^# .+\r?\n+/m, '').trim()
}

function validateSource(url, slug) {
  const parsed = new URL(url)
  if (parsed.protocol !== 'https:' || parsed.hostname !== 'www.pro-tent.com' || !parsed.pathname.startsWith('/de-de/')) {
    throw new Error(`${slug}: nicht erlaubte Quelldomain: ${url}`)
  }
}

export async function loadArticles({ includeApproval = false } = {}) {
  const files = (await readdir(DRAFT_DIR)).filter(file => file.endsWith('.md') && file !== 'INDEX.md').sort()
  const articles = []
  for (const file of files) {
    const raw = await readFile(path.join(DRAFT_DIR, file), 'utf8')
    const parsed = matter(raw)
    const data = frontmatterSchema.parse(parsed.data)
    if (`${data.slug}.md` !== file) throw new Error(`${file}: slug und Dateiname stimmen nicht überein`)
    if (data.approvalStatus === 'needs-client-approval' && !includeApproval) continue
    data.sourceUrls.forEach(url => validateSource(url, data.slug))
    const directMarkdown = section(parsed.content, 'Direktantwort')
    const internalSlugs = [...new Set([...parsed.content.matchAll(/\]\(\/([a-z0-9-]+)\/?(?:#[^)]+)?\)/g)].map(match => match[1]))]
    articles.push({
      ...data,
      path: `/${data.slug}`,
      hubPath: clusterHub(data.cluster),
      canonical: `${SITE}/${data.slug}/`,
      metaTitle: `${data.title} | Pro-Tent Wissenswelt`,
      directAnswer: textFromMarkdown(directMarkdown),
      directAnswerHtml: renderMarkdown(directMarkdown),
      bodyHtml: renderMarkdown(bodyWithoutExtractedSections(parsed.content)),
      faqs: extractFaqs(parsed.content),
      internalSlugs,
    })
  }
  if (articles.length !== 25) throw new Error(`Erwartet: 25 öffentliche Artikel, erhalten: ${articles.length}`)
  const slugs = new Set(articles.map(article => article.slug))
  if (slugs.size !== articles.length) throw new Error('Doppelte Artikel-Slugs')
  for (const article of articles) {
    for (const slug of [...article.relatedSlugs, ...article.internalSlugs]) {
      if (!slugs.has(slug)) throw new Error(`${article.slug}: unbekannter interner Slug ${slug}`)
    }
  }
  return articles
}

export async function generateArticles() {
  const articles = await loadArticles()
  await writeFile(OUTPUT, `${JSON.stringify(articles, null, 2)}\n`)
  return articles
}

if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(new URL(import.meta.url).pathname.replace(/^\/(.:)/, '$1'))) {
  const articles = await generateArticles()
  console.log(`Contentpipeline: ${articles.length} Artikel validiert und nach ${OUTPUT} geschrieben.`)
}
