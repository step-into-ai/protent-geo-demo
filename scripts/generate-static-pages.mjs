import { mkdir, readFile, writeFile } from 'node:fs/promises'

const pageContent = JSON.parse(await readFile('src/content/pages.json', 'utf8'))
const articles = JSON.parse(await readFile('src/content/generated-articles.json', 'utf8'))
const site = 'https://step-into-ai.github.io/protent-geo-demo'
const hubNames = { '/faltzelte': 'Faltzelte', '/messestaende': 'Messestände', '/promotion-event': 'Promotion & Event', '/bedruckung': 'Bedruckung', '/ausstattung': 'Ausstattung' }

const escapeAttribute = value => String(value).replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
const escapeText = value => escapeAttribute(value).replaceAll("'", '&#39;')
const stripHtml = value => String(value)
  .replace(/<br\s*\/?>/gi, '\n')
  .replace(/<\/p>|<\/li>|<\/h[1-6]>|<\/tr>/gi, '\n')
  .replace(/<[^>]+>/g, ' ')
  .replaceAll('&amp;', '&')
  .replaceAll('&lt;', '<')
  .replaceAll('&gt;', '>')
  .replaceAll('&quot;', '"')
  .replaceAll('&#39;', "'")
  .replace(/\s+\n/g, '\n')
  .replace(/\n{3,}/g, '\n\n')
  .replace(/[ \t]{2,}/g, ' ')
  .trim()
const safeJson = value => JSON.stringify(value).replaceAll('<', '\\u003c')
const faqSchema = faqs => ({ '@type': 'FAQPage', mainEntity: faqs.map(({ question, answer }) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) })

function replaceMeta(template, selector, value) {
  const escaped = escapeAttribute(value)
  const pattern = new RegExp(`(<meta ${selector} content=")[^"]*("\\s*\\/?>)`, 'g')
  const matches = template.match(pattern) ?? []
  if (matches.length !== 1) throw new Error(`Erwartete genau ein ${selector}, gefunden: ${matches.length}`)
  return template.replace(pattern, `$1${escaped}$2`)
}

