# Pro-Tent Knowledge Platform – Maximum GEO/SEO Implementation Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** Aus der aktuellen Demo eine vollständige, öffentlich vertretbare Pro-Tent Wissensplattform zu bauen, die Unternehmer, Messe-/Eventteams, Vereine, Gastronomie sowie Schutz- und Rettungsorganisationen besser informiert als eine gewöhnliche Produktseite und Pro-Tent als klar verständliche Premium-Entität für Suchmaschinen und KI-Suchsysteme positioniert.

**Architecture:** Die Plattform wird von einer langen Single-Page-Demo zu einer crawlbaren React-/Static-Site mit echten thematischen URLs, einer zentralen strukturierten Inhaltsquelle und komponentenbasierten Ratgebern ausgebaut. Jede konkrete Aussage erhält Quelle, Prüfstatus und Aktualisierungsdatum; transaktionale Schritte führen sichtbar zur offiziellen Pro-Tent-Seite. GEO wird als Ergebnis guter Informationsarchitektur, belegter Antworten, konsistenter Entitäten und sauberer Technik umgesetzt – nicht als Keyword- oder Schema-Trick.

**Tech Stack:** React, TypeScript, Vite/SSG, CSS Design Tokens, Vitest/Playwright, JSON-LD, XML-Sitemap, DataForSEO APIs, Google Search Console API, GitHub Actions und GitHub Pages/Produktionshosting.

---

## 1. Zielbild

Die fertige Plattform soll drei Dinge gleichzeitig leisten:

1. **Entscheidungssystem:** Nutzende finden vom Einsatz über Größe und Modell bis zu Druck, Seitenwänden, Innenausbau, Transport und Befestigung.
2. **B2B-Inspiration:** Unternehmen erkennen, dass ein Pro-Tent nicht nur Wetterschutz, sondern mobiler Markenraum, Messestand, Promotionfläche, Verkaufsfläche oder Einsatzinfrastruktur sein kann.
3. **Belegbare Wissensbasis:** Suchmaschinen und KI-Systeme erhalten klar gegliederte, zitierfähige Antworten mit nachvollziehbaren Originalquellen.

Die Plattform darf die Originalseite weder heimlich duplizieren noch ersetzen. Sie soll den Nutzen erklären und qualifizierte Interessenten zu Pro-Tent führen.

## 2. Primäre Zielgruppen

| Zielgruppe | Kernfragen | Wichtigste Inhalte |
|---|---|---|
| Marketing-/Brand-Teams | Wie wird das Zelt zum Markenraum? | Voll-/Teildruck, Seitenwände, Sichtachsen, Theken, Fahnen, Markeninszenierung |
| Messe- und Eventteams | Welches System ist schnell, modular und wiederverwendbar? | Modelle, Aufbau, MODUL 4000, Innenkabinen, Raumteiler, Lamellenwand, Transport |
| Promotion-/Roadshow-Teams | Wie bleibt der Auftritt über viele Standorte konsistent? | Druck, mobile Ausstattung, Befestigung, Packmaß, Cases, Checklisten |
| Gastronomie/Street Food | Wie entstehen Ausgabe, Wetterschutz und Gästefläche? | Theken, Seitenwände, Beleuchtung, Regenmanagement, Größenplanung |
| Unternehmen/Gewerbe | Wie entsteht temporärer Arbeits- oder Präsentationsraum? | Arbeitszelte, Zubehör, Logistik, Wettereinsatz, Wartung |
| Schutz/Rettung | Welche mobilen Räume und Abläufe sind möglich? | Rescue, Sanität, Feuerwehr, Innenkabinen, Sichtschutz, Befestigung |
| Vereine/Sport/Motorsport | Welche Größe und Ausstattung passt zum wiederkehrenden Einsatz? | Transport, Branding, Größen, Gewichte, Seitenwände, Teams |
| Agenturen/Messebauer | Wie lässt sich Pro-Tent in Kampagnen und Systeme integrieren? | Beratung, Druckdaten, modulare Bauteile, Individualkonfigurationen |

## 3. Navigations- und URL-Struktur

### Ebene 1

