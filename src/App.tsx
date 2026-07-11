import { useEffect, useState } from 'react'
import './App.css'

const official = 'https://www.pro-tent.com/de-de'
const assets = `${import.meta.env.BASE_URL}images/`

const models = [
  {
    name: 'Pro-Tent 2000', label: 'Der bewährte Klassiker', image: `${assets}model-2000.png`,
    text: 'Kompaktes Profi-Faltzelt für kleinere Budgets – mit Aluminiumgestell, werkzeuglosem Aufbau und Größen von 2 × 2 m bis 6 × 3 m.',
    sizes: ['2 × 2 m', '2,4 × 2,4 m', '3 × 2 m', '3 × 3 m', '4 × 2 m', '4,5 × 3 m', '6 × 3 m'],
    href: `${official}/faltzelte/pro-tent-2000/`
  },
  {
    name: 'Pro-Tent MODUL 4000', label: 'Das modulare Raumwunder', image: `${assets}model-4000.png`,
    text: 'Für variable Raumkonzepte, Innenkabinen und systematische Erweiterungen. Das Omegaprofil nimmt Zubehör direkt auf.',
    sizes: ['1,5 × 1,5 m', '2 × 2 m', '3 × 1,5 m', '3 × 2 m', '3 × 3 m', '4 × 2 m', '4,5 × 3 m', '6 × 3 m'],
    href: `${official}/faltzelte/pro-tent-modul-4000/`
  },
  {
    name: 'Pro-Tent 5000', label: 'Für maximale Stabilität', image: `${assets}model-5000.png`,
    text: 'Das Profi-System für intensive Outdoor-Einsätze und große Formate – vom 3 × 3 m Faltzelt bis zum 8 × 4 m System.',
    sizes: ['3 × 3 m', '4,5 × 3 m', '6 × 3 m', '4 × 4 m', '6 × 4 m', '8 × 4 m'],
    href: `${official}/faltzelte/pro-tent-5000/`
  }
]

const useCases = [
  ['Messe & Promotion', 'Sichtbarkeit, schneller Einsatz und ein konsistenter Markenauftritt.', `${official}/einsatzbereiche/events-promotion-messen/`],
  ['Gastronomie', 'Flexible Außenfläche für Service, Catering und Veranstaltungen.', `${official}/einsatzbereiche/gastronomie-gastgewerbe/`],
  ['Schutz & Rettung', 'Mobile Arbeits- und Schutzräume für planbare Einsatzabläufe.', `${official}/einsatzbereiche/schutz-rettung/`],
  ['Vereine & Verbände', 'Vielseitiger Treffpunkt für Turniere, Feste und Informationsstände.', `${official}/einsatzbereiche/vereine-verbaende/`]
]

const questions = [
  {q:'Welches Faltzelt eignet sich für eine Messe?', a:'Für einen einfachen Markenstand kann das Pro-Tent 2000 passen. Wenn Innenkabinen, Raumteiler oder direkt am Profil befestigtes Zubehör gefragt sind, ist das MODUL 4000 naheliegend. Für große Formate und besonders anspruchsvolle Outdoor-Einsätze kommt das Pro-Tent 5000 infrage. Die endgültige Wahl hängt von Fläche, Ausstattung, Windlast und Transport ab.'},
  {q:'Wie finde ich die passende Zeltgröße?', a:'Plane zuerst Personen, Mobiliar, Waren, Bewegungsflächen und Zugang ein. Pro-Tent führt Standardgrößen von 1,5 × 1,5 m bis 8 × 4 m; nicht jede Größe ist in jeder Modellreihe verfügbar. Für belastbare Kapazitätsangaben sollte die konkrete Nutzung mit der Beratung abgestimmt werden.'},
  {q:'Wie wird ein Pro-Tent aufgebaut?', a:'Die Faltkonstruktion wird auseinandergezogen, in der Höhe justiert und anschließend sicher befestigt. Laut Hersteller ist kein Werkzeug nötig; zu zweit geht der Aufbau besonders einfach, grundsätzlich kann er auch allein erfolgen. Zubehör und sichere Verankerung kommen danach.'},
  {q:'Welche Möglichkeiten der Bedruckung gibt es?', a:'Pro-Tent nennt drei Druckverfahren und bietet von Logodruck bis Vollbedruckung unterschiedliche Lösungen. Auch Zubehör kann personalisiert werden. Welches Verfahren passt, hängt von Motiv, Material, Einsatz und gewünschter Wirkung ab.'},
  {q:'Was ist bei Wind und Regen wichtig?', a:'Ein Faltzelt muss dem Untergrund und Wetter entsprechend verankert oder beschwert werden. Geeignetes Zubehör sind beispielsweise Abspannsets, Gewichtsplatten sowie Wasser- oder Sandgewichte. Bei kritischem Wetter gelten immer die Herstellerhinweise und die Verantwortung vor Ort – eine pauschale Windfreigabe gibt diese Demo nicht.'}
]

function Out({href, children}:{href:string, children:React.ReactNode}) {
  return <a className="out" href={href} target="_blank" rel="noopener noreferrer">{children}<span aria-hidden="true">↗</span></a>
}

