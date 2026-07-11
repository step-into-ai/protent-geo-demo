import { useEffect } from 'react'
import type { FaqItem, PageMeta } from '../content/schema'

function metaElement(selector: string, attributes: Record<string, string>) {
  const element = document.querySelector<HTMLMetaElement>(selector) ?? document.head.appendChild(document.createElement('meta'))
  element.dataset.pageMeta = 'true'
  for (const [name, value] of Object.entries(attributes)) element.setAttribute(name, value)
  return element
}

type BreadcrumbItem = { name: string; url: string }

export function Meta({ meta, faqs, title, article = false, breadcrumbs = [], citations = [] }: { meta: PageMeta; faqs: FaqItem[]; title: string; article?: boolean; breadcrumbs?: BreadcrumbItem[]; citations?: string[] }) {
  useEffect(() => {
    document.title = meta.title
    metaElement('meta[name="description"]', { name: 'description', content: meta.description })
    metaElement('meta[name="robots"]', { name: 'robots', content: meta.robots ?? 'index,follow,max-image-preview:large' })
    metaElement('meta[property="og:type"]', { property: 'og:type', content: article ? 'article' : 'website' })
    metaElement('meta[property="og:title"]', { property: 'og:title', content: meta.title })
    metaElement('meta[property="og:description"]', { property: 'og:description', content: meta.description })
    metaElement('meta[property="og:url"]', { property: 'og:url', content: meta.canonical })
    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]') ?? document.head.appendChild(document.createElement('link'))
    canonical.rel = 'canonical'; canonical.href = meta.canonical; canonical.dataset.pageMeta = 'true'
    document.querySelectorAll('script[data-page-schema]').forEach(item => item.remove())
    const schema = document.createElement('script')
    schema.type = 'application/ld+json'; schema.dataset.pageSchema = 'true'
    schema.text = JSON.stringify({ '@context': 'https://schema.org', '@graph': [
      { '@type': 'WebPage', name: title, url: meta.canonical, description: meta.description },
      ...(article ? [{ '@type': 'Article', headline: title, url: meta.canonical, description: meta.description, inLanguage: 'de-DE', dateModified: '2026-07-11', citation: citations }] : []),
      ...(breadcrumbs.length ? [{ '@type': 'BreadcrumbList', itemListElement: breadcrumbs.map((item, index) => ({ '@type': 'ListItem', position: index + 1, name: item.name, item: item.url })) }] : []),
      ...(faqs.length ? [{ '@type': 'FAQPage', mainEntity: faqs.map(item => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) }] : []),
    ] })
    document.head.appendChild(schema)
    return () => { schema.remove() }
  }, [article, breadcrumbs, citations, faqs, meta, title])
  return null
}
