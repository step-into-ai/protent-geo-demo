import { Link } from 'react-router-dom'
import type { ClaimId } from '../content/claims'
import type { HubPage as HubPageContent } from '../content/schema'
import type { HubPath } from '../content/hubs'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { BoothBuilder } from '../components/BoothBuilder'
import { FaqList } from '../components/FaqList'
import { Layout } from '../components/Layout'
import { Meta } from '../components/Meta'
import { Out } from '../components/Out'
import { SourceList } from '../components/SourceList'
import { hubPages } from '../content/hubs'
import { articles } from '../content/articles'

export function HubPage({ page }: { page: HubPageContent<ClaimId, HubPath> }) {
  const hubArticles = articles.filter(article => article.hubPath === page.path)
  return <Layout><Meta meta={page.meta} faqs={page.faqs} title={page.title}/><main id="main-content" className="hub-main">
    <section className="hub-hero"><div className="wrap"><Breadcrumbs current={page.eyebrow}/><p className="eyebrow">{page.eyebrow}</p><h1>{page.title}</h1><p className="hub-intro">{page.intro}</p>
      <div className="hub-actions">{page.officialLinks.slice(0, 2).map(link => <Out key={link.href} href={link.href}>{link.label}</Out>)}</div>
    </div></section>
    <section className="section wrap"><div className="section-head split"><div><p className="eyebrow dark">Entscheidungslogik</p><h2>Vier Kriterien für eine belastbare Auswahl</h2></div><p>Diese Kriterien sind redaktionelle Orientierung. Verbindliche technische Angaben stehen auf den verlinkten Herstellerseiten.</p></div>
      <div className="criteria-grid">{page.criteria.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
    </section>
    {page.path === '/messestaende' && <section className="section booth-stage"><div className="wrap"><div className="section-head split"><div><p className="eyebrow">Planungskonsole</p><h2>Messestand als Raumfolge skizzieren.</h2></div><p>Konfiguriere Format, offene Seiten und Funktionsmodule. Die Skizze dient als Briefing – nicht als technische Ausführungsplanung.</p></div><BoothBuilder/></div></section>}
    <section className="section hub-faq"><div className="wrap"><div className="section-head"><p className="eyebrow">Kontextuelle FAQ</p><h2>Fragen zu {page.eyebrow}</h2></div><FaqList items={page.faqs}/></div></section>
    <section className="section wrap hub-articles"><div className="section-head"><p className="eyebrow dark">Vertiefendes Wissen</p><h2>Passende Wissensseiten</h2><p>Konkrete Planungshilfen aus diesem Themenbereich.</p></div><div className="article-card-grid">{hubArticles.map(article => <article key={article.slug}><p className="eyebrow dark">{article.cluster}</p><h3><Link to={article.path}>{article.title}</Link></h3><p>{article.description}</p><Link className="text-link" to={article.path}>Artikel lesen <span>→</span></Link></article>)}</div></section>
    <section className="section wrap evidence"><div className="section-head"><p className="eyebrow dark">Nachvollziehbare Basis</p><h2>Aussagen und offizielle Quellen</h2><p>Öffentlich angezeigt werden nur freigegebene Herstellerangaben und redaktionelle Einordnungen.</p></div><SourceList claimIds={page.claimIds}/></section>
    <section className="related"><div className="wrap"><div><p className="eyebrow">Weiterdenken</p><h2>Verwandte Wissensbereiche</h2></div><div className="related-links">{page.relatedPaths.map(path => <Link key={path} to={path}>{hubPages[path].eyebrow}<span>→</span></Link>)}</div></div></section>
  </main></Layout>
}