- `/` – Start/Entscheidungseinstieg
- `/faltzelte/` – Modellwelt
- `/messestaende/` – Messe- und Unternehmenssysteme
- `/promotion-event/` – Promotion, Roadshow und Event
- `/einsatzbereiche/` – Branchen-/Nutzungshub
- `/groessen/` – Größenfinder
- `/ausstattung/` – Zubehör und Innenausbau
- `/bedruckung/` – Markenauftritt und Druck
- `/praxiswissen/` – Aufbau, Wetter, Transport, Pflege
- `/vergleich/` – Modelle und belastbare Wettbewerbs-/Kriterienvergleiche
- `/faq/` – gefilterter Fragenindex; keine lose FAQ-Wand
- `/quellen/` – öffentliche Quellen- und Aktualisierungsmethodik

### Jede Seite enthält

- eine klare Nutzerfrage als H1,
- 40–70 Wörter direkte Kernaussage,
- Entscheidungskriterien/Tabellen,
- sichtbare Quellen und Prüfdatum,
- passende kontextuelle FAQ,
- Links zu verwandten Wissensseiten,
- einen präzisen Link zur offiziellen Pro-Tent-Zielseite,
- keine automatische Ranking- oder KI-Empfehlungsgarantie.

## 4. Vollständiger Content-Backlog

### Cluster A – Modell- und Produktverständnis

1. Faltzelte im Überblick
2. Pro-Tent 2000: Einsatzprofil, Größen und Grenzen
3. Pro-Tent MODUL 4000: modularer Marken- und Innenraum
4. Pro-Tent 5000: große Formate und anspruchsvoller Outdooreinsatz
5. Pro-Tent 5000 Rescue: gesonderter, fachlich freizugebender Einsatzkontext
6. Pro-Tent 2000 vs. MODUL 4000
7. MODUL 4000 vs. Pro-Tent 5000
8. Welches Pro-Tent passt zu welchem Einsatz?
9. Aluminium-Faltzelt vs. Stahl-Faltzelt
10. Profi-Faltzelt vs. günstiges Faltzelt – Kriterien statt pauschaler Abwertung

**Cluster-FAQ:** Modellwahl, Unterschiede, verfügbare Größen, Innenkabine, Profil/Zubehör, Transport und Beratungsbedarf.

### Cluster B – Messe, Unternehmen und Markenraum

1. Mobiler Messestand mit Faltzelt: Planung von Fläche, Sichtachsen und Gesprächszonen
2. Pro-Tent MODUL 4000 als modularer Messestand
3. Indoor-Messe vs. Outdoor-Messe: Anforderungen vergleichen
4. Rückwand, Seitenwand und halbhohe Wand als Kommunikationsfläche
5. Lamellenwand und Präsentationsflächen im Faltzelt
6. Innenkabine als Lager, Backoffice oder Umkleide
7. Raumteiler für Beratung, Service und geschützte Arbeitsbereiche
8. Mobile Theken und Bartheke für Empfang und Ausgabe
9. Prospektablagen, Beleuchtung und Kabelmanagement
10. Mehrere Zelte verbinden: Übergänge, Dachrinnen und Raumfolgen
11. Messestand-Checkliste für Unternehmen
12. Messestand transportieren, lagern und wiederverwenden
13. Markeninszenierung im Raum: Dach, Volant, Seitenwand, Theke, Fahne
14. Agentur-/Messebau-Workflow von Briefing bis Druckfreigabe

**Cluster-FAQ:** Aufbauzeit ohne unbelegte Zeitgarantie, Personalbedarf, Innenkabine, Druckdaten, Strom/Licht, Verbindung mehrerer Systeme, Lagerung, Indoor-Eignung.

### Cluster C – Promotion, Roadshow und Event

1. Promotionzelt planen
2. Eventzelt auswählen
3. Werbezelt als mobiler Markenpunkt
4. Roadshow-Setup für wechselnde Standorte
5. FOH-Zelt und organisatorische Funktionsräume
6. Produktvorführung im Faltzelt
7. Sampling-/Aktionsfläche mit Theke und Seitenwänden
8. Markenwirkung aus allen Blickrichtungen
9. Wetterwechsel im Eventbetrieb planen
10. Tagesablauf: Transport, Aufbau, Betrieb, Abbau
11. Event-Branding-Checkliste
12. Wiederverwendbare Kampagnenausstattung

**Cluster-FAQ:** Modellwahl, Größe, Sichtbarkeit, Druck, Seitenwände, Beschwerung, Beleuchtung, schneller Standortwechsel.

### Cluster D – Bedruckung und individualisierte Seitenwände

