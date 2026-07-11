import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import { loadArticles } from '../scripts/content-pipeline.mjs'

const articles = await loadArticles()
const slugs = new Set(articles.map(article => article.slug))

describe('Markdown-Contentpipeline', () => {
  it('validiert und veröffentlicht genau 25 eindeutige Drafts', () => {
    expect(articles).toHaveLength(25)
    expect(slugs.size).toBe(25)
    for (const article of articles) {
      expect(article.title.length).toBeGreaterThan(20)
      expect(article.description.length).toBeGreaterThan(80)
      expect(article.directAnswer.length).toBeGreaterThan(100)
      expect(article.faqs.length).toBeGreaterThanOrEqual(5)
      expect(article.bodyHtml.length).toBeGreaterThan(1000)
      expect(article.bodyHtml).not.toContain(article.faqs[0].question)
      expect(article.bodyHtml).not.toContain(`<h1>${article.title}</h1>`)
      expect(article.approvalStatus).not.toBe('needs-client-approval')
    }
  })

  it('erhält valide interne Beziehungen und Links', () => {
    for (const article of articles) {
      for (const slug of article.relatedSlugs) expect(slugs.has(slug)).toBe(true)
      for (const slug of article.internalSlugs) {
        expect(slugs.has(slug)).toBe(true)
        const rendered = `${article.directAnswerHtml}${article.bodyHtml}${article.faqs.map(faq => faq.answerHtml).join('')}`
        expect(rendered).toContain(`/protent-geo-demo/${slug}/`)
      }
    }
  })

  it('erlaubt ausschließlich offizielle HTTPS-Quelldomains', () => {
    for (const article of articles) for (const source of article.sourceUrls) {
      const url = new URL(source)
      expect(url.protocol).toBe('https:')
      expect(url.hostname).toBe('www.pro-tent.com')
      expect(url.pathname.startsWith('/de-de/')).toBe(true)
    }
  })

  it('enthält keine öffentlich markierten Freigabeinhalte', () => {
    const draftText = articles.map(article => readFileSync(`research/content-drafts/${article.slug}.md`, 'utf8')).join('\n')
    expect(draftText).not.toMatch(/approvalStatus:\s*needs-client-approval/)
  })
})
