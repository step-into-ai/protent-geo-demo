import { cleanup, fireEvent, render, screen, waitFor, within } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { afterEach, describe, expect, it, vi } from 'vitest'
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

afterEach(() => {
  cleanup()
  vi.unstubAllGlobals()
})

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

  it('rendert /wissen als vollständige Übersicht aller 25 Wissensseiten', () => {
    render(<MemoryRouter initialEntries={['/wissen']}><AppRoutes /></MemoryRouter>)
    expect(screen.getByRole('heading', { level: 1, name: /Wissen für mobile Markenräume/i })).toBeInTheDocument()
    for (const article of articles) expect(screen.getByRole('link', { name: article.title })).toBeInTheDocument()
  })

  it('zeigt für unbekannte Pfade eine 404-Seite', () => {
    render(<MemoryRouter initialEntries={['/unbekannt']}><AppRoutes /></MemoryRouter>)
    expect(screen.getByRole('heading', { name: /Seite nicht gefunden/i })).toBeInTheDocument()
  })

  it('scrollt bei einem echten Pfadwechsel zuverlässig nach oben', async () => {
    const scrollTo = vi.fn()
    vi.stubGlobal('scrollTo', scrollTo)
    render(<MemoryRouter initialEntries={['/faltzelte']}><AppRoutes /></MemoryRouter>)
    scrollTo.mockClear()

    fireEvent.click(screen.getByRole('button', { name: 'Wissen' }))
    fireEvent.click(within(screen.getByRole('navigation', { name: 'Hauptnavigation' })).getByRole('link', { name: 'Messe' }))

    await waitFor(() => expect(scrollTo).toHaveBeenCalledWith(0, 0))
    expect(screen.getByRole('heading', { level: 1, name: /Messestände planen/i })).toBeInTheDocument()
  })

  it('scrollt Hash-Ziele gezielt an, statt sie mit Scroll-to-top zu übergehen', async () => {
    const scrollTo = vi.fn()
    const scrollIntoView = vi.fn()
    vi.stubGlobal('scrollTo', scrollTo)
    Object.defineProperty(HTMLElement.prototype, 'scrollIntoView', { configurable: true, value: scrollIntoView })

    render(<MemoryRouter initialEntries={['/faltzelte#main-content']}><AppRoutes /></MemoryRouter>)

    await waitFor(() => expect(scrollIntoView).toHaveBeenCalledOnce())
    expect(scrollTo).not.toHaveBeenCalled()
  })

  it('bietet Wissen gut sichtbar mit allen Hubs und einer Gesamtübersicht an', () => {
    render(<MemoryRouter initialEntries={['/faltzelte']}><AppRoutes /></MemoryRouter>)

    fireEvent.click(screen.getByRole('button', { name: 'Wissen' }))
    const navigation = screen.getByRole('navigation', { name: 'Hauptnavigation' })
    for (const label of ['Faltzelte', 'Messe', 'Promotion', 'Bedruckung', 'Ausstattung', 'Alle Wissensseiten']) {
      expect(navigation).toHaveTextContent(label)
    }
  })

  it('schließt das mobile Menü nach Auswahl einer Wissensseite', async () => {
    render(<MemoryRouter initialEntries={['/faltzelte']}><AppRoutes /></MemoryRouter>)
    const menuButton = screen.getByRole('button', { name: 'Menü öffnen' })
    fireEvent.click(menuButton)
    fireEvent.click(screen.getByRole('button', { name: 'Wissen' }))
    fireEvent.click(within(screen.getByRole('navigation', { name: 'Hauptnavigation' })).getByRole('link', { name: 'Messe' }))

    await waitFor(() => expect(screen.getByRole('button', { name: 'Menü öffnen' })).toHaveAttribute('aria-expanded', 'false'))
  })

  it('rendert den Booth-Builder nicht mehr im öffentlichen Messestand-Hub', () => {
    render(<MemoryRouter initialEntries={['/messestaende']}><AppRoutes /></MemoryRouter>)

    expect(screen.queryByRole('heading', { name: /2D-Booth-Builder/i })).not.toBeInTheDocument()
    expect(screen.queryByText(/Planungskonsole/i)).not.toBeInTheDocument()
  })

  it('setzt bei Navigation in derselben Routerinstanz genau ein verwaltetes Meta je Typ', async () => {
    render(<MemoryRouter initialEntries={['/faltzelte']}><AppRoutes /></MemoryRouter>)
    await waitFor(() => expect(document.title).toContain('Faltzelte verstehen'))
    fireEvent.click(screen.getByRole('link', { name: /Pro-Tent.*Deutschland.*Wissensplattform/i }))
    await waitFor(() => expect(document.title).toBe('Pro-Tent Deutschland | Wissen für mobile Markenräume'))
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