1. Faltzelt bedrucken: Möglichkeiten im Überblick
2. Seitenwände bedrucken: Funktionen und Gestaltungszonen
3. Logodruck vs. Teilbedruckung vs. Vollbedruckung
4. Dach und Volant als Fernwirkung
5. Seitenwand als großflächige Markenbotschaft
6. Theke und Zubehör im gleichen Designsystem
7. Druckdaten vorbereiten – nur nach bestätigten Herstelleranforderungen
8. Farben, Kontrast und Lesbarkeit im Außeneinsatz
9. Motivplanung für offene, halb offene und geschlossene Zelte
10. Kampagnenvarianten mit austauschbaren Elementen
11. Wetter- und UV-Kontext der Bedruckung – technische Claims freigeben lassen
12. Gestaltungsfehler vermeiden: zu kleine Schrift, falsche Sichtachse, überladene Wand

**Cluster-FAQ:** bedruckbare Elemente, Verfahren, Dateiformate, Farbwiedergabe, Austauschbarkeit, Pflege und Freigabeprozess.

### Cluster E – Ausstattung, Seitenwände und Innenausbau

1. Zubehörfinder nach Aufgabe
2. Seitenwände: offen, geschlossen, Eingang und Sichtschutz
3. Vorhangsystem
4. Raumteiler und Innenkabine
5. Querverbinder und Abschlussleisten
6. Lamellenwand/Präsentationswand
7. Mobile Theken und Bartheke
8. Prospektablage
9. LED-Flutlicht und Kabelhalteprofil
10. Bodenplatten und Bodenorganisation
11. Fahnen und Beachflags
12. Vordach, Blenden und Vorbau
13. Dachrinne und verbundene Zelte
14. Transporttasche und Zeltgestellrollen
15. Gewichtsplatten, Wassergewicht, Sandgewicht und Profi-Abspannset
16. Zubehörsets für Messe, Promotion, Gastro, Rettung und Verein

**Freigabehinweis:** „Regalsystem“ nur verwenden, wenn offizielle Produktunterlagen diesen Begriff und die Trag-/Nutzungsdaten bestätigen. Bis dahin neutral „Lamellenwand“, „Präsentationsfläche“ oder „Innenausbau“ sagen.

### Cluster F – Größen und Flächenplanung

1. Alle Standardgrößen im Überblick
2. 1,5 × 1,5 m: kompakte Informations-/Servicefläche
3. 2 × 2 m
4. 2,4 × 2,4 m
5. 3 × 1,5 m
6. 3 × 2 m
7. 3 × 3 m
8. 4 × 2 m
9. 4 × 4 m
10. 4,5 × 3 m
11. 6 × 3 m
12. 6 × 4 m
13. 8 × 4 m
14. Größenfinder nach Personen, Mobiliar, Ware und Bewegungsfläche
15. Packmaß, Gewicht und Transport in die Größenwahl einbeziehen
16. Sondergrößen und individuelle Konfigurationen

**Wichtig:** Keine Personen-Kapazitäten erfinden. Rechenhilfen müssen Annahmen sichtbar machen und fachlich freigegeben werden.

### Cluster G – Branchen/Einsatzbereiche

Je eine Hub-/Detailseite mit eigenen Fragen, Ausstattungsempfehlungen und Originalverlinkung:

- Events, Promotion und Messen
- Gastronomie und Gastgewerbe
- Gewerbe und Handwerk
- Märkte und Feste
- Schutz und Rettung
- Feuerwehr
- Sanität
- Militär-/Behördenkontext nur nach Freigabe
- Sport und Motorsport
- Motocross/Rennsport
- Vereine und Verbände
- Street Food
- Markt-/Verkaufsstand
- Arbeits-/Einsatzzelt
- Raucherbereich nur mit rechtlicher/brandschutzbezogener Prüfung

### Cluster H – Aufbau, Wetter und Betrieb

1. Werkzeugloser Aufbau Schritt für Schritt
2. Aufbau allein vs. zu zweit
3. Standortprüfung vor dem Aufbau
4. Faltzelt korrekt befestigen
5. Gewichte vs. Abspannung – keine pauschale Sicherheitsfreigabe
6. Wind: Entscheidungskriterien und Abbruchentscheidung
7. Regen: Dach, Seitenwände, Dachrinne und Wasserführung
8. Sonne/UV und Hitzemanagement
9. Aufbau auf Asphalt, Pflaster, Rasen und sensiblen Böden
10. Transport und Packen
11. Lagerung und Trocknung
12. Reinigung und Pflege
13. Reparatur und Ersatzteile
14. Einsatz-Checkliste vor Öffnung
15. Abbau-Checkliste

