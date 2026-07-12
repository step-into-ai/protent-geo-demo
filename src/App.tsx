import { Link } from 'react-router-dom'
import { Meta } from './components/Meta'
import { Out } from './components/Out'
import { SiteHeader } from './components/SiteHeader'
import { TentFinder } from './components/TentFinder'
import { publicClaim, type ClaimId } from './content/claims'
import type { PageMeta } from './content/schema'
import { articleBySlug } from './content/articles'
import './App.css'

const official = 'https://www.pro-tent.com/de-de'
const assets = `${import.meta.env.BASE_URL}images/`

const homeClaims = (id: ClaimId) => {
  const claim = publicClaim(id)
  if (!claim) throw new Error(`Nicht freigegebener Startseiten-Claim: ${id}`)
  return claim
}
const models = [
  {
    name: 'Pro-Tent 2000', label: 'Kompakte Modellreihe', image: `${assets}model-2000.png`,
    text: homeClaims('2000-home-profile').text,
    sizes: ['2 × 2 m', '2,4 × 2,4 m', '3 × 2 m', '3 × 3 m', '4 × 2 m', '4,5 × 3 m', '6 × 3 m'],
    href: `${official}/faltzelte/pro-tent-2000/`
  },
  {
    name: 'Pro-Tent MODUL 4000', label: 'Modulares Raumkonzept', image: `${assets}model-4000.png`,
    text: homeClaims('4000-home-profile').text,
    sizes: ['1,5 × 1,5 m', '2 × 2 m', '3 × 1,5 m', '3 × 2 m', '3 × 3 m', '4 × 2 m', '4,5 × 3 m', '6 × 3 m'],
    href: `${official}/faltzelte/pro-tent-modul-4000/`
  },
  {
    name: 'Pro-Tent 5000', label: 'Für anspruchsvolle Outdoor-Einsätze', image: `${assets}model-5000.png`,
    text: homeClaims('5000-home-profile').text,
    sizes: ['3 × 3 m', '4,5 × 3 m', '6 × 3 m', '4 × 4 m', '6 × 4 m', '8 × 4 m'],
    href: `${official}/faltzelte/pro-tent-5000/`
  }
]

const useCases = [
  ['Messe & Promotion', homeClaims('use-messe').text, `${official}/einsatzbereiche/events-promotion-messen/`, 'use-messe'],
  ['Gastronomie', homeClaims('use-gastronomy').text, `${official}/einsatzbereiche/gastronomie-gastgewerbe/`, 'use-gastronomy'],
  ['Schutz & Rettung', homeClaims('use-rescue').text, `${official}/einsatzbereiche/schutz-rettung/`, 'use-rescue'],
  ['Vereine & Verbände', homeClaims('use-clubs').text, `${official}/einsatzbereiche/vereine-verbaende/`, 'use-clubs']
]

const questions = [
  {q:'Welches Faltzelt eignet sich für eine Messe?', a:`${homeClaims('2000-profile').text} ${homeClaims('4000-modular').text} ${homeClaims('5000-profile').text} Die konkrete Wahl hängt vom Setup ab.`},
  {q:'Wie finde ich die passende Zeltgröße?', a:`${homeClaims('plan-first').text} ${homeClaims('sizes-span').text}`},
  {q:'Wie wird ein Pro-Tent aufgebaut?', a:homeClaims('setup-home').text + ' Zubehör und sichere Verankerung kommen danach.'},
  {q:'Welche Möglichkeiten der Bedruckung gibt es?', a:`${homeClaims('three-print').text} ${homeClaims('print-accessories').text} ${homeClaims('print-choice').text}`},
  {q:'Was ist bei Wind und Regen wichtig?', a:`${homeClaims('fixing-required').text} Aktuelle Herstellerhinweise und die Situation vor Ort sind maßgeblich.`}
]

const homeFaqItems = questions.map(item => ({ question: item.q, answer: item.a }))
const homeMeta: PageMeta = { title: 'Pro-Tent Deutschland | Wissen für mobile Markenräume', description: 'Die Wissensplattform für Pro-Tent Deutschland: Faltzelte, mobile Messestände, Promotion, Bedruckung und Ausstattung fundiert planen.', canonical: 'https://step-into-ai.github.io/protent-geo-demo/' }
const articleHighlights = ['faltzelte-overview', 'groessenfinder', 'messestand-planen', 'promotionzelt-planen', 'faltzelt-bedrucken', 'ausstattung-overview'].map(slug => {
  const article = articleBySlug.get(slug)
  if (!article) throw new Error(`Fehlender Startseiten-Artikel: ${slug}`)
  return article
})

