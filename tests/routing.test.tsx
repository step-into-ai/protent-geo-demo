import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { afterEach, describe, expect, it } from 'vitest'
import { AppRoutes } from '../src/routes'
import { SourceList } from '../src/components/SourceList'
import { sources } from '../src/content/sources'
import { articles } from '../src/content/articles'

const hubs = [
  ['/faltzelte', /Faltzelte verstehen/i],
  ['/messestaende', /Messestände planen/i],
  ['/promotion-event', /Promotion und Events/i],
  ['/bedruckung', /Bedruckung als Markensystem/i],
  ['/ausstattung', /Ausstattung nach Aufgabe/i],
] as const

afterEach(cleanup)

describe('routing', () => {
  it.each(hubs)('rendert %s als echte Hub-Route', (path, heading) => {
    render(<MemoryRouter initialEntries={[path]}><AppRoutes /></MemoryRouter>)
    expect(screen.getByRole('heading', { level: 1, name: heading })).toBeInTheDocument()
  })

  it.each(articles)('rendert /$slug als direkte öffentliche Artikelroute', article => {
    render(<MemoryRouter initialEntries={[article.path]}><AppRoutes /></MemoryRouter>)
    expect(screen.getByRole('heading', { level: 1, name: article.title })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Kurz und belastbar beantwortet/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Offizielle Informationsbasis/i })).toBeInTheDocument()
  })

  it('zeigt für unbekannte Pfade eine 404-Seite', () => {
    render(<MemoryRouter initialEntries={['/unbekannt']}><AppRoutes /></MemoryRouter>)
    expect(screen.getByRole('heading', { name: /Seite nicht gefunden/i })).toBeInTheDocument()
  })

  it('setzt bei Navigation in derselben Routerinstanz genau ein verwaltetes Meta je Typ', async () => {
    render(<MemoryRouter initialEntries={['/faltzelte']}><AppRoutes /></MemoryRouter>)
    await waitFor(() => expect(document.title).toContain('Faltzelte verstehen'))
    fireEvent.click(screen.getByRole('link', { name: /Wissenswelt Startseite/i }))
    await waitFor(() => expect(document.title).toBe('Pro-Tent Wissenswelt | Faltzelte verständlich auswählen'))
    expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute('href', 'https://step-into-ai.github.io/protent-geo-demo/')
    expect(document.querySelector('meta[property="og:url"]')).toHaveAttribute('content', 'https://step-into-ai.github.io/protent-geo-demo/')
    expect(document.querySelector('meta[name="robots"]')).toHaveAttribute('content', expect.stringContaining('index'))
    expect(document.querySelectorAll('script[data-page-schema]')).toHaveLength(1)
    for (const selector of ['meta[name="description"]', 'meta[name="robots"]', 'meta[property="og:title"]', 'meta[property="og:description"]', 'meta[property="og:url"]', 'link[rel="canonical"]']) {
      expect(document.querySelectorAll(`${selector}[data-page-meta="true"]`)).toHaveLength(1)
    }
  })

  it('setzt für 404 Titel, noindex und einen passenden Canonical', async () => {
    render(<MemoryRouter initialEntries={['/unbekannt']}><AppRoutes /></MemoryRouter>)
    await waitFor(() => expect(document.title).toContain('404'))
    expect(document.querySelector('meta[name="robots"]')).toHaveAttribute('content', 'noindex,follow')
    expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute('href', 'https://step-into-ai.github.io/protent-geo-demo/404.html')
  })

  it('rendert Freigabe-Claims nicht öffentlich und verwendet das Source-retrievedAt', () => {
    const original = sources.overview.retrievedAt
    try {
      ;(sources.overview as { retrievedAt: string }).retrievedAt = '2025-01-02'
      render(<SourceList claimIds={['three-models', 'no-weather-release']} />)
      expect(screen.queryByText(/Eine konkrete Wind-/)).not.toBeInTheDocument()
      expect(screen.getByRole('link', { name: /abgerufen am 02\.01\.2025/ })).toBeInTheDocument()
    } finally {
      ;(sources.overview as { retrievedAt: string }).retrievedAt = original
    }
  })
})