**Sicherheitsregel:** Konkrete Windstärken, Lasten, Brandschutzklassen oder Freigaben nur aus aktueller, eindeutig zugeordneter Herstellerdokumentation.

### Cluster I – Material, Qualität und Nachhaltigkeit

1. Aluminium-Speziallegierung verständlich erklärt
2. Quadratprofil und Omegaprofil im Modellkontext
3. Polyester-Gewebe und Funktionsmerkmale
4. Nähte, Dachspannung und konstruktive Details
5. Wetterbeständigkeit ohne Marketing-Übertreibung
6. Reparierbarkeit und Lebensdauer als Systemgedanke
7. Recycling-Polyester: Stand und Verfügbarkeit aktuell bestätigen
8. Nachhaltigkeit durch Wiederverwendung, Reparatur und modulare Teile – nur belegte Aussagen
9. Materialpflege
10. Profi- vs. Billigsystem anhand prüfbarer Kriterien

### Cluster J – Cases, Belege und Inspiration

- Puma Messestand
- Trek
- Glacier 3000
- Herzensbäckerei/mobile Backstation
- Fairway Sports/Golf
- European Hyperloop Week
- Duschzelt-Case
- Motorsport-/Bike-Cases
- Gastronomie-/Street-Food-Cases

Jeder Case benötigt: Ausgangslage, Aufgabe, eingesetztes System, belegte Komponenten, Ergebnis ohne erfundene KPIs, Bilderrechte und Originalquelle.

## 5. Konkurrenzanalyse – erst belegen, dann veröffentlichen

### Ziel

Nicht „Pro-Tent ist besser“ behaupten, sondern zeigen, **bei welchen nachvollziehbaren Kriterien Pro-Tent differenziert** und für welche Käufer diese Unterschiede relevant sind.

### Kandidaten

Nach Marktverifizierung 5–8 direkte Anbieter in DACH/EU auswählen. Keine Namen aus Erinnerung übernehmen. Offizielle Produktseiten, Datenblätter, Garantien, Zubehörkataloge und Druckangebote als Quellen nutzen.

### Vergleichskriterien

- Modell-/Größenabdeckung
- Material und Profilgeometrie
- dokumentierte Gewichte/Packmaße
- Seitenwandbefestigung und Systemnuten
- Innenkabinen/Raumteiler
- Lamellen-/Präsentationssysteme
- Theken und Zubehörintegration
- mehrere Zelte verbinden
- Druckoptionen und hauseigene Leistungen
- Reparatur, Ersatzteile und Garantie
- dokumentierte Sicherheits-/Brandschutzinformationen
- Beratung, Konfiguration und Service
- Nachhaltigkeitsnachweise

### Veröffentlichungsregeln

- nur gleichartige Modelle vergleichen,
- Stand/Region/Quelle je Datenpunkt nennen,
- „nicht öffentlich gefunden“ statt „hat Anbieter nicht“,
- Pro-Tent-Vorteile nur formulieren, wenn Quellen die Differenz tragen,
- Nachteile/Trade-offs ehrlich benennen,
- finale Tabelle rechtlich und fachlich freigeben lassen,
- keine herabsetzenden Formulierungen oder unbelegten Superlative.

## 6. Designrichtung: „Swiss Engineering trifft Event Energy“

### Markenwirkung

- originales Pro-Tent-Logo und dessen Blau-/Grau-Welt als Basis,
- kräftiges Aktivrot nur als gezielter CTA-/Signalakzent,
- großzügige Schweizer Raster, aber bewusst lebendige Eventfotografie,
- technische Präzision plus spielerische räumliche Interaktion,
- deutlich hochwertiger und moderner als ein typischer Produktkatalog.

### Verspielte, aber nützliche Elemente