const conceptVisuals = [
  { image: 'de-messe-konzept.webp', eyebrow: 'Messe & Unternehmen', title: 'Markenräume für persönliche Begegnungen', alt: 'Konzeptvisual aus zwei verbundenen Pro-Tent-typischen Faltzeltmodulen als modularer Messestand' },
  { image: 'de-promotion-konzept.webp', eyebrow: 'Promotion & Roadshow', title: 'Präsenz, die mit der Kampagne reist', alt: 'Konzeptvisual eines Pro-Tent-typischen Promotionzelts mit Scherenrahmen auf einem urbanen Platz' },
  { image: 'de-gastro-konzept.webp', eyebrow: 'Hospitality & Event', title: 'Serviceflächen mit professionellem Auftritt', alt: 'Konzeptvisual aus zwei verbundenen Pro-Tent-typischen Faltzelten mit Bar und transparenten Seitenwänden' },
  { image: 'de-material-konzept.webp', eyebrow: 'Material & Gestaltung', title: 'Präzision wird sichtbar', alt: 'Konzeptvisual eines Pro-Tent-typischen Faltzelt-Rahmens mit Aluminiumprofil und wasserabweisendem Zeltdach' },
]

export default function HomePage() {
  return <>
    <Meta meta={homeMeta} faqs={homeFaqItems} title="Pro-Tent Deutschland"/>
    <SiteHeader/>

    <main id="main-content">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-photo" role="img" aria-label="Pro-Tent Faltzelt im professionellen Außeneinsatz" />
        <div className="hero-overlay" />
        <div className="hero-content wrap">
          <p className="eyebrow">Pro-Tent Deutschland · Wissen für Unternehmen</p>
          <h1 id="hero-title">Mobile Markenräume.<br/><em>Klar geplant.</em></h1>
          <p className="lead">Von der ersten Fläche bis zum wiederholbaren Markenauftritt: Modelle, Größen, Ausstattung und Einsatzbereiche fundiert zusammenführen.</p>
          <div className="hero-actions"><a className="btn primary" href="#finder">Zelt auswählen</a><Out href={`${official}/beratung/`}>Persönliche Beratung</Out></div>
          <p className="source-note">Konzept für Pro-Tent Deutschland · Produktwissen aus offiziellen Pro-Tent Quellen</p>
        </div>
      </section>

      <section className="quickbar" aria-label="Schnelleinstieg"><div className="wrap quickgrid">
        <a href="#modelle"><b>3</b><span>Modellreihen vergleichen</span><i>→</i></a>
        <a href="#groessen"><b>1,5–8 m</b><span>Standardgrößen einordnen</span><i>→</i></a>
        <a href="#wissen"><b>4 Schritte</b><span>Von Nutzung bis Zubehör</span><i>→</i></a>
      </div></section>

      <section className="section concept-gallery" aria-labelledby="concept-gallery-title" aria-label="Einsatzwelten für Deutschland"><div className="wrap">
        <div className="section-head split"><div><p className="eyebrow dark">Pro-Tent in Anwendung</p><h2 id="concept-gallery-title">Vom Faltzelt zum mobilen Markenraum.</h2></div><p>Vier visuelle Richtungen zeigen, wie Pro-Tent Unternehmen in Deutschland bei Messe, Promotion und Hospitality begleiten kann.</p></div>
        <div className="concept-gallery-grid">{conceptVisuals.map((visual, index) => <figure key={visual.image} className={`concept-visual concept-visual-${index + 1}`}><img src={`${assets}${visual.image}`} alt={visual.alt}/><figcaption><span>Konzeptvisual · {visual.eyebrow}</span><b>{visual.title}</b></figcaption></figure>)}</div>
        <p className="concept-disclosure">Darstellungen auf Basis charakteristischer Pro-Tent Produktformen. Konkrete Ausführung und Ausstattung werden im Projekt gemeinsam festgelegt.</p>
      </div></section>

      <section id="finder" className="section finder-stage">
        <div className="wrap">
          <div className="section-head split"><div><p className="eyebrow dark">Interaktive Entscheidungshilfe</p><h2>In drei Schritten zur passenden Modellwelt.</h2></div><p>Wählen Sie Einsatz, Flächenbedarf und Priorität. Der Finder ordnet anschließend eine passende Pro-Tent Modellreihe ein.</p></div>
          <TentFinder/>
          <div className="usecase-followup"><p className="eyebrow dark">Einsatzfelder vertiefen</p><div className="use-grid">
            {useCases.map(([name,text,href,claimId],i)=><article className="use-card" data-claim-id={claimId} key={name}><span className="index">0{i+1}</span><div><h3>{name}</h3><p>{text}</p><Out href={href}>Einsatzbereich ansehen</Out></div></article>)}
          </div></div>
          <div className="decision"><div><span className="icon" aria-hidden="true">◎</span><div><b>Noch unklar?</b><p>{homeClaims('consulting-process').text}</p></div></div><Out href={`${official}/beratung/`}>Beratungsablauf öffnen</Out></div>
        </div>
      </section>

      <section id="modelle" className="section model-section"><div className="wrap">
        <div className="section-head split"><div><p className="eyebrow dark">Modellvergleich</p><h2>Drei Systeme, drei Schwerpunkte</h2></div><p>Der Vergleich fasst die Positionierung und verfügbaren Standardgrößen zusammen. Technische Details bleiben auf den offiziellen Produktseiten.</p></div>
        <div className="model-grid">{models.map((m,i)=><article className="model-card" data-claim-id={`${['2000', '4000', '5000'][i]}-home-profile`} key={m.name}>
          <div className="model-image"><span>0{i+1}</span><img src={m.image} alt={`${m.name} Faltzelt – Produktansicht`}/></div>
          <div className="model-copy"><p className="model-label">{m.label}</p><h3>{m.name}</h3><p>{m.text}</p><div className="size-list" aria-label={`Größen ${m.name}`}>{m.sizes.map(s=><span key={s}>{s}</span>)}</div><Out href={m.href}>Offizielle Produktdetails</Out></div>
        </article>)}</div>
        <p className="fact-note">Hinweis: Größenangaben laut offizieller Modell- und Größenübersicht, abgerufen am 11.07.2026.</p>
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
          <article className="feature-card print" data-claim-id="print-choice"><img src={`${assets}printing.jpg`} alt="Individuell bedrucktes Pro-Tent im Veranstaltungseinsatz"/><div><span>Markenauftritt</span><h3>Bedruckung, die zum Einsatz passt</h3><p>{homeClaims('print-choice').text}</p><Out href={`${official}/druckservice/`}>Druckservice verstehen</Out></div></article>
          <article className="mini-card" data-claim-id="accessory-categories"><img src={`${assets}accessories.jpg`} alt="Faltzelt-Zubehör von Pro-Tent"/><div><span>Ausstattung</span><h3>Zubehör mit Funktion</h3><p>{homeClaims('accessory-categories').text}</p><Out href={`${official}/zubehoer/`}>Zubehör entdecken</Out></div></article>
          <article className="mini-card text-card" data-claim-id="setup-home"><div><span>Aufbau</span><h3>Werkzeuglos – aber nicht planlos</h3><p>{homeClaims('setup-home').text}</p><Out href={`${official}/faltzelte/aufbau/`}>Aufbau ansehen</Out></div></article>
        </div>
        <aside className="safety" data-claim-id="fixing-required"><b>Sicherheit vor Schnelligkeit.</b><p>{homeClaims('fixing-required').text} Aktuelle Herstellerhinweise und die Situation vor Ort sind maßgeblich.</p><Out href={`${official}/faltpavillons-befestigen/`}>Befestigung richtig planen</Out></aside>
      </div></section>

      <section className="section wrap home-articles"><div className="section-head split"><div><p className="eyebrow dark">Wissensseiten</p><h2>Konkrete Fragen vertiefen</h2></div><p>Von der Modell- und Größenwahl bis zu Messe, Promotion, Druck und Ausstattung.</p></div><div className="article-card-grid">{articleHighlights.map(article => <article key={article.slug}><p className="eyebrow dark">{article.cluster}</p><h3><Link to={article.path}>{article.title}</Link></h3><p>{article.description}</p><Link className="text-link" to={article.path}>Wissensseite lesen <span>→</span></Link></article>)}</div></section>

      <section id="faq" className="section wrap faq">
        <div className="section-head"><p className="eyebrow dark">Häufige Entscheidungen</p><h2>Kurz beantwortet. Im Kontext erklärt.</h2></div>
        <div className="faq-list">{questions.map((item,i)=><details key={item.q} open={i===0}><summary><span>{String(i+1).padStart(2,'0')}</span>{item.q}<i aria-hidden="true">+</i></summary><p>{item.a}</p></details>)}</div>
      </section>

      <section className="cta"><div className="wrap"><div><p className="eyebrow">Nächster Schritt</p><h2>Aus Wissen wird ein starker Auftritt.</h2><p>Bereiten Sie Modell, Größe, Bedruckung und Ausstattung mit der Wissensplattform vor und konkretisieren Sie das Projekt anschließend gemeinsam mit Pro-Tent.</p></div><div className="cta-actions"><Out href={`${official}/konfigurator/zelt-konfigurator/`}>Zelt konfigurieren</Out><Out href={`${official}/kontakt/`}>Kontakt aufnehmen</Out></div></div></section>
    </main>

    <footer><div className="wrap footer-grid"><div className="brand official-brand footer-brand germany-brand"><span className="footer-logo"><img src={`${assets}logo-protent.svg`} alt="Pro-Tent"/></span><span className="knowledge-label"><b>Deutschland</b><small>Wissensplattform</small></span></div><div><b>Orientierung</b><a href="#modelle">Modelle</a><a href="#groessen">Größen</a><a href="#wissen">Praxiswissen</a></div><div><b>Offizielle Seiten</b><Out href={`${official}/faltzelte/`}>Faltzelte</Out><Out href={`${official}/zubehoer/`}>Zubehör</Out><Out href={`${official}/beratung/`}>Beratung</Out></div><div><b>Für Unternehmen in Deutschland</b><p>Wissen für mobile Markenräume, professionelle Einsätze und eine fundierte Projektvorbereitung.</p></div></div><div className="wrap legal"><span>Unverbindlicher Konzeptvorschlag für Pro-Tent Deutschland · Nicht von Pro-Tent veröffentlicht</span><Out href="https://github.com/step-into-ai/protent-geo-demo/blob/main/SOURCE-MAP.md">Informationsquellen</Out></div></footer>
  </>
}
