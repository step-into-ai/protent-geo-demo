# Pro-Tent GEO Demo

Eine responsive, öffentliche Demo-Wissenswelt für professionelle Pro-Tent Faltzelte. Sie hilft Menschen bei der Orientierung und verlinkt für Produktdetails, Beratung und Konfiguration konsequent auf die offizielle Website.

> **Status:** Kundendemo, nicht die offizielle Website der Pro-Tent AG. Keine Ranking- oder KI-Empfehlungsgarantie.

## Lokal starten

```bash
npm install
npm run dev
```

Vite zeigt anschließend die lokale URL an (normalerweise `http://localhost:5173`).

## Produktions-Build

```bash
npm run build
npm run preview
```

Der statische Build liegt in `dist/`.

## Qualität prüfen

```bash
npm run lint
npm run build
```

Zusätzlich wurden Navigation, externe Links, responsive Breakpoints und sichtbare FAQ-Inhalte im Browser geprüft.

## Enthaltene Projektdokumentation

- [`PROTENT-GEO-PLAN.md`](./PROTENT-GEO-PLAN.md) – Informationsarchitektur, Inhalts- und technische GEO/SEO-Logik
- [`SOURCE-MAP.md`](./SOURCE-MAP.md) – belegte Quellen, verwendete Original- und Bild-URLs
- [`ANALYSIS-STACK.md`](./ANALYSIS-STACK.md) – Entscheidungsvorlage mit DataForSEO als API-Kern

## Technische Grundlagen

- React + TypeScript + Vite
- semantische Abschnitte und konsistente Überschriftenstruktur
- responsive Navigation und Layouts
- sichtbare FAQ-Inhalte mit passendem `FAQPage`-JSON-LD
- Meta Description, Canonical-Platzhalter, Open Graph
- `robots.txt`, `sitemap.xml`, `llms.txt`
- barrierearme Interaktionen (native Links/Details, Fokus- und ARIA-Beschriftungen)

## Vor einer echten Veröffentlichung

1. Freigegebene Produktionsdomain einsetzen (`index.html`, `robots.txt`, `sitemap.xml`).
2. Marken-, Bild- und Textfreigabe durch Pro-Tent einholen.
3. Sicherheits- und technische Aussagen fachlich prüfen/freigeben lassen.
4. Impressum, Datenschutz, Analytics-Consent und Verantwortlichkeit ergänzen.
5. GSC anbinden und DataForSEO-Monitoring mit begrenztem Pilotumfang starten.

## Offene Fragen und Annahmen

- Zielmarkt der Demo ist zunächst Deutschland (`/de-de/`).
- Preise und Verfügbarkeit werden bewusst nicht genannt.
- Kapazitätsangaben pro Zeltgröße fehlen bewusst, bis eine belastbare Herstellerfreigabe vorliegt.
- Die Wissenswelt ist redaktionell eigenständig, verwendet für die Demo jedoch ausgewählte offizielle Produktbilder mit dokumentierten Quellen.
- Für eine Live-Nutzung müssen Nutzungsrechte der Bilder und die Markendarstellung bestätigt werden.