1. **Interaktiver Zeltfinder:** Einsatz, Personen/Fläche, Wetter, Ausstattung, Transport → passende Modellfamilie mit Begründung.
2. **Build-your-booth:** Seitenwände, Theke, Fahne, Innenkabine und Beleuchtung visuell zuschalten; keine Preisberechnung.
3. **Größen-Visualizer:** Grundriss mit Mobiliar- und Bewegungszonen.
4. **Vorher/nachher-Branding:** neutrales Zelt vs. bedruckter Markenraum.
5. **Scroll-Exploded-View:** Gestell, Dach, Seitenwand und Zubehör werden schichtweise erklärt.
6. **Use-case Switcher:** derselbe Raum als Messe, Promotion, Gastro oder Rettungssetup.
7. **Quellen-Chips:** „Herstellerangabe“, „redaktionelle Einordnung“, „Freigabe ausstehend“ sichtbar unterscheidbar.
8. **Sticky Decision Rail:** merkt Einsatz/Größe/Modell im Browser, ohne Nutzertracking.
9. **Microinteractions:** Profil-/Rasterlinien, Zeltform-Morphing, subtile Kartenbewegung; `prefers-reduced-motion` respektieren.

### Nicht einsetzen

- generische KI-Gradienten,
- Animation ohne Informationswert,
- versteckte Textblöcke,
- endlose Kartenwände,
- erfundene Bewertungen/Statistiken,
- Schema für Inhalte, die nicht sichtbar sind.

## 7. Inhalts- und Freigabemodell

Jede Aussage erhält intern:

```ts
type Claim = {
  text: string
  sourceUrl: string
  sourceTitle: string
  retrievedAt: string
  status: 'official' | 'editorial' | 'needs-client-approval'
  market?: 'DE' | 'CH' | 'AT' | 'global'
  model?: '2000' | 'MODUL 4000' | '5000' | '5000 Rescue'
}
```

### Drei Prüfklassen

- **Grün – direkt veröffentlichbar:** klar belegte Namen, Größen, offizielle Produkt-/Zubehörkategorien und Originallinks.
- **Gelb – fachliche Freigabe:** Materialfunktionen, Wetter, Brandschutz, Aufbau-/Sicherheitsdetails, Druckbeständigkeit, Kapazitätslogik.
- **Rot – rechtliche/geschäftliche Freigabe:** Wettbewerbsvergleiche, Garantien, Gesundheits-/Rettungseignung, konkrete Leistungsversprechen, Kundencases/KPIs und Bildrechte.

## 8. Technische Architektur

### Task 1: Content-Schema und Quellenregister

**Files:**
- Create: `src/content/schema.ts`
- Create: `src/content/sources.ts`
- Create: `src/content/claims.ts`
- Test: `src/content/schema.test.ts`

**Verification:** Jeder veröffentlichte Claim hat Quelle, Datum und Status; Build schlägt bei fehlenden Pflichtfeldern fehl.

### Task 2: Static Routing/SSG

**Files:**
- Modify: `package.json`
- Create: `src/routes.tsx`
- Create: `scripts/generate-static-pages.mjs`
- Test: `tests/static-routes.test.ts`

**Verification:** Jede freigegebene URL liefert als statische Datei HTTP 200 und besitzt eindeutigen Title, Description und Canonical.

### Task 3: Design Tokens und Komponentenbibliothek

**Files:**
- Create: `src/styles/tokens.css`
- Create: `src/styles/global.css`
- Create: `src/components/Layout/*`
- Create: `src/components/Content/*`
- Create: `src/components/Interactive/*`
- Test: `tests/components.spec.ts`

**Verification:** Desktop, Tablet, 390-px-Mobile; Tastatur, Kontrast, Reduced Motion und kein horizontaler Overflow.

### Task 4: Modell- und Größen-Daten

**Files:**
- Create: `src/content/models/*.ts`
- Create: `src/content/sizes/*.ts`
- Create: `src/pages/models/*`
- Test: `src/content/models/models.test.ts`

**Verification:** Größen sind genau Modellreihen zugeordnet; technische Werte werden automatisiert gegen das Quellenregister geprüft.

### Task 5: Messe-/B2B-Hub

**Files:**
- Create: `src/pages/messestaende/*`
- Create: `src/content/messe/*.mdx`
- Create: `src/components/Interactive/BoothBuilder.tsx`
- Test: `tests/messe-hub.spec.ts`

**Verification:** Mindestens acht nutzerorientierte Messe-/Unternehmensfragen, sichtbare Pro-Tent-Differenzierungsmerkmale und direkte Originallinks.

### Task 6: Promotion/Event-Hub

