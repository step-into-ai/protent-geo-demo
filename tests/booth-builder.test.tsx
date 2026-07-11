import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { BoothBuilder } from '../src/components/BoothBuilder'

afterEach(() => {
  cleanup()
  vi.restoreAllMocks()
})

describe('BoothBuilder', () => {
  it('wechselt das Standformat und aktualisiert Skizze sowie Zusammenfassung', () => {
    render(<BoothBuilder />)

    fireEvent.click(screen.getByRole('radio', { name: '6×4' }))

    expect(screen.getByRole('radio', { name: '6×4' })).toBeChecked()
    expect(screen.getByRole('img', { name: /Standformat 6×4/i })).toBeInTheDocument()
    expect(screen.getByTestId('booth-summary')).toHaveTextContent('Format: 6×4')
  })

  it('schaltet offene Seiten und Module als aria-pressed Toggle synchron', () => {
    render(<BoothBuilder />)
    const counter = screen.getByRole('button', { name: 'Theke' })
    const leftSide = screen.getByRole('button', { name: 'Links' })

    expect(counter).toHaveAttribute('aria-pressed', 'false')
    fireEvent.click(counter)
    fireEvent.click(leftSide)

    expect(counter).toHaveAttribute('aria-pressed', 'true')
    expect(leftSide).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('img', { name: /Module: Theke/i })).toBeInTheDocument()
    expect(screen.getByTestId('booth-summary')).toHaveTextContent('Offene Seiten: Vorne, Links')
    expect(screen.getByTestId('booth-summary')).toHaveTextContent('Module: Theke')
  })

  it('fasst eine leere Modulauswahl verständlich zusammen', () => {
    render(<BoothBuilder />)

    expect(screen.getByTestId('booth-summary')).toHaveTextContent('Format: 3×3')
    expect(screen.getByTestId('booth-summary')).toHaveTextContent('Offene Seiten: Vorne')
    expect(screen.getByTestId('booth-summary')).toHaveTextContent('Module: Keine ausgewählt')
  })

  it('setzt alle Eingaben auf den Ausgangszustand zurück', () => {
    render(<BoothBuilder />)
    fireEvent.click(screen.getByRole('radio', { name: '6×3' }))
    fireEvent.click(screen.getByRole('button', { name: 'Präsentationsfläche' }))
    fireEvent.click(screen.getByRole('button', { name: 'Rechts' }))

    fireEvent.click(screen.getByRole('button', { name: 'Planung zurücksetzen' }))

    expect(screen.getByRole('radio', { name: '3×3' })).toBeChecked()
    expect(screen.getByRole('button', { name: 'Präsentationsfläche' })).toHaveAttribute('aria-pressed', 'false')
    expect(screen.getByRole('button', { name: 'Rechts' })).toHaveAttribute('aria-pressed', 'false')
    expect(screen.getByTestId('booth-summary')).toHaveTextContent('Module: Keine ausgewählt')
  })

  it('kopiert die aktuelle Zusammenfassung und gibt Live-Feedback', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined)
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: { writeText },
    })
    render(<BoothBuilder />)
    fireEvent.click(screen.getByRole('button', { name: 'Gesprächszone' }))

    fireEvent.click(screen.getByRole('button', { name: 'Zusammenfassung kopieren' }))

    await waitFor(() => expect(writeText).toHaveBeenCalledWith(expect.stringContaining('Module: Gesprächszone')))
    expect(screen.getByRole('status')).toHaveTextContent('Zusammenfassung kopiert.')
  })

  it('nutzt bei fehlender Clipboard-API einen robusten Fallback', async () => {
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: undefined,
    })
    const execCommand = vi.fn().mockReturnValue(true)
    Object.defineProperty(document, 'execCommand', {
      configurable: true,
      value: execCommand,
    })
    render(<BoothBuilder />)

    fireEvent.click(screen.getByRole('button', { name: 'Zusammenfassung kopieren' }))

    await waitFor(() => expect(execCommand).toHaveBeenCalledWith('copy'))
    expect(screen.getByRole('status')).toHaveTextContent('Zusammenfassung kopiert.')
    expect(document.querySelector('[data-clipboard-fallback]')).not.toBeInTheDocument()
  })
})
