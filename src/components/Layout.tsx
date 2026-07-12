import { type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Out } from './Out'
import { primaryNavigation } from './navigation'
import { SiteHeader } from './SiteHeader'

const assets = `${import.meta.env.BASE_URL}images/`

export function Layout({ children }: { children: ReactNode }) {
  return <>
    <SiteHeader/>
    {children}
    <footer><div className="wrap footer-grid hub-footer">
      <div className="brand official-brand footer-brand germany-brand"><span className="footer-logo"><img src={`${assets}logo-protent.svg`} alt="Pro-Tent"/></span><span className="knowledge-label"><b>Deutschland</b><small>Wissensplattform</small></span></div>
      <div><b>Wissensbereiche</b>{primaryNavigation.slice(0, 3).map(item => <Link key={item.path} to={item.path}>{item.label}</Link>)}</div>
      <div><b>Planung</b>{primaryNavigation.slice(3).map(item => <Link key={item.path} to={item.path}>{item.label}</Link>)}</div>
      <div><b>Für Unternehmen in Deutschland</b><p>Fundiertes Produktwissen für mobile Markenräume und eine zielgerichtete Projektvorbereitung.</p></div>
    </div><div className="wrap legal"><span>Unverbindlicher Konzeptvorschlag für Pro-Tent Deutschland · Nicht von Pro-Tent veröffentlicht</span><Out href="https://www.pro-tent.com/de-de/">Offizielle Pro-Tent Website</Out></div></footer>
  </>
}
