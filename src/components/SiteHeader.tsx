import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { articles } from '../content/articles'
import type { HubPath } from '../content/hubs'
import { primaryNavigation } from './navigation'
import { Out } from './Out'
import './Layout.css'

const assets = `${import.meta.env.BASE_URL}images/`
const official = 'https://www.pro-tent.com/de-de'

export function SiteHeader() {
  const [menu, setMenu] = useState(false)
  const [knowledgeMenu, setKnowledgeMenu] = useState(false)
  const [activeHub, setActiveHub] = useState<HubPath | null>(null)
  const closeNavigation = () => {
    setMenu(false)
    setKnowledgeMenu(false)
    setActiveHub(null)
  }
  const activeGroup = primaryNavigation.find(item => item.path === activeHub)
  const activeArticles = activeHub ? articles.filter(article => article.hubPath === activeHub) : []

  return <>
    <a className="skip-link" href="#main-content">Zum Inhalt springen</a>
    <header className="site-header" onKeyDown={event => { if (event.key === 'Escape') closeNavigation() }}>
      <Link className="brand official-brand germany-brand" to="/" onClick={closeNavigation}>
        <img src={`${assets}logo-protent.svg`} alt="Pro-Tent"/><span className="knowledge-label"><b>Deutschland</b><small>Wissensplattform</small></span>
      </Link>
      <button className="menu-btn" aria-label={menu ? 'Menü schließen' : 'Menü öffnen'} aria-expanded={menu} aria-controls="main-nav" onClick={() => setMenu(!menu)}>Menü <span aria-hidden="true">{menu ? '×' : '☰'}</span></button>
      <nav id="main-nav" className={menu ? 'open' : ''} aria-label="Hauptnavigation">
        <div className="knowledge-nav">
          <button className="knowledge-nav__trigger" type="button" aria-expanded={knowledgeMenu} aria-controls="knowledge-nav-panel" onClick={() => { setKnowledgeMenu(!knowledgeMenu); setActiveHub(null) }}>Wissen</button>
          <div id="knowledge-nav-panel" className="knowledge-nav__panel" role="group" aria-label="Wissensbereiche" hidden={!knowledgeMenu}>
            <div className="knowledge-nav__overview">
              <p><b>Wissen nach Themenbereich</b><span>Wählen Sie zuerst einen Bereich und anschließend die passende Wissensseite.</span></p>
              <Link className="knowledge-nav__all" to="/wissen" onClick={closeNavigation}>Alle Wissensseiten</Link>
            </div>
            <div className="knowledge-nav__groups" aria-label="Themenbereiche">
              {primaryNavigation.map(item => <button key={item.path} type="button" aria-expanded={activeHub === item.path} aria-controls={`knowledge-group-${item.path.slice(1)}`} onClick={() => setActiveHub(activeHub === item.path ? null : item.path)}>{item.label}<span aria-hidden="true">→</span></button>)}
            </div>
            {activeGroup && <section id={`knowledge-group-${activeGroup.path.slice(1)}`} className="knowledge-nav__articles" aria-label={`${activeGroup.label} Wissensseiten`}>
              <div className="knowledge-nav__articles-head"><b>{activeGroup.label}</b><NavLink to={activeGroup.path} onClick={closeNavigation}>Themenübersicht</NavLink></div>
              <div className="knowledge-nav__article-links">{activeArticles.map(article => <NavLink key={article.slug} to={article.path} onClick={closeNavigation}>{article.title}</NavLink>)}</div>
            </section>}
          </div>
        </div>
        {primaryNavigation.map(item => <NavLink key={item.path} to={item.path} onClick={closeNavigation}>{item.label}</NavLink>)}
        <Out href={`${official}/konfigurator/zelt-konfigurator/`}>Konfigurator</Out>
      </nav>
    </header>
  </>
}
