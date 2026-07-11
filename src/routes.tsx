import { Link, Route, Routes } from 'react-router-dom'
import HomePage from './App'
import { Layout } from './components/Layout'
import { hubPages } from './content/hubs'
import { Meta } from './components/Meta'
import { HubPage } from './pages/HubPage'
import { ArticlePage } from './pages/ArticlePage'
import { articles } from './content/articles'

const notFoundMeta = { title: '404 – Seite nicht gefunden | Pro-Tent Wissenswelt', description: 'Der angeforderte Pfad ist in der Pro-Tent Wissenswelt nicht vorhanden.', canonical: 'https://step-into-ai.github.io/protent-geo-demo/404.html', robots: 'noindex,follow' }

function NotFound() {
  return <Layout><Meta meta={notFoundMeta} faqs={[]} title="Seite nicht gefunden"/><main id="main-content" className="not-found wrap"><p className="eyebrow dark">404</p><h1>Seite nicht gefunden</h1><p>Dieser Wissenspfad existiert noch nicht.</p><Link className="btn primary" to="/">Zur Startseite</Link></main></Layout>
}

export function AppRoutes() {
  return <Routes><Route path="/" element={<HomePage/>}/>{Object.values(hubPages).map(page => <Route key={page.path} path={page.path} element={<HubPage page={page}/>}/>)}{articles.map(article => <Route key={article.slug} path={article.path} element={<ArticlePage article={article}/>}/>)}<Route path="*" element={<NotFound/>}/></Routes>
}