**Files:**
- Create: `src/pages/promotion-event/*`
- Create: `src/content/promotion/*.mdx`
- Test: `tests/promotion-hub.spec.ts`

### Task 7: Bedruckungs- und Seitenwand-Hub

**Files:**
- Create: `src/pages/bedruckung/*`
- Create: `src/content/bedruckung/*.mdx`
- Create: `src/components/Interactive/BrandingComparison.tsx`
- Test: `tests/branding.spec.ts`

**Verification:** Bedruckbare Bereiche, Seitenwände und Zubehör werden als System erklärt; unbestätigte Druckdetails sind nicht veröffentlicht.

### Task 8: Ausstattung/Innenausbau

**Files:**
- Create: `src/pages/ausstattung/*`
- Create: `src/content/accessories/*.mdx`
- Create: `src/components/Interactive/AccessoryFinder.tsx`
- Test: `tests/accessories.spec.ts`

### Task 9: Einsatzbereiche mit eigenen FAQs

**Files:**
- Create: `src/pages/einsatzbereiche/*`
- Create: `src/content/use-cases/*.mdx`
- Create: `src/content/faqs/*.ts`
- Test: `tests/use-cases.spec.ts`

**Verification:** Jeder Einsatzbereich hat eigene Entscheidungskriterien und 4–8 sichtbare, nicht duplizierte FAQs.

### Task 10: Praxis-/Sicherheitswissen

**Files:**
- Create: `src/pages/praxiswissen/*`
- Create: `src/content/practical/*.mdx`
- Test: `tests/safety-claims.test.ts`

**Verification:** Keine Wind-, Last-, Brandschutz- oder Sicherheitszahl ohne offizielle Quelle und Freigabestatus.

### Task 11: Cases

**Files:**
- Create: `src/pages/referenzen/*`
- Create: `src/content/cases/*.mdx`
- Test: `tests/cases.spec.ts`

### Task 12: Wettbewerbsanalyse

**Files:**
- Create: `research/competitors/*.md`
- Create: `src/content/comparison/matrix.ts`
- Create: `src/pages/vergleich/*`
- Test: `tests/comparison-evidence.test.ts`

**Verification:** Jeder Vergleichswert hat Anbieterquelle, Datum, Region und Modelläquivalenz; Veröffentlichungsflag standardmäßig `false` bis Freigabe.

### Task 13: Metadaten und strukturierte Daten

**Files:**
- Create: `src/seo/metadata.ts`
- Create: `src/seo/schema.ts`
- Test: `tests/seo-schema.test.ts`

Zulässig, wenn sichtbar und sachlich passend:

- `WebSite`, `WebPage`, `BreadcrumbList`, `Article`, `FAQPage`, `HowTo` nur bei vollständig sichtbaren Schritten.
- `Product` nur bei vollständigen, aktuellen Produktinformationen und Freigabe.
- Keine erfundenen `AggregateRating`, Preise, Lagerbestände oder Organisationseigenschaften.

### Task 14: Sitemap, llms.txt und Feed

**Files:**
- Create: `scripts/generate-sitemap.mjs`
- Modify: `public/robots.txt`
- Modify: `public/llms.txt`
- Create: `public/content-index.json`
- Test: `tests/crawl-assets.test.ts`

### Task 15: DataForSEO/GSC-Messung

**Files:**
- Create: `monitoring/prompts.de.json`
- Create: `monitoring/keywords.de.json`
- Create: `scripts/dataforseo-monitor.mjs`
- Create: `scripts/gsc-report.mjs`
- Create: `docs/MONITORING-METHODOLOGY.md`

Pilot:

- 50–100 transaktionale/informative SEO-Themen,
- 80–150 feste deutsche GEO-Prompts,
- ChatGPT-/LLM-, Google-AI-, Gemini-/Perplexity-Oberflächen nur gemäß tatsächlich verfügbarem DataForSEO-Endpoint,
- 5–8 Wettbewerber,
- wöchentliche Trendmessung plus monatliche manuelle Qualitätsprüfung.

### Task 16: CI, Qualitätsgates und Deployment

**Files:**
- Create: `.github/workflows/ci.yml`
- Create: `.github/workflows/deploy.yml`
- Create: `tests/links.spec.ts`
- Create: `tests/mobile.spec.ts`

**Gates:** TypeScript, Lint, Unit, statischer Build, Broken Links, Schema-Validität, Bild-Alt-Texte, genau eine H1, Canonical/Sitemap-Konsistenz, Desktop/Mobile-Screenshots.

