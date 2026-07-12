import { useState, type KeyboardEvent } from 'react'

type Choice = {
  value: string
  label: string
}

type Model = {
  name: string
  href: string
  orientation: string
}

const official = 'https://www.pro-tent.com/de-de'

const useCases: Choice[] = [
  { value: 'messe', label: 'Messe' },
  { value: 'promotion', label: 'Promotion' },
  { value: 'gastronomie', label: 'Gastronomie' },
  { value: 'schutz-rettung', label: 'Schutz / Rettung' },
  { value: 'verein', label: 'Verein / Verband' },
]

const areas: Choice[] = [
  { value: 'kompakt', label: 'Kompakt' },
  { value: 'mittel', label: 'Mittel' },
  { value: 'gross', label: 'Groß' },
]

const priorities: Choice[] = [
  { value: 'kompakt', label: 'Kompakt' },
  { value: 'modular', label: 'Modularer Innenraum' },
  { value: 'outdoor', label: 'Großes Outdoor-Format' },
]

const modelsByPriority: Record<string, Model> = {
  kompakt: {
    name: 'Pro-Tent 2000',
    href: `${official}/faltzelte/pro-tent-2000/`,
    orientation: 'Das Pro-Tent 2000 ist die Modellorientierung für kompakte Formate.',
  },
  modular: {
    name: 'Pro-Tent MODUL 4000',
    href: `${official}/faltzelte/pro-tent-modul-4000/`,
    orientation: 'Das Pro-Tent MODUL 4000 ist die Modellorientierung für einen modularen Innenraum.',
  },
  outdoor: {
    name: 'Pro-Tent 5000',
    href: `${official}/faltzelte/pro-tent-5000/`,
    orientation: 'Das Pro-Tent 5000 ist die Modellorientierung für große Formate und anspruchsvolle Outdoor-Einsätze.',
  },
}

function RadioStep({
  legend,
  name,
  options,
  value,
  onChange,
}: {
  legend: string
  name: string
  options: Choice[]
  value: string
  onChange: (value: string) => void
}) {
  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>, index: number) {
    const directions: Record<string, number> = {
      ArrowDown: 1,
      ArrowRight: 1,
      ArrowUp: -1,
      ArrowLeft: -1,
    }
    const direction = directions[event.key]
    let nextIndex: number | undefined

    if (direction) nextIndex = (index + direction + options.length) % options.length
    if (event.key === 'Home') nextIndex = 0
    if (event.key === 'End') nextIndex = options.length - 1
    if (nextIndex === undefined) return

    event.preventDefault()
    onChange(options[nextIndex].value)
    document.getElementById(`${name}-${nextIndex}`)?.focus()
  }

  return (
    <fieldset>
      <legend>{legend}</legend>
      {options.map((option, index) => (
        <label key={option.value}>
          <input
            id={`${name}-${index}`}
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={() => onChange(option.value)}
            onKeyDown={(event) => handleKeyDown(event, index)}
          />
          {option.label}
        </label>
      ))}
    </fieldset>
  )
}

export function TentFinder() {
  const [step, setStep] = useState(0)
  const [useCase, setUseCase] = useState('')
  const [area, setArea] = useState('')
  const [priority, setPriority] = useState('')
  const [showResult, setShowResult] = useState(false)

  const values = [useCase, area, priority]
  const model = priority ? modelsByPriority[priority] : undefined

  function goBack() {
    if (showResult) {
      setShowResult(false)
      return
    }
    setStep((current) => Math.max(0, current - 1))
  }

  function reset() {
    setUseCase('')
    setArea('')
    setPriority('')
    setStep(0)
    setShowResult(false)
  }

  return (
    <section className="tent-finder-tool" aria-labelledby="tent-finder-title">
      <h2 id="tent-finder-title">Zelt-Finder</h2>
      <p className="tent-finder__intro">Beantworten Sie drei kurze Fragen. Anschließend erhalten Sie eine Modellorientierung mit den wichtigsten Gründen für die weitere Planung.</p>

      {!showResult && (
        <>
          <p className="tent-finder__progress" aria-live="polite"><span style={{ width: `${((step + 1) / 3) * 100}%` }} aria-hidden="true"/>Schritt {step + 1} von 3</p>

          {step === 0 && (
            <RadioStep
              legend="Wofür wird das Zelt eingesetzt?"
              name="einsatz"
              options={useCases}
              value={useCase}
              onChange={setUseCase}
            />
          )}
          {step === 1 && (
            <RadioStep
              legend="Wie viel Fläche benötigen Sie?"
              name="flaeche"
              options={areas}
              value={area}
              onChange={setArea}
            />
          )}
          {step === 2 && (
            <RadioStep
              legend="Welche Priorität ist Ihnen wichtig?"
              name="prioritaet"
              options={priorities}
              value={priority}
              onChange={setPriority}
            />
          )}

          <div className="tent-finder__actions">
            {step > 0 && (
              <button type="button" onClick={goBack}>
                Zurück
              </button>
            )}
            {step < 2 ? (
              <button type="button" disabled={!values[step]} onClick={() => setStep((current) => current + 1)}>
                Weiter
              </button>
            ) : (
              <button type="button" disabled={!priority} onClick={() => setShowResult(true)}>
                Ergebnis anzeigen
              </button>
            )}
          </div>
        </>
      )}

      {showResult && model && (
        <div className="tent-finder__result" role="status" aria-live="polite" aria-atomic="true">
          <h3>{model.name}</h3>
          <p>{model.orientation}</p>
          <p>
            Ihre Auswahl: {useCases.find((choice) => choice.value === useCase)?.label}; Fläche{' '}
            {areas.find((choice) => choice.value === area)?.label}; Priorität{' '}
            {priorities.find((choice) => choice.value === priority)?.label}.
          </p>
          <a className="btn primary" href={model.href} target="_blank" rel="noopener noreferrer">{model.name} ansehen <span aria-hidden="true">↗</span></a>
        </div>
      )}

      {showResult && (
        <button type="button" onClick={goBack}>
          Zurück
        </button>
      )}
      <button className="tent-finder__reset" type="button" onClick={reset}>Finder zurücksetzen</button>
    </section>
  )
}
