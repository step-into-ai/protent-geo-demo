import { useState, type ReactNode } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Out } from './Out'

const assets = `${import.meta.env.BASE_URL}images/`
const official = 'https://www.pro-tent.com/de-de'
const navigation = [
  ['/faltzelte', 'Faltzelte'], ['/messestaende', 'Messe'], ['/promotion-event', 'Promotion'],
  ['/bedruckung', 'Bedruckung'], ['/ausstattung', 'Ausstattung'],
] as const

export function Layout({ children }: { children: ReactNode }) {
  const [menu, setMenu] = useState(false)
  return <>
    <a className="skip-link" href="#main-content">Zum Inhalt springen</a>
    <header className="site-header hub-header" onKeyDown={event => { if (event.key === 'Escape') setMenu(false) }}>
      <Link className="brand official-brand" to="/" aria-label="Pro-Tent Wissenswelt Startseite">
        <img src={`${assets}logo-protent.svg`} alt="Pro-Tent"/><span className="knowledge-label">Wissenswelt</span>
      </Link>
      <button className="menu-btn" aria-label={menu ? 'Menü schließen' : 'Menü öffnen'} aria-expanded={menu} aria-controls="main-nav" onClick={() => setMenu(!menu)}>Menü <span aria-hidden="true">{menu ? '×' : '☰'}</span></button>
      <nav id="main-nav" className={menu ? 'open' : ''} aria-label="Hauptnavigation">
        {navigation.map(([path, label]) => <NavLink key={path} to={path} onClick={() => setMenu(false)}>{label}</NavLink>)}
        <Out href={`${official}/konfigurator/zelt-konfigurator/`}>Konfigurator</Out>
      </nav>
    </header>
    {children}
    <footer><div className="wrap footer-grid hub-footer">
      <div className="brand official-brand footer-brand"><span className="footer-logo"><img src={`${assets}logo-protent.svg`} alt="Pro-Tent"/></span><span className="knowledge-label">Wissenswelt</span></div>
      <div><b>Wissensbereiche</b>{navigation.slice(0, 3).map(([path, label]) => <Link key={path} to={path}>{label}</Link>)}</div>
      <div><b>Planung</b>{navigation.slice(3).map(([path, label]) => <Link key={path} to={path}>{label}</Link>)}</div>
      <div><b>Über diese Demo</b><p>Öffentliche, redaktionell eigenständige Wissensdemo. Keine offizielle Website der Pro-Tent AG.</p></div>
    </div><div className="wrap legal"><span>Quellenstand · 11. Juli 2026</span><Out href="https://www.pro-tent.com/de-de/">Offizielle Pro-Tent Website</Out></div></footer>
  </>
}