import { cleanup, render, screen, within } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { afterEach, describe, expect, it } from 'vitest'
import HomePage from '../src/App'
import { AppRoutes } from '../src/routes'

function renderHome() {
  render(<MemoryRouter><HomePage /></MemoryRouter>)
}

afterEach(cleanup)

describe('Kai presentation readiness', () => {
  it('positions the presentation clearly for Pro-Tent Deutschland', () => {
    renderHome()
    expect(screen.getByRole('link', { name: /Pro-Tent.*Deutschland.*Wissensplattform/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/mobile Markenräume/i)
  })

  it('does not expose internal demo or editorial workflow language', () => {
    renderHome()
    const visible = document.body.textContent ?? ''
    expect(visible).not.toMatch(/unabhängige Demo|Wissensdemo|Über diese Demo|redaktionelle Einordnung|reproduzierbare Modellorientierung|technische Freigabe/i)
  })

  it('uses formal German address in the public pitch', () => {
    renderHome()
    const main = screen.getByRole('main').textContent ?? ''
    expect(main).not.toMatch(/\bNutze\b|\bdein(?:e[rmns]?)?\b|\bdu\b/i)
  })

  it('presents article evidence without internal editorial terminology', () => {
    render(<MemoryRouter initialEntries={['/messestand-planen']}><AppRoutes /></MemoryRouter>)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Messestand planen/i)
    expect(document.body.textContent ?? '').not.toMatch(/redaktionelle Einordnung|Freigabestatus|Prüfklasse/i)
    expect(screen.getByRole('link', { name: /Pro-Tent.*Deutschland.*Wissensplattform/i })).toBeInTheDocument()
  })

  it('shows hub evidence as useful proof instead of internal workflow labels', () => {
    render(<MemoryRouter initialEntries={['/faltzelte']}><AppRoutes /></MemoryRouter>)
    const visible = document.body.textContent ?? ''
    expect(visible).toMatch(/Offizielle Produktquellen/i)
    expect(visible).not.toMatch(/redaktionelle Einordnung|Herstellerangabe|Freigabe ausstehend/i)
  })

  it('shows a curated set of concept visuals with transparent labels', () => {
    renderHome()
    const gallery = screen.getByRole('region', { name: /Vom Faltzelt zum mobilen Markenraum/i })
    expect(within(gallery).getAllByRole('img')).toHaveLength(4)
    expect(within(gallery).getAllByText(/Konzeptvisual/i)).toHaveLength(4)
  })
})
