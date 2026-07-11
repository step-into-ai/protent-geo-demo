import { existsSync, readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import pageContent from '../src/content/pages.json'
import { articles } from '../src/content/articles'

const routes = ['faltzelte', 'messestaende', 'promotion-event', 'bedruckung', 'ausstattung']

describe('GitHub-Pages-Ausgabe', () => {
  it('erzeugt 404-Fallback und statische Einstiegspunkte', () => {
    expect(existsSync('dist/404.html')).toBe(true)
    for (const route of routes) {
      const file = `dist/${route}/index.html`
      expect(existsSync(file)).toBe(true)
      const html = readFileSync(file, 'utf8')
      expect(html).toContain(`/protent-geo-demo/${route}/`)
    }
  })

  it('liefert individuelle OG-Daten, Canonical und statisches WebPage+FAQPage-Schema', () => {
    for (const route of routes) {
      const html = readFileSync(`dist/${route}/index.html`, 'utf8')
      const canonical = `https://step-into-ai.github.io/protent-geo-demo/${route}/`
      expect(html).toContain(`property="og:url" content="${canonical}"`)
      expect(html.match(/property="og:url"/g)).toHaveLength(1)
      expect(html).toMatch(/property="og:title" content="[^"].+"/)
      expect(html).toMatch(/property="og:description" content="[^"].+"/)
      expect(html).toContain('"@type":"WebPage"')
      expect(html).toContain('"@type":"FAQPage"')
      expect(html).toContain(`rel="canonical" href="${canonical}"`)
      const page = pageContent.hubs[`/${route}` as keyof typeof pageContent.hubs]
      expect(html).toContain(`<title>${page.meta.title}</title>`)
      expect(html).toContain(page.meta.description)
      for (const faq of page.faqs) {
        expect(html).toContain(JSON.stringify(faq.question))
        expect(html).toContain(JSON.stringify(faq.answer))
      }
    }
  })

  it('führt Startseite und alle fünf Hubs in der Sitemap', () => {
    const sitemap = readFileSync('public/sitemap.xml', 'utf8')
    const urls = ['', ...routes.map(route => `${route}/`)]
    for (const path of urls) expect(sitemap).toContain(`<loc>https://step-into-ai.github.io/protent-geo-demo/${path}</loc>`)
  })

  it('erzeugt für alle 25 Artikel substanzielle statische HTML-Einstiege mit Meta- und Schema-Parität', () => {
    expect(articles).toHaveLength(25)
    for (const article of articles) {
      const html = readFileSync(`dist/${article.slug}/index.html`, 'utf8')
      expect(html).toContain(`<title>${article.metaTitle}</title>`)
      expect(html).toContain(`rel="canonical" href="${article.canonical}"`)
      expect(html).toContain(`property="og:url" content="${article.canonical}"`)
      expect(html.match(/property="og:(type|locale|title|description|url|image)"/g)).toHaveLength(6)
      expect(html.match(/property="og:url"/g)).toHaveLength(1)
      expect(html).toContain('"@type":"Article"')
      expect(html).toContain('"@type":"WebPage"')
      expect(html).toContain('"@type":"BreadcrumbList"')
      expect(html).toContain('"@type":"FAQPage"')
      expect(html).toContain('data-static-content="true"')
      expect(html.length).toBeGreaterThan(8000)
      for (const faq of article.faqs) expect(html).toContain(JSON.stringify(faq.question))
    }
  })

  it('führt alle Artikel zusätzlich zu Home und Hubs in der Sitemap', () => {
    const sitemap = readFileSync('dist/sitemap.xml', 'utf8')
    expect(sitemap.match(/<url>/g)).toHaveLength(31)
    for (const article of articles) expect(sitemap).toContain(`<loc>${article.canonical}</loc>`)
  })

  it('liefert auch Startseite und Hubs als substanzielle statische HTML-Textbasis aus', () => {
    const home = readFileSync('dist/index.html', 'utf8')
    expect(home).toContain('data-static-content="true"')
    expect(home).toContain('Pro-Tent 2000')
    expect(home).toContain('Pro-Tent MODUL 4000')
    expect(home).toContain('Pro-Tent 5000')
    for (const route of routes) {
      const html = readFileSync(`dist/${route}/index.html`, 'utf8')
      const page = pageContent.hubs[`/${route}` as keyof typeof pageContent.hubs]
      expect(html).toContain('data-static-content="true"')
      expect(html).toContain(page.title)
      expect(html).toContain(page.intro)
      for (const criterion of page.criteria) expect(html).toContain(criterion.title)
    }
  })

  it('erzeugt maschinenlesbare KI-Inhaltsverzeichnisse mit allen öffentlichen Seiten und Quellen', () => {
    const concise = readFileSync('dist/llms.txt', 'utf8')
    const full = readFileSync('dist/llms-full.txt', 'utf8')
    expect(concise).toContain('redaktionell eigenständige Demo')
    expect(concise).toContain('https://www.pro-tent.com/de-de/')
    for (const article of articles) {
      expect(concise).toContain(article.canonical)
      expect(full).toContain(article.title)
      expect(full).toContain(article.directAnswer)
      for (const source of article.sourceUrls) expect(full).toContain(source)
    }
  })

  it('verknüpft Artikel-Schema nachvollziehbar mit Primärquellen', () => {
    for (const article of articles) {
      const html = readFileSync(`dist/${article.slug}/index.html`, 'utf8')
      expect(html).toContain('"citation":')
      for (const source of article.sourceUrls) expect(html).toContain(JSON.stringify(source))
    }
  })

  it('erzeugt eine statische noindex-404 mit eigenen Metadaten', () => {
    const html = readFileSync('dist/404.html', 'utf8')
    expect(html).toContain('<title>404 – Seite nicht gefunden | Pro-Tent Wissenswelt</title>')
    expect(html).toContain('name="robots" content="noindex,follow"')
    expect(html).toContain('rel="canonical" href="https://step-into-ai.github.io/protent-geo-demo/404.html"')
    expect(html.match(/property="og:url"/g)).toHaveLength(1)
  })

  it('führt Tests im GitHub-Actions-Build aus', () => {
    const workflow = readFileSync('.github/workflows/deploy.yml', 'utf8')
    expect(workflow).toMatch(/run:\s*npm test/)
    expect(workflow.indexOf('npm run build')).toBeLessThan(workflow.indexOf('npm test'))
  })
})