## 9. Content-Priorisierung

### Phase 1 – Präsentationsstarke Plattform (höchste Wirkung)

- neues Original-Logo/Designsystem,
- Startseite,
- Modellhub + drei Modellseiten,
- Messe-/Unternehmenshub,
- Promotion/Event,
- Bedruckung/Seitenwände,
- Ausstattung/Innenausbau,
- Größenfinder,
- Aufbau/Befestigung,
- 35–50 kontextuelle FAQs.

### Phase 2 – Topical Authority

- alle Einsatzbereiche,
- Material/Qualität/Nachhaltigkeit,
- Pflege/Reparatur/Transport,
- 10–15 Größen-/Planungsseiten,
- Cases,
- 80–120 einzigartige FAQs über die jeweiligen Seiten verteilt.

### Phase 3 – Differenzierung und laufende Messung

- belegte Wettbewerbsanalyse,
- interaktive Zelt-/Zubehörfinder,
- DataForSEO/GSC-Dashboard,
- Content-Gap-Pipeline,
- weitere Sprachen/Märkte erst nach deutscher Qualitätsfreigabe.

## 10. Akzeptanzkriterien für „Chef will diese Seite“

- Die Seite wirkt in fünf Sekunden eindeutig wie Pro-Tent und nicht wie ein generisches SEO-Projekt.
- Unternehmer und Messeteams erkennen sofort Anwendungen jenseits von Wetterschutz.
- Seitenwände, Bedruckung, MODUL 4000, Innenkabinen, Raumteiler, Lamellenwand, Theken und verbundene Systeme werden prominent und visuell erklärt.
- Jede wichtige Entscheidung besitzt eine konkrete Antwort und einen nächsten Schritt.
- Jede konkrete Produkt-/Wettbewerbsaussage ist belegbar.
- Mobil funktioniert die gesamte Entscheidungsreise ohne Funktionsverlust.
- Keine versteckten Seiten, Keywordlisten oder Spam-Schema.
- Lighthouse-Ziele: Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95 auf repräsentativen Seiten.
- Keine Broken Links, Konsolenfehler oder horizontaler Overflow.
- Der Inhalt ist als Wissensplattform wertvoll, auch wenn kein Suchsystem ihn sofort höher rankt.

## 11. Offene Kundenfreigaben

1. Verwendung des Logos und der Produkt-/Referenzbilder.
2. Markenfarben, Tonalität („Du“/„Sie“) und Verhältnis zur offiziellen Seite.
3. Verbindliche Material-/Wetter-/Brandschutz- und Sicherheitsdaten.
4. Aktuelle Verfügbarkeit von Recyclingstoffen und Zubehör.
5. Zulässige Begriffe für Lamellenwand, Regal-/Präsentationssystem und Innenausbau.
6. Druckverfahren, Datenanforderungen und Freigabeprozess.
7. Cases, Kundennamen, Bilder und Ergebnisse.
8. Vergleichbare Wettbewerber und juristische Freigabe der Matrix.
9. Ziel-Domain, Impressum, Datenschutz und Verantwortlichkeit.
10. Märkte/Länder und Übersetzungspriorität.

## 12. Empfohlener nächster Umsetzungsschnitt

Der nächste Build soll nicht sofort alle 100+ Inhalte schreiben. Er baut zuerst das skalierbare Fundament und die verkaufsstärksten Cluster:

1. Designsystem „Swiss Engineering × Event Energy“ finalisieren.
2. Startseite mit Original-Logo überarbeiten.
3. Modell-, Messe-, Promotion-, Bedruckungs- und Ausstattungshubs als echte URLs bauen.
4. Zeltfinder und einfachen Booth-Builder integrieren.
5. 25 hochwertige Seiten/Artikel und 50 kontextuelle FAQs aus offiziellen Quellen erstellen.
6. Freigabestatus sichtbar im Quellenregister führen.
7. Build, Mobile, Links und Schema automatisiert testen.
8. Auf GitHub Pages/Produktionshosting veröffentlichen.
9. Anschließend Wettbewerbsrecherche durchführen und nur freigegebene Vergleiche publizieren.

Dieser Schnitt ist groß genug, um dem Pro-Tent-Chef eine deutlich stärkere Vision zu zeigen, bleibt aber kontrollierbar und belegbar.
