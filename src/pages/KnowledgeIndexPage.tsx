import { Link } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { Meta } from '../components/Meta'
import { articles } from '../content/articles'
import { hubPages, hubPaths } from '../content/hubs'
import type { PageMeta } from '../content/schema'

const meta: PageMeta = {
  title: 'Pro-Tent Deutschland Wissen | Alle Themen und Ratgeber',
  description: 'Alle Pro-Tent Deutschland Wissensseiten zu Faltzelten, Messeständen, Promotion, Bedruckung, Ausstattung, Größen und professioneller Planung.',
  canonical: 'https://step-into-ai.github.io/protent-geo-demo/wissen/',
}

export function KnowledgeIndexPage() {
  return <Layout>
    <Meta meta={meta} faqs={[]} title="Pro-Tent Deutschland Wissen"/>
    <main id="main-content" className="knowledge-index-main">
      <header className="knowledge-index-hero"><div className="wrap">
        <p className="eyebrow">Pro-Tent Deutschland Wissensplattform</p>
        <h1>Wissen für mobile Markenräume.</h1>
        <p>25 fundierte Ratgeber verbinden Modelle, Größen, Markenwirkung, Ausstattung und Betrieb zu einer klaren Entscheidungsgrundlage für Unternehmen.</p>
        <nav aria-label="Wissen nach Themen" className="knowledge-index-jump">
          {hubPaths.map(path => <a key={path} href={`#${path.slice(1)}`}>{hubPages[path].eyebrow}</a>)}
        </nav>
      </div></header>

      <div className="wrap knowledge-index-sections">
        {hubPaths.map((path, hubIndex) => {
          const page = hubPages[path]
          const hubArticles = articles.filter(article => article.hubPath === path)
          return <section key={path} id={path.slice(1)} className="knowledge-index-group" aria-labelledby={`wissen-${path.slice(1)}`}>
            <div className="knowledge-index-group__head">
              <span>0{hubIndex + 1}</span>
              <div><p className="eyebrow dark">{page.eyebrow}</p><h2 id={`wissen-${path.slice(1)}`}>{page.title}</h2><p>{page.intro}</p><Link className="text-link" to={path}>Themenbereich öffnen <span>→</span></Link></div>
            </div>
            <div className="knowledge-index-cards">
              {hubArticles.map(article => <article key={article.slug}>
                <p className="eyebrow dark">{article.cluster}</p>
                <h3><Link to={article.path}>{article.title}</Link></h3>
                <p>{article.description}</p>
                <Link className="text-link" to={article.path}>Wissensseite lesen <span>→</span></Link>
              </article>)}
            </div>
          </section>
        })}
      </div>
    </main>
  </Layout>
}