function metadata(template, meta, ogType = 'website') {
  let html = template
    .replace(/<title>.*?<\/title>/, `<title>${escapeText(meta.title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*("\s*\/?>)/, `$1${escapeAttribute(meta.description)}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*("\s*\/?>)/, `$1${escapeAttribute(meta.canonical)}$2`)
  html = replaceMeta(html, 'property="og:type"', ogType)
  html = replaceMeta(html, 'property="og:title"', meta.title)
  html = replaceMeta(html, 'property="og:description"', meta.description)
  return replaceMeta(html, 'property="og:url"', meta.canonical)
}

function injectSchema(html, graph) {
  return html.replace('</head>', `<script type="application/ld+json" data-page-schema="true">${safeJson({ '@context': 'https://schema.org', '@graph': graph })}</script></head>`)
}

function injectRoot(html, visibleHtml) {
  const root = '<div id="root"></div>'
  if (!html.includes(root)) throw new Error('Statischer root-Platzhalter fehlt')
  return html.replace(root, `<div id="root">${visibleHtml}</div>`)
}

const template = await readFile('dist/index.html', 'utf8')
const homeVisible = `<main class="static-home" data-static-content="true"><h1>Pro-Tent Wissenswelt: professionelle Faltzelte auswählen</h1><p>Redaktionell eigenständige Orientierung zu Pro-Tent 2000, Pro-Tent MODUL 4000 und Pro-Tent 5000 – mit offiziellen Primärquellen, klaren Entscheidungskriterien und ohne technische Freigabeversprechen.</p><section><h2>Modellreihen</h2><ul><li>Pro-Tent 2000: kompakte Modellorientierung</li><li>Pro-Tent MODUL 4000: modulare Raumkonzepte</li><li>Pro-Tent 5000: große Formate und anspruchsvolle Outdoor-Einsätze</li></ul></section><nav aria-label="Wissensbereiche"><h2>Wissensbereiche</h2><ul>${Object.entries(hubNames).map(([path, name]) => `<li><a href=".${path}/">${escapeText(name)}</a></li>`).join('')}</ul></nav><section><h2>Alle Wissensseiten</h2><ul>${articles.map(article => `<li><a href="./${article.slug}/">${escapeText(article.title)}</a> – ${escapeText(article.description)}</li>`).join('')}</ul></section><p>Technische Spezifikationen, Sicherheitshinweise, Verfügbarkeit und Preise müssen auf der offiziellen Pro-Tent Website oder direkt beim Hersteller geprüft werden.</p></main>`
const homeGraph = [
  { '@type': 'WebSite', name: 'Pro-Tent Wissenswelt', url: `${site}/`, inLanguage: 'de-DE', description: 'Redaktionell eigenständige Demo-Wissenswelt für professionelle Faltzelte.' },
  { '@type': 'WebPage', name: 'Pro-Tent Wissenswelt', url: `${site}/`, inLanguage: 'de-DE', about: { '@type': 'Organization', name: 'Pro-Tent AG', url: 'https://www.pro-tent.com/de-de/' }, dateModified: '2026-07-11' },
]
await writeFile('dist/index.html', injectRoot(injectSchema(template, homeGraph), homeVisible))

for (const [routePath, page] of Object.entries(pageContent.hubs)) {
  const route = routePath.slice(1)
  let html = metadata(template, page.meta)
  html = injectSchema(html, [
    { '@type': 'WebPage', name: page.meta.title, url: page.meta.canonical, description: page.meta.description, inLanguage: 'de-DE', dateModified: '2026-07-11', about: { '@type': 'Organization', name: 'Pro-Tent AG', url: 'https://www.pro-tent.com/de-de/' } },
    faqSchema(page.faqs),
  ])
  const hubArticles = articles.filter(article => article.hubPath === routePath)
  const visible = `<main class="static-hub" data-static-content="true"><nav aria-label="Brotkrumen"><a href="../">Wissenswelt</a> / ${escapeText(page.eyebrow)}</nav><article><p>${escapeText(page.eyebrow)}</p><h1>${escapeText(page.title)}</h1><p>${escapeText(page.intro)}</p><section><h2>Entscheidungskriterien</h2>${page.criteria.map(item => `<h3>${escapeText(item.title)}</h3><p>${escapeText(item.text)}</p>`).join('')}</section><section><h2>Passende Wissensseiten</h2><ul>${hubArticles.map(article => `<li><a href="../${article.slug}/">${escapeText(article.title)}</a> – ${escapeText(article.description)}</li>`).join('')}</ul></section><section><h2>Häufige Fragen</h2>${page.faqs.map(faq => `<h3>${escapeText(faq.question)}</h3><p>${escapeText(faq.answer)}</p>`).join('')}</section></article></main>`
  html = injectRoot(html, visible)
  await mkdir(`dist/${route}`, { recursive: true })
  await writeFile(`dist/${route}/index.html`, html)
}

for (const article of articles) {
  const meta = { title: article.metaTitle, description: article.description, canonical: article.canonical }
  const hubUrl = `${site}${article.hubPath}/`
  const breadcrumbs = [
    { name: 'Wissenswelt', item: `${site}/` },
    { name: hubNames[article.hubPath], item: hubUrl },
    { name: article.title, item: article.canonical },
  ]
  const graph = [
    { '@type': 'WebPage', name: article.title, url: article.canonical, description: article.description, inLanguage: 'de-DE', dateModified: '2026-07-11', about: { '@type': 'Organization', name: 'Pro-Tent AG', url: 'https://www.pro-tent.com/de-de/' } },
    { '@type': 'Article', headline: article.title, url: article.canonical, description: article.description, inLanguage: 'de-DE', dateModified: '2026-07-11', citation: article.sourceUrls },
    { '@type': 'BreadcrumbList', itemListElement: breadcrumbs.map((item, index) => ({ '@type': 'ListItem', position: index + 1, name: item.name, item: item.item })) },
    faqSchema(article.faqs),
  ]
  const visible = `<main class="static-article" data-static-content="true"><nav aria-label="Brotkrumen"><a href="../">Wissenswelt</a> / <a href="..${article.hubPath}/">${escapeText(hubNames[article.hubPath])}</a></nav><article><p>${escapeText(article.cluster)}</p><h1>${escapeText(article.title)}</h1><p>${escapeText(article.description)}</p><section><h2>Direktantwort</h2>${article.directAnswerHtml}</section>${article.bodyHtml}<section><h2>Häufige Fragen</h2>${article.faqs.map(faq => `<h3>${escapeText(faq.question)}</h3>${faq.answerHtml}`).join('')}</section><section><h2>Quellen</h2><ol>${article.sourceUrls.map(url => `<li><a href="${escapeAttribute(url)}">${escapeText(url)}</a></li>`).join('')}</ol></section></article></main>`
  let html = metadata(template, meta, 'article')
  html = injectSchema(html, graph)
  html = injectRoot(html, visible)
  await mkdir(`dist/${article.slug}`, { recursive: true })
  await writeFile(`dist/${article.slug}/index.html`, html)
}

const sitemapPaths = ['', ...Object.keys(pageContent.hubs).map(value => `${value.slice(1)}/`), ...articles.map(article => `${article.slug}/`)]
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapPaths.map((route, index) => `  <url><loc>${site}/${route}</loc><lastmod>2026-07-11</lastmod><changefreq>monthly</changefreq><priority>${index === 0 ? '1.0' : route.split('/').length === 2 && Object.hasOwn(pageContent.hubs, `/${route.slice(0, -1)}`) ? '0.9' : '0.8'}</priority></url>`).join('\n')}\n</urlset>\n`
await writeFile('dist/sitemap.xml', sitemap)
await writeFile('public/sitemap.xml', sitemap)

const llmsConcise = `# Pro-Tent Wissenswelt (redaktionell eigenständige Demo)\n\n> Öffentliche deutschsprachige Orientierung für professionelle Faltzelte. Diese Wissenswelt ist keine offizielle Website der Pro-Tent AG und ersetzt keine technische Dokumentation oder Beratung.\n\n## Primärquelle\n- [Offizielle deutsche Pro-Tent Website](https://www.pro-tent.com/de-de/)\n\n## Wissensbereiche\n${Object.entries(hubNames).map(([path, name]) => `- [${name}](${site}${path}/)`).join('\n')}\n\n## Wissensseiten\n${articles.map(article => `- [${article.title}](${article.canonical}): ${article.description}`).join('\n')}\n\n## Grenzen\nTechnische Spezifikationen, Sicherheitshinweise, Verfügbarkeit und Preise immer auf der offiziellen Herstellerseite oder direkt bei Pro-Tent prüfen. llms.txt ist ein ergänzendes Inhaltsverzeichnis und kein Ranking- oder Indexierungsversprechen.\n`
const llmsFull = `# Pro-Tent Wissenswelt – vollständiger KI-Lesetext\n\n> Redaktionell eigenständige Demo. Fakten werden mit offiziellen Pro-Tent-Primärquellen verknüpft. Keine technische Freigabe, keine Garantieaussage und keine offizielle Pro-Tent-Publikation.\n\n${articles.map(article => `## ${article.title}\n\nURL: ${article.canonical}\n\n${article.description}\n\n### Direktantwort\n${article.directAnswer}\n\n### Inhalt\n${stripHtml(article.bodyHtml)}\n\n### Häufige Fragen\n${article.faqs.map(faq => `- **${faq.question}** ${faq.answer}`).join('\n')}\n\n### Offizielle Quellen\n${article.sourceUrls.map(url => `- ${url}`).join('\n')}`).join('\n\n---\n\n')}\n`
for (const directory of ['dist', 'public']) {
  await writeFile(`${directory}/llms.txt`, llmsConcise)
  await writeFile(`${directory}/llms-full.txt`, llmsFull)
}

const notFoundMeta = { title: '404 – Seite nicht gefunden | Pro-Tent Wissenswelt', description: 'Der angeforderte Pfad ist in der Pro-Tent Wissenswelt nicht vorhanden.', canonical: `${site}/404.html` }
let notFound = metadata(template, notFoundMeta)
  .replace(/(<meta name="robots" content=")[^"]*("\s*\/?>)/, '$1noindex,follow$2')
notFound = injectRoot(notFound, '<main><p>404</p><h1>Seite nicht gefunden</h1><p>Dieser Wissenspfad existiert nicht.</p><a href="./">Zur Startseite</a></main>')
await writeFile('dist/404.html', notFound)
console.log(`Statische Ausgabe: 5 Hubs, ${articles.length} Artikel, Sitemap und 404 erzeugt.`)