export default function App() {
  const [menu, setMenu] = useState(false)
  useEffect(() => {
    const schema = {
      '@context':'https://schema.org', '@type':'FAQPage',
      mainEntity: questions.map(item => ({'@type':'Question', name:item.q, acceptedAnswer:{'@type':'Answer', text:item.a}}))
    }
    const el = document.createElement('script'); el.type='application/ld+json'; el.text=JSON.stringify(schema); document.head.appendChild(el)
    return () => { document.head.removeChild(el) }
  }, [])

  return <>
    <header className="site-header">
      <a className="brand official-brand" href="#top" aria-label="Pro-Tent Wissenswelt Startseite"><img src={`${assets}logo-protent.svg`} alt="Pro-Tent"/><span className="knowledge-label">Wissenswelt</span></a>
      <button className="menu-btn" aria-expanded={menu} aria-controls="main-nav" onClick={()=>setMenu(!menu)}>Menü <span aria-hidden="true">☰</span></button>
      <nav id="main-nav" className={menu?'open':''} aria-label="Hauptnavigation">
        <a href="#finder" onClick={()=>setMenu(false)}>Zelt finden</a><a href="#modelle" onClick={()=>setMenu(false)}>Modelle</a><a href="#wissen" onClick={()=>setMenu(false)}>Ratgeber</a><a href="#faq" onClick={()=>setMenu(false)}>Fragen</a>
        <Out href={`${official}/konfigurator/`}>Konfigurator</Out>
      </nav>
    </header>

    <main id="top">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-photo" role="img" aria-label="Pro-Tent Faltzelt im professionellen Außeneinsatz" />
        <div className="hero-overlay" />
        <div className="hero-content wrap">
          <p className="eyebrow">Orientierung für professionelle Faltzelte</p>
          <h1 id="hero-title">Das passende Zelt.<br/><em>Klar entschieden.</em></h1>
          <p className="lead">Modelle, Größen, Einsatzbereiche und Ausstattung verständlich erklärt – mit direktem Weg zu den offiziellen Pro-Tent Produktseiten.</p>
          <div className="hero-actions"><a className="btn primary" href="#finder">Zelt auswählen</a><Out href={`${official}/beratung/`}>Persönliche Beratung</Out></div>
          <p className="source-note">Unabhängige Demo-Wissenswelt · Produktangaben basieren auf pro-tent.com</p>
        </div>
      </section>

      <section className="quickbar" aria-label="Schnelleinstieg"><div className="wrap quickgrid">
        <a href="#modelle"><b>3</b><span>Modellreihen vergleichen</span><i>→</i></a>
        <a href="#groessen"><b>1,5–8 m</b><span>Standardgrößen einordnen</span><i>→</i></a>
        <a href="#wissen"><b>4 Schritte</b><span>Von Nutzung bis Zubehör</span><i>→</i></a>
      </div></section>

      <section id="finder" className="section wrap finder">
        <div className="section-head"><p className="eyebrow dark">Entscheidungshilfe</p><h2>Wofür brauchst du dein Faltzelt?</h2><p>Starte mit dem Einsatz – nicht mit der Modellnummer. So werden Fläche, Ausstattung und Stabilitätsbedarf früh sichtbar.</p></div>
        <div className="use-grid">
          {useCases.map(([name,text,href],i)=><article className="use-card" key={name}><span className="index">0{i+1}</span><div><h3>{name}</h3><p>{text}</p><Out href={href}>Einsatzbereich ansehen</Out></div></article>)}
        </div>
        <div className="decision"><div><span className="icon" aria-hidden="true">◎</span><div><b>Noch unklar?</b><p>Der Hersteller führt in fünf Schritten von Bedarf und Gestaltung bis zur passenden Konfiguration.</p></div></div><Out href={`${official}/beratung/`}>Beratungsablauf öffnen</Out></div>
      </section>

      <section id="modelle" className="section model-section"><div className="wrap">
        <div className="section-head split"><div><p className="eyebrow dark">Modellvergleich</p><h2>Drei Systeme, drei Schwerpunkte</h2></div><p>Der Vergleich fasst die Positionierung und verfügbaren Standardgrößen zusammen. Technische Details bleiben auf den offiziellen Produktseiten.</p></div>
        <div className="model-grid">{models.map((m,i)=><article className="model-card" key={m.name}>
          <div className="model-image"><span>0{i+1}</span><img src={m.image} alt={`${m.name} Faltzelt – Produktansicht`}/></div>
          <div className="model-copy"><p className="model-label">{m.label}</p><h3>{m.name}</h3><p>{m.text}</p><div className="size-list" aria-label={`Größen ${m.name}`}>{m.sizes.map(s=><span key={s}>{s}</span>)}</div><Out href={m.href}>Offizielle Produktdetails</Out></div>
        </article>)}</div>
        <p className="fact-note">Hinweis: Größenangaben laut offizieller Modell- und Größenübersicht, abgerufen am 11.07.2026. Sondergrößen sind laut Hersteller auf Anfrage möglich.</p>
      </div></section>

      <section id="groessen" className="section wrap size-section">
        <div className="size-visual" aria-hidden="true"><div className="tent-shape"><span>Fläche<br/>realistisch planen</span></div></div>
        <div><p className="eyebrow dark">Größenwahl</p><h2>Quadratmeter allein reichen nicht.</h2><p className="intro">Eine gute Größenentscheidung berücksichtigt Nutzung und Bewegungsabläufe – nicht nur die Grundfläche.</p>
          <ol className="steps"><li><b>Personen & Aufgabe</b><span>Beratung, Verkauf, Service oder geschützter Arbeitsbereich?</span></li><li><b>Inventar & Wege</b><span>Theke, Exponate, Material, Türen und freie Bewegungsflächen einplanen.</span></li><li><b>Standort & Wetter</b><span>Untergrund, Verankerung und Exposition vor der Auswahl prüfen.</span></li><li><b>Transport & Team</b><span>Packmaß, Gewicht und Aufbauprozess in die Entscheidung einbeziehen.</span></li></ol>
          <Out href={`${official}/faltzeltgroesse-berechnen/`}>Offiziellen Größenratgeber lesen</Out>
        </div>
      </section>

      <section id="wissen" className="section knowledge"><div className="wrap">
        <div className="section-head"><p className="eyebrow">Praxiswissen</p><h2>Von der Idee zum sicheren Einsatz</h2></div>
        <div className="knowledge-grid">
          <article className="feature-card print"><img src={`${assets}printing.jpg`} alt="Individuell bedrucktes Pro-Tent im Veranstaltungseinsatz"/><div><span>Markenauftritt</span><h3>Bedruckung, die zum Einsatz passt</h3><p>Logo, Teilfläche oder Vollbedruckung: Motiv, Sichtachsen und Zubehör sollten als Gesamtsystem geplant werden.</p><Out href={`${official}/druckservice/`}>Druckservice verstehen</Out></div></article>
          <article className="mini-card"><img src={`${assets}accessories.jpg`} alt="Faltzelt-Zubehör von Pro-Tent"/><div><span>Ausstattung</span><h3>Zubehör mit Funktion</h3><p>Seitenwände, Gewichte, Theken, Licht und Transportsysteme nach Aufgabe auswählen.</p><Out href={`${official}/zubehoer/`}>Zubehör entdecken</Out></div></article>
          <article className="mini-card text-card"><div><span>Aufbau</span><h3>Werkzeuglos – aber nicht planlos</h3><p>Aufstellen, Höhe justieren, korrekt befestigen und erst dann Zubehör montieren.</p><Out href={`${official}/faltzelte/aufbau/`}>Aufbau ansehen</Out></div></article>
        </div>
        <aside className="safety"><b>Sicherheit vor Schnelligkeit.</b><p>Wind, Untergrund und lokale Vorgaben können die Nutzung verändern. Herstellerhinweise, geeignete Verankerung und die Situation vor Ort sind entscheidend.</p><Out href={`${official}/faltpavillons-befestigen/`}>Befestigung richtig planen</Out></aside>
      </div></section>

      <section id="faq" className="section wrap faq">
        <div className="section-head"><p className="eyebrow dark">Häufige Entscheidungen</p><h2>Kurz beantwortet. Im Kontext erklärt.</h2></div>
        <div className="faq-list">{questions.map((item,i)=><details key={item.q} open={i===0}><summary><span>{String(i+1).padStart(2,'0')}</span>{item.q}<i aria-hidden="true">+</i></summary><p>{item.a}</p></details>)}</div>
      </section>

      <section className="cta"><div className="wrap"><div><p className="eyebrow">Nächster Schritt</p><h2>Aus Wissen wird eine passende Konfiguration.</h2><p>Nutze die Wissenswelt zur Orientierung – und kläre Modell, Größe, Druck und Zubehör anschließend direkt mit Pro-Tent.</p></div><div className="cta-actions"><Out href={`${official}/konfigurator/zelt-konfigurator/`}>Zelt konfigurieren</Out><Out href={`${official}/kontakt/`}>Kontakt aufnehmen</Out></div></div></section>
    </main>

    <footer><div className="wrap footer-grid"><div className="brand official-brand footer-brand"><span className="footer-logo"><img src={`${assets}logo-protent.svg`} alt="Pro-Tent"/></span><span className="knowledge-label">Wissenswelt</span></div><div><b>Orientierung</b><a href="#modelle">Modelle</a><a href="#groessen">Größen</a><a href="#wissen">Praxiswissen</a></div><div><b>Offizielle Seiten</b><a href={`${official}/faltzelte/`} target="_blank">Faltzelte ↗</a><a href={`${official}/zubehoer/`} target="_blank">Zubehör ↗</a><a href={`${official}/beratung/`} target="_blank">Beratung ↗</a></div><div><b>Über diese Demo</b><p>Öffentliche, redaktionell eigenständige Wissensdemo. Keine offizielle Website der Pro-Tent AG.</p></div></div><div className="wrap legal"><span>Demo · Stand 11. Juli 2026</span><a href="/quellen">Quellen im Repository</a></div></footer>
  </>
}
