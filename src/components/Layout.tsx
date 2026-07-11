import { useState, type ReactNode } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Out } from './Out'
import './Layout.css'

const assets = `${import.meta.env.BASE_URL}images/`
const official = 'https://www.pro-tent.com/de-de'
const navigation = [
  ['/faltzelte', 'Faltzelte'], ['/messestaende', 'Messe'], ['/promotion-event', 'Promotion'],
  ['/bedruckung', 'Bedruckung'], ['/ausstattung', 'Ausstattung'],
] as const

export function Layout({ children }: { children: ReactNode }) {
  const [menu, setMenu] = useState(false)
  const [knowledgeMenu, setKnowledgeMenu] = useState(false)
  const closeNavigation = () => {
    setMenu(false)
    setKnowledgeMenu(false)
  }
  return <>
    <a className="skip-link" href="#main-content">Zum Inhalt springen</a>
    <header className="site-header hub-header" onKeyDown={event => { if (event.key === 'Escape') closeNavigation() }}>
      <Link className="brand official-brand germany-brand" to="/">
        <img src={`${assets}logo-protent.svg`} alt="Pro-Tent"/><span className="knowledge-label"><b>Deutschland</b><small>Wissensplattform</small></span>
      </Link>
      <button className="menu-btn" aria-label={menu ? 'Menü schließen' : 'Menü öffnen'} aria-expanded={menu} aria-controls="main-nav" onClick={() => setMenu(!menu)}>Menü <span aria-hidden="true">{menu ? '×' : '☰'}</span></button>
      <nav id="main-nav" className={menu ? 'open' : ''} aria-label="Hauptnavigation">
        <div className="knowledge-nav">
          <button className="knowledge-nav__trigger" type="button" aria-expanded={knowledgeMenu} aria-controls="knowledge-nav-panel" onClick={() => setKnowledgeMenu(!knowledgeMenu)}>Wissen</button>
          <div id="knowledge-nav-panel" className="knowledge-nav__panel" hidden={!knowledgeMenu}>
            {navigation.map(([path, label]) => <NavLink key={path} to={path} onClick={closeNavigation}>{label}</NavLink>)}
            <Link className="knowledge-nav__all" to="/wissen" onClick={closeNavigation}>Alle Wissensseiten</Link>
          </div>
        </div>
        <Out href={`${official}/konfigurator/zelt-konfigurator/`}>Konfigurator</Out>
      </nav>
    </header>
    {children}
    <footer><div className="wrap footer-grid hub-footer">
      <div className="brand official-brand footer-brand germany-brand"><span className="footer-logo"><img src={`${assets}logo-protent.svg`} alt="Pro-Tent"/></span><span className="knowledge-label"><b>Deutschland</b><small>Wissensplattform</small></span></div>
      <div><b>Wissensbereiche</b>{navigation.slice(0, 3).map(([path, label]) => <Link key={path} to={path}>{label}</Link>)}</div>
      <div><b>Planung</b>{navigation.slice(3).map(([path, label]) => <Link key={path} to={path}>{label}</Link>)}</div>
      <div><b>Für Unternehmen in Deutschland</b><p>Fundiertes Produktwissen für mobile Markenräume und eine zielgerichtete Projektvorbereitung.</p></div>
    </div><div className="wrap legal"><span>Konzeptstand · 11. Juli 2026</span><Out href="https://www.pro-tent.com/de-de/">Offizielle Pro-Tent Website</Out></div></footer>
  </>
}