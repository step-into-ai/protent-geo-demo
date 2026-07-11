import { Link } from 'react-router-dom'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { FaqList } from '../components/FaqList'
import { Layout } from '../components/Layout'
import { Meta } from '../components/Meta'
import { Out } from '../components/Out'
import { articleBySlug, type Article } from '../content/articles'
import { hubPages } from '../content/hubs'

const site = 'https://step-into-ai.github.io/protent-geo-demo'
const official = 'https://www.pro-tent.com/de-de'

export function ArticlePage({ article }: { article: Article }) {
  const hub = hubPages[article.hubPath]
  const breadcrumbs = [
    { name: 'Wissenswelt', url: `${site}/` },
    { name: hub.eyebrow, url: `${site}${article.hubPath}/` },
    { name: article.title, url: article.canonical },
  ]
  return <Layout><Meta meta={{ title: article.metaTitle, description: article.description, canonical: article.canonical }} faqs={article.faqs} title={article.title} article breadcrumbs={breadcrumbs}
 citations={article.sourceUrls}/><main id="main-content" className="article-main">
    <header className="article-hero"><div className="article-wrap"><Breadcrumbs current={article.title} parent={{ label: hub.eyebrow, path: article.hubPath }}/><p className="eyebrow">{article.cluster}</p><h1>{article.title}</h1><p className="article-description">{article.description}</p></div></header>
    <div className="article-wrap article-layout">
      <article>
        <section className="direct-answer" aria-labelledby={`${article.slug}-direktantwort`}><p className="eyebrow dark">Direktantwort</p><h2 id={`${article.slug}-direktantwort`}>Kurz und belastbar beantwortet</h2><div dangerouslySetInnerHTML={{ __html: article.directAnswerHtml }}/></section>
        <div className="markdown-body" dangerouslySetInnerHTML={{ __html: article.bodyHtml }}/>
        <section className="article-faq" aria-labelledby={`${article.slug}-faq`}><p className="eyebrow dark">Häufige Fragen</p><h2 id={`${article.slug}-faq`}>Fragen zu {article.title}</h2><FaqList items={article.faqs}/></section>
        <section className="article-sources" aria-labelledby={`${article.slug}-quellen`}><p className="eyebrow dark">Quellen</p><h2 id={`${article.slug}-quellen`}>Offizielle Informationsbasis</h2><p>Die redaktionelle Einordnung basiert auf diesen offiziellen Pro-Tent-Seiten:</p><ol>{article.sourceUrls.map((url, index) => <li key={url}><Out href={url}>Quelle {index + 1}: {new URL(url).pathname.replace('/de-de/', '').replaceAll('/', ' / ') || 'Pro-Tent'}</Out></li>)}</ol></section>
      </article>
      <aside className="article-sidebar"><p className="eyebrow dark">Im Themenbereich</p><h2>{hub.eyebrow}</h2><p>{hub.intro.slice(0, 190)}…</p><Link className="text-link" to={article.hubPath}>Zum Themen-Hub <span>→</span></Link></aside>
    </div>
    <section className="related article-related"><div className="article-wrap"><div><p className="eyebrow">Weiterlesen</p><h2>Verwandte Wissensseiten</h2></div><div className="related-links">{article.relatedSlugs.map(slug => { const related = articleBySlug.get(slug); if (!related) return null; return <Link key={slug} to={related.path}>{related.title}<span>→</span></Link> })}</div></div></section>
    <section className="cta"><div className="article-wrap"><div><p className="eyebrow">Nächster Schritt</p><h2>Planung mit Pro-Tent konkretisieren.</h2><p>Nutzen Sie die Wissensseite zur Vorbereitung und klären Sie die konkrete Konfiguration anschließend direkt mit Pro-Tent.</p></div><div className="cta-actions"><Out href={`${official}/konfigurator/zelt-konfigurator/`}>Zelt konfigurieren</Out><Out href={`${official}/beratung/`}>Beratung öffnen</Out></div></div></section>
  </main></Layout>
}
