import { cleanup, fireEvent, render, screen, within } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { TentFinder } from '../src/components/TentFinder'

afterEach(cleanup)

function choose(name: string) {
  fireEvent.click(screen.getByRole('radio', { name }))
}

function next() {
  fireEvent.click(screen.getByRole('button', { name: /weiter/i }))
}

describe('TentFinder', () => {
  it('nutzt echte Radiogruppen und lässt sich ohne automatisches Weiterschalten per Tastatur bedienen', () => {
    render(<TentFinder />)

    const group = screen.getByRole('group', { name: /wofür wird das zelt eingesetzt/i })
    const messe = within(group).getByRole('radio', { name: 'Messe' })
    messe.focus()
    fireEvent.keyDown(messe, { key: 'ArrowDown' })

    const promotion = within(group).getByRole('radio', { name: 'Promotion' })
    expect(promotion).toBeChecked()
    expect(promotion).toHaveFocus()
    expect(screen.getByText(/schritt 1 von 3/i)).toBeInTheDocument()

    next()
    expect(screen.getByRole('group', { name: /wie viel fläche benötigen sie/i })).toBeInTheDocument()
    expect(screen.getByText(/schritt 2 von 3/i)).toBeInTheDocument()
  })

  it('behält Antworten beim Zurückgehen bei', () => {
    render(<TentFinder />)
    choose('Gastronomie')
    next()
    choose('Mittel')
    next()

    fireEvent.click(screen.getByRole('button', { name: /^zurück$/i }))
    expect(screen.getByRole('radio', { name: 'Mittel' })).toBeChecked()
    fireEvent.click(screen.getByRole('button', { name: /^zurück$/i }))
    expect(screen.getByRole('radio', { name: 'Gastronomie' })).toBeChecked()
  })

  it('liefert reproduzierbare, begründete Empfehlungen in einer höflichen Live-Region', () => {
    const { unmount } = render(<TentFinder />)
    choose('Schutz / Rettung')
    next()
    choose('Groß')
    next()
    choose('Großes Outdoor-Format')
    fireEvent.click(screen.getByRole('button', { name: /ergebnis anzeigen/i }))

    const result = screen.getByRole('status')
    expect(result).toHaveAttribute('aria-live', 'polite')
    expect(within(result).getByText('Pro-Tent 5000')).toBeInTheDocument()
    expect(result).toHaveTextContent(/große formate und anspruchsvolle outdoor-einsätze/i)
    const link = within(result).getByRole('link', { name: /pro-tent 5000 ansehen/i })
    expect(link).toHaveAttribute('href', '/pro-tent-5000')

    unmount()
    render(<TentFinder />)
    choose('Schutz / Rettung')
    next()
    choose('Groß')
    next()
    choose('Großes Outdoor-Format')
    fireEvent.click(screen.getByRole('button', { name: /ergebnis anzeigen/i }))
    expect(screen.getByRole('status')).toHaveTextContent('Pro-Tent 5000')
  })

  it('setzt Schritt, Antworten und Ergebnis vollständig zurück', () => {
    render(<TentFinder />)
    choose('Messe')
    next()
    choose('Kompakt')
    next()
    choose('Kompakt')
    fireEvent.click(screen.getByRole('button', { name: /ergebnis anzeigen/i }))
    expect(screen.getByRole('status')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: /zurücksetzen/i }))
    expect(screen.getByText(/schritt 1 von 3/i)).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
    expect(screen.getAllByRole('radio').every((radio) => !(radio as HTMLInputElement).checked)).toBe(true)
  })

  it('bleibt bei belegbaren Orientierungstexten ohne Kapazitäts- oder Wetterversprechen', () => {
    const { container } = render(<TentFinder />)
    const text = container.textContent ?? ''

    expect(text).toMatch(/orientierung/i)
    expect(text).toMatch(/keine technische freigabe/i)
    expect(text).not.toMatch(/\bpersonen?\b/i)
    expect(text).not.toMatch(/kapazität/i)
    expect(text).not.toMatch(/wetterfest|sturmfest|windlast|schneelast/i)
  })
})
