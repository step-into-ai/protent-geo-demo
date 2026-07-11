# Analysis Stack – Entscheidungsvorlage

Stand: 11.07.2026 · Interpretation von GEO: Generative Engine Optimization / Sichtbarkeit in KI-Suchsystemen.

## Entscheidung

**DataForSEO wird der API-Kern für das Pro-Tent-Projekt.** Ergänzt wird es um die kostenlose Google Search Console als First-Party-Quelle und um manuelle Qualitätsprüfungen. Ein zusätzliches Dashboard-Tool ist für die Demo nicht erforderlich.

## Empfohlener Minimal-Stack

| Werkzeug | Misst tatsächlich | Automatisierbar | Rolle im Projekt |
|---|---|:---:|---|
| Google Search Console API | Suchanfragen, Klicks, Impressionen, CTR, Position und Indexstatus der verifizierten eigenen Property | Ja | First-Party-Baseline |
| DataForSEO OnPage API | Crawlbare technische/inhaltliche Seitensignale; Kosten hängen stark von JS-/Browser-Rendering ab | Ja | Technischer Audit |
| DataForSEO SERP + Keywords APIs | Suchergebnisse, Rankings, Keyworddaten und Wettbewerberbeobachtung | Ja | Markt-/SERP-Monitoring |
| DataForSEO AI Optimization API | Je Endpoint LLM-Mentions, AI Keyword Search Volume, LLM Responses und LLM Scraper | Ja | GEO-/AI-Monitoring |
| Redaktionelle Prüfung | Richtigkeit, Quellenkontext, Markenkohärenz, Antwortnützlichkeit, Sicherheitsgrenzen | Teilweise | Unverzichtbare Freigabe |

## Kostenmodell DataForSEO

- API-first, Pay-as-you-go.
- Öffentlich ausgewiesene Mindesteinzahlung: **50 US-Dollar Guthaben**; kein zwingendes 50-Dollar-Monatsabo.
- Beispiel LLM Mentions: **0,10 US-Dollar je Request plus 0,001 US-Dollar je Ergebniszeile**; Abrechnung und Endpoint-Preise vor Produktivstart erneut prüfen.
- Klassischer HTML-Crawl ist deutlich günstiger als JavaScript- oder vollständiges Browser-Rendering. Deshalb: Basis-Crawl breit, Rendering nur für relevante Templates/Stichproben.

## KI-Systeme und Messrealität

DataForSEO bietet AI-/LLM-Endpunkte, deren konkrete Modelle und Suchoberflächen je Endpoint variieren. Vor dem Pilot müssen für jeden geplanten Endpoint dokumentiert werden:

- Modell/Engine und Version,
- Sprache, Land und Standort,
- Live- oder Standard-Queue,
- ob Rohantworten, Zitate/Quellen, Mentions oder aggregierte Daten geliefert werden,
- Kosten pro Task/Zeile/Token und mögliche Vorabreservierung.

KI-Antworten sind nicht deterministisch. Einzelne Abfragen sind keine belastbare Sichtbarkeitsmetrik. Bewertet werden wiederholte, versionierte Prompt-Sets und Trends.

## Was automatisiert wird

- wöchentlicher Basis-Crawl; Rendering nur bei kritischen Templates,
- tägliche/wöchentliche SERP-Prüfung strategischer Keywords,
- festes deutsches GEO-Prompt-Set für Pro-Tent und definierte Wettbewerber,
- Speicherung von Prompt, Engine, Land, Sprache, Zeit, Antwort, Mentions und Quellen,
- Link-, Canonical-, Sitemap- und Statusprüfung,
- Monatsbericht mit Veränderungen und manuellen Kommentaren.

## Was manuell bleibt

- fachliche und sicherheitsbezogene Freigabe,
- Bewertung, ob Erwähnung/Zitat tatsächlich relevant und korrekt ist,
- Entdeckung neuer Nutzerfragen aus Vertrieb und Support,
- Qualitätskontrolle von Antworten und Quellen,
- Ursachenbewertung: Korrelation ist nicht automatisch Wirkung einer einzelnen Änderung.

## Alternativen

| Alternative | Stärke | Entscheidende Einschränkung hier |
|---|---|---|
| Ahrefs | starke SEO-, Backlink- und Brand-Radar-Daten mit API auf geeigneten Plänen | laufende Grundkosten; für die Demo nicht nötig |
| Semrush SEO + AI Search | komfortables All-in-one-Dashboard | API-Zugang teuer; Zugriff auf exakte AI-Visibility-Daten vor Kauf bestätigen |
| OtterlyAI Standard | fertiges GEO-Dashboard mit API/MCP | klassisches technisches SEO deutlich schwächer; höherer fixer Preis |

## Begründung für Pro-Tent

DataForSEO erfüllt Benjamins ausdrückliche Vorgabe, ist API-first, modular und für einen kontrollierten Pilot besser begrenzbar als ein großes Suite-Abo. GSC liefert kostenlos die belastbarsten Daten der eigenen Website. Erst wenn Redaktion/Vertrieb ohne eigenes Reporting eine fertige Oberfläche benötigt, sollte zusätzlich OtterlyAI oder eine SEO-Suite geprüft werden.

> Messwerkzeuge erzeugen keine Rankings oder KI-Empfehlungen. Wirkung entsteht aus technischer Zugänglichkeit, klaren Entitäten, hilfreichen Originalinhalten, konsistenten Quellen und externer Autorität.

## Offizielle Quellen

### DataForSEO
- Pricing: https://dataforseo.com/pricing
- AI Optimization Pricing: https://dataforseo.com/pricing/ai-optimization
- LLM Mentions Pricing: https://dataforseo.com/pricing/ai-optimization/llm-mentions
- AI Optimization API Overview: https://docs.dataforseo.com/v3/ai_optimization/overview/
- OnPage Pricing: https://dataforseo.com/pricing/on-page/onpage-api

### Ergänzungen/Alternativen
- GSC Pricing: https://developers.google.com/webmaster-tools/pricing
- GSC Search Analytics: https://developers.google.com/webmaster-tools/v1/how-tos/search_analytics
- Ahrefs Pricing: https://ahrefs.com/pricing
- Ahrefs API: https://docs.ahrefs.com/en/api/docs/introduction
- Semrush SEO + AI Search: https://www.semrush.com/pricing/seo-ai-search/
- Semrush SEO API: https://developer.semrush.com/api/seo/overview/
- OtterlyAI Pricing: https://otterly.ai/pricing/
