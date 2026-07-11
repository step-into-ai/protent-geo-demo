import { useState } from 'react'

const formats = ['3×3', '6×3', '6×4'] as const
const sides = ['Vorne', 'Links', 'Rechts', 'Hinten'] as const
const modules = ['Theke', 'Präsentationsfläche', 'Stauraum', 'Gesprächszone', 'Zugang'] as const

type Format = (typeof formats)[number]
type Side = (typeof sides)[number]
type BoothModule = (typeof modules)[number]

const initialFormat: Format = '3×3'
const initialSides: Side[] = ['Vorne']

function toggleItem<T>(items: T[], item: T): T[] {
  return items.includes(item) ? items.filter((entry) => entry !== item) : [...items, item]
}

function fallbackCopy(text: string): boolean {
  const textarea = document.createElement('textarea')
  textarea.value = text
  textarea.readOnly = true
  textarea.dataset.clipboardFallback = 'true'
  textarea.style.position = 'fixed'
  textarea.style.opacity = '0'
  document.body.appendChild(textarea)
  textarea.select()

  try {
    return typeof document.execCommand === 'function' && document.execCommand('copy')
  } finally {
    textarea.remove()
  }
}

export function BoothBuilder() {
  const [format, setFormat] = useState<Format>(initialFormat)
  const [openSides, setOpenSides] = useState<Side[]>(initialSides)
  const [selectedModules, setSelectedModules] = useState<BoothModule[]>([])
  const [copyFeedback, setCopyFeedback] = useState('')

  const sideText = openSides.length ? openSides.join(', ') : 'Keine ausgewählt'
  const moduleText = selectedModules.length ? selectedModules.join(', ') : 'Keine ausgewählt'
  const summary = `Format: ${format}\nOffene Seiten: ${sideText}\nModule: ${moduleText}`
  const imageLabel = `Standformat ${format}. Offene Seiten: ${sideText}. Module: ${moduleText}.`

  function reset() {
    setFormat(initialFormat)
    setOpenSides(initialSides)
    setSelectedModules([])
    setCopyFeedback('')
  }

  async function copySummary() {
    let copied = false

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(summary)
        copied = true
      } else {
        copied = fallbackCopy(summary)
      }
    } catch {
      try {
        copied = fallbackCopy(summary)
      } catch {
        copied = false
      }
    }

    setCopyFeedback(copied
      ? 'Zusammenfassung kopiert.'
      : 'Kopieren nicht möglich. Bitte die Zusammenfassung manuell markieren.')
  }

  return (
    <section className="booth-builder" aria-labelledby="booth-builder-title">
      <h2 id="booth-builder-title">2D-Booth-Builder</h2>

      <fieldset className="booth-builder__formats">
        <legend>Standformat</legend>
        {formats.map((option) => (
          <label key={option}>
            <input
              type="radio"
              name="booth-format"
              value={option}
              checked={format === option}
              onChange={() => setFormat(option)}
            />
            {option}
          </label>
        ))}
      </fieldset>

      <div className="booth-builder__controls">
        <fieldset>
          <legend>Offene Seiten</legend>
          {sides.map((side) => (
            <button
              key={side}
              type="button"
              aria-pressed={openSides.includes(side)}
              onClick={() => setOpenSides((current) => toggleItem(current, side))}
            >
              {side}
            </button>
          ))}
        </fieldset>

        <fieldset>
          <legend>Ausstattung und Zonen</legend>
          {modules.map((module) => (
            <button
              key={module}
              type="button"
              aria-pressed={selectedModules.includes(module)}
              onClick={() => setSelectedModules((current) => toggleItem(current, module))}
            >
              {module}
            </button>
          ))}
        </fieldset>
      </div>

      <div
        className={`booth-plan booth-plan--${format.replace('×', 'x')}`}
        role="img"
        aria-label={imageLabel}
      >
        <span className="booth-plan__label" aria-hidden="true">{format}</span>
        {sides.map((side) => (
          <span
            key={side}
            className={`booth-plan__side booth-plan__side--${side.toLowerCase()}${openSides.includes(side) ? ' is-open' : ''}`}
            aria-hidden="true"
          />
        ))}
        {selectedModules.map((module) => (
          <span
            key={module}
            className={`booth-plan__module booth-plan__module--${module.toLowerCase().replace('ä', 'ae')}`}
            aria-hidden="true"
          >
            {module}
          </span>
        ))}
      </div>

      <div className="booth-builder__summary" data-testid="booth-summary">
        <h3>Zusammenfassung</h3>
        <p>Format: {format}</p>
        <p>Offene Seiten: {sideText}</p>
        <p>Module: {moduleText}</p>
      </div>

      <div className="booth-builder__actions">
        <button type="button" onClick={reset}>Planung zurücksetzen</button>
        <button type="button" onClick={copySummary}>Zusammenfassung kopieren</button>
      </div>
      <p className="booth-builder__feedback" role="status" aria-live="polite">{copyFeedback}</p>
    </section>
  )
}
