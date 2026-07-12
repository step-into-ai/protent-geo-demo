# Pro-Tent Deutschland – Auftrags-To-do

**Stand:** 12. Juli 2026  
**Zweck:** Arbeits- und Abnahmeliste für die Überführung des freigegebenen Konzeptvorschlags in einen offiziellen, messbaren SEO-/GEO-Produktionsbetrieb.

> Die bestehende Demo ist eine belastbare Konzept- und Technikbasis. Ein Auftrag beginnt nicht bei null: Design, 25 Wissensartikel, statische Seiten, strukturierte Daten, Sitemap, Quellenlogik, Navigation und Qualitätssicherung sind bereits vorhanden. Im Auftrag werden Freigabe, Produktionsbetrieb, Messung, Ausbau und laufende Optimierung umgesetzt.

---

## 0. Auftrag, Ziele und Verantwortlichkeiten

- [ ] Auftraggeber, Projektleitung und fachlich verantwortliche Personen benennen
- [ ] Projektumfang, Budget, Zeitplan und Abnahmekriterien schriftlich festhalten
- [ ] Primärziele priorisieren: qualifizierte Anfragen, Konfiguratorstarts, Beratungskontakte, organische Sichtbarkeit, KI-Erwähnungen und KI-Zitate
- [ ] Zielmarkt und Sprachen bestätigen: zunächst Deutschland/de-DE; DACH oder weitere Länder als eigene Phase
- [ ] Zielgruppen und wichtigste Geschäftsbereiche mit Vertrieb und Marketing priorisieren
- [ ] Freigabeprozess definieren: Redaktion → Produkt/Fachabteilung → Marke/Recht → Veröffentlichung
- [ ] Ansprechpartner und Reaktionszeiten für Fakten-, Bild- und Sicherheitsfreigaben festlegen
- [ ] Monatlichen Reporting- und Entscheidungsrhythmus vereinbaren

**Abnahme:** Unterschriebener Scope mit messbaren Zielen, Zuständigkeiten, Freigabematrix und Zeitplan.

---

## 1. Marken-, Inhalts- und Rechtsfreigabe

- [ ] Offizielle Nutzung von Name, Logo, Farben und Produktbildern schriftlich freigeben
- [ ] Rechte für alle vorhandenen und neuen Bilder dokumentieren
- [ ] KI-Konzeptvisuals freigeben, ersetzen oder als klar gekennzeichnete Inspiration beibehalten
- [ ] Alle Produktbezeichnungen, Modellgrößen, Materialien, Garantien und Serviceaussagen fachlich prüfen
- [ ] Sicherheitskritische Aussagen gesondert freigeben: Wind, Lasten, Brandschutz, Befestigung, Rettungs-/Behördeneinsatz
- [ ] Preise, Verfügbarkeit und Lieferzeiten nur über gepflegte Datenquellen veröffentlichen
- [ ] Impressum, Datenschutz, Cookie-/Consent-Lösung und Verantwortlichkeit ergänzen
- [ ] Prüfen, ob eine Auftragsverarbeitungsvereinbarung für Analytics-, Hosting- und API-Anbieter erforderlich ist
- [ ] Veröffentlichungshinweis der Demo nach offizieller Übernahme durch die passende Betreiberkennzeichnung ersetzen

**Abnahme:** Schriftliche Marken-, Bild-, Produkt-, Rechts- und Sicherheitsfreigabe.

---

## 2. Produktionsarchitektur und Domain

- [ ] Ziel festlegen: Integration in `pro-tent.com/de-de/` oder offizielle Subdomain
- [ ] CMS-/Hosting-Entscheidung treffen und redaktionelle Bearbeitung ermöglichen
- [ ] Staging-Umgebung mit Passwortschutz oder `noindex` einrichten
- [ ] Produktionsdomain, Canonicals, Open Graph, Sitemap und `robots.txt` umstellen
- [ ] GitHub-Demo nach Go-live auf `noindex`, Weiterleitung oder Archivstatus setzen, um Dubletten zu vermeiden
- [ ] Redirect-Matrix für alle geänderten URLs erstellen
- [ ] CI/CD mit Build, Tests, Linkprüfung und kontrolliertem Deployment einrichten
- [ ] Backups, Rollback, Monitoring, Fehlerprotokollierung und Verfügbarkeitsprüfung einrichten
- [ ] Sicherheitsheader, Abhängigkeiten, Zugriffsrechte und Secret-Management prüfen
- [ ] Core Web Vitals und Mobilgeräte auf Produktionshosting erneut messen

**Abnahme:** Offizielle Domain ist crawlbar, sicher, performant und ohne Canonical-/Duplicate-Content-Konflikte erreichbar.

---

## 3. Messkonzept und First-Party-Daten

- [ ] Google Search Console Property einrichten und verifizieren
- [ ] Bing Webmaster Tools einrichten und Sitemap übermitteln
- [ ] GA4 oder datenschutzkonforme Alternative wie Matomo auswählen
- [ ] Consent Mode/Cookie-Einwilligung rechtskonform konfigurieren
- [ ] Ereignisse definieren: Konfigurator, Kontakt, Beratung, Telefon, E-Mail, Download und wichtige interne Schritte
- [ ] CRM-/Lead-Zuordnung für qualifizierte Anfragen abstimmen
- [ ] Ausgangsbaseline dokumentieren: Klicks, Impressionen, Rankings, indexierte URLs, Leads und Conversionrate
- [ ] Dashboard für Geschäftsleitung, Marketing und Redaktion erstellen

**Abnahme:** Sichtbarkeit und Geschäftsergebnis können von der Suchanfrage bis zur qualifizierten Aktion nachvollzogen werden.

---

## 4. DataForSEO-Pilot

### 4.1 Einrichtung

- [ ] DataForSEO-Konto durch Pro-Tent bzw. den Auftraggeber anlegen
- [ ] API-Zugangsdaten ausschließlich im Secret-Store hinterlegen
- [ ] Kostenlimit, Warnschwellen und Verantwortlichkeit für Guthaben definieren
- [ ] Mit der öffentlich ausgewiesenen Mindesteinzahlung von **50 US-Dollar** starten; dies ist Guthaben/Pay-as-you-go, kein zwingendes Monatsabo
- [ ] Datenhaltung, Löschfristen und Reportingstruktur festlegen

### 4.2 SEO-Analysen

- [ ] **OnPage API:** Produktionsseite technisch crawlen; Rendering nur bei benötigten Templates einsetzen
- [ ] **SERP API:** relevante Google-Suchergebnisse für Deutschland, Deutsch und passende Geräte erfassen
- [ ] **Keyword Data/Labs API:** Nachfrage, Varianten, Suchintentionen und Wettbewerberlücken untersuchen
- [ ] **Backlinks/Domain Analytics:** Domains, verweisende Seiten, Linklücken und Marktumfeld analysieren
- [ ] 5–8 reale Wettbewerber datenbasiert bestimmen – nicht aus Erinnerung
- [ ] Keyword- und Themencluster nach Geschäftswert, Nachfrage, Konkurrenz und vorhandener Pro-Tent-Expertise priorisieren

### 4.3 GEO-/AI-Analysen

- [ ] **AI Optimization API** für LLM Mentions, AI Keyword Data, LLM Responses und bei Bedarf LLM Scraper pilotieren
- [ ] Ein stabiles Set aus zunächst 30–50 deutschen Kauf-, Vergleichs- und Informationsprompts definieren
- [ ] Pro Prompt dokumentieren: Engine/Modell, Sprache, Land, Zeitpunkt, Antwort, Marke, Wettbewerber, Zitat und Quelle
- [ ] Baseline vor größeren Contentänderungen erfassen
- [ ] Prompt-Sets wiederholt und versioniert ausführen; keine Einzelantwort als KPI behandeln
- [ ] Share of Voice, Markenmentions, zitierte Domains, Antwortposition und Themenlücken auswerten
- [ ] Falsche oder veraltete KI-Aussagen als Content-/Entity-Aufgabe zurückspielen
- [ ] Endpoint- und Modellabdeckung vor jedem produktiven Lauf prüfen, weil sie sich verändern kann

### 4.4 Pilot-Abnahme

- [ ] Vierwöchigen Pilot mit festem Budget durchführen
- [ ] Kosten pro Datensatz, Nutzwert und Datenqualität dokumentieren
- [ ] Entscheiden, welche Endpoints dauerhaft laufen und welche nur quartalsweise benötigt werden
- [ ] Automatisierte Wochen-/Monatsberichte einrichten

**Aktuell offiziell bestätigt:** DataForSEO arbeitet Pay-as-you-go; Mindestzahlung 50 US-Dollar. Beim veröffentlichten LLM-Mentions-Beispiel kostet ein Request 0,10 US-Dollar plus 0,001 US-Dollar je Ergebniszeile; 1.000 Zeilen werden mit 1,10 US-Dollar ausgewiesen. Preise und konkrete Endpoint-Abdeckung vor Beauftragung erneut kontrollieren.

---

## 5. Keyword-, Konkurrenz- und Themenstrategie

- [ ] Bestehende 25 Wissensseiten gegen reale Nachfrage und SERPs benchmarken
- [ ] Informations-, Vergleichs-, Marken- und Transaktionsintention trennen
- [ ] Themenlücken gegenüber relevanten Wettbewerbern ermitteln
- [ ] Priorisierungsmatrix erstellen: Geschäftswert × Nachfrage × Belegbarkeit × Aufwand × Wettbewerb
- [ ] Eigene Themenführerschaft definieren: mobile Markenräume, modulare Messeauftritte, Promotion, Ausstattung, Betrieb und Service
- [ ] Kannibalisierung, ähnliche Suchintentionen und interne Linkziele prüfen
- [ ] Content-Roadmap für 3, 6 und 12 Monate erstellen

**Abnahme:** Datenbasierte Roadmap mit Zielseite, Suchintention, Nutzerfrage, Quelle, CTA, Aufwand und Priorität.

---

## 6. Inhaltsausbau

- [ ] Bestehende 25 Artikel fachlich freigeben und auf offizieller Domain veröffentlichen
- [ ] Fehlende Modell- und Größenvergleiche ergänzen
- [ ] Branchen-Hubs für Messe, Promotion, Gastronomie, Gewerbe, Rettung, Sport und Vereine ausbauen
- [ ] Aufbau-, Wetter-, Befestigungs-, Pflege- und Serviceinhalte ergänzen
- [ ] Bedruckung, Sichtachsen, Druckdaten und Markenraumplanung vertiefen
- [ ] Originaldaten aus Produktmanagement, Beratung, Service und Vertrieb integrieren
- [ ] Echte Cases mit Aufgabe, Lösung, Komponenten, Bildern und belegbaren Ergebnissen erstellen
- [ ] Eigene Checklisten, Entscheidungsmatrizen, Planungshilfen und Originalgrafiken entwickeln
- [ ] Jede Seite mit Direktantwort, Quellen, Aktualisierungsdatum, passenden FAQs und nächstem Schritt ausstatten
- [ ] Keine KI-Massenproduktion ohne fachliche Prüfung veröffentlichen

**Abnahme:** Freigegebene, originäre Inhalte mit erkennbarem Mehrwert gegenüber Produkt- und Wettbewerberseiten.

---

## 7. Entity-, Schema- und GEO-Ausbau

- [ ] Einheitliche Organisations-, Marken-, Produkt- und Modellbezeichnungen festlegen
- [ ] Unternehmensdaten über Website, Profile, Verzeichnisse und Partnerseiten konsistent halten
- [ ] `Organization`, `WebSite`, `WebPage`, `Article`, `Product`, `BreadcrumbList` und weitere passende Schemas prüfen
- [ ] `Product`-Schema nur mit vollständigen, aktuellen und freigegebenen Produktdaten verwenden
- [ ] FAQ-Schema nur einsetzen, wenn die Fragen sichtbar und inhaltlich passend sind
- [ ] Autoren, fachliche Prüfer und Aktualisierungsprozess sichtbar machen
- [ ] Quellenmethodik und öffentliche Aktualisierungshinweise bereitstellen
- [ ] `llms.txt` als ergänzendes Verzeichnis pflegen, nicht als Rankinggarantie behandeln
- [ ] Zitierfähige Abschnitte, Tabellen und Definitionen technisch sauber ausliefern

---

## 8. Autorität und externe Signale

- [ ] Bestehende Händler-, Partner-, Messe-, Presse- und Case-Erwähnungen erfassen
- [ ] Relevante Link- und Zitationslücken gegenüber Wettbewerbern analysieren
- [ ] Offizielle Case Studies gemeinsam mit Kunden/Partnern veröffentlichen
- [ ] Fachbeiträge, Messewissen, Planungsdaten und Originalstudien für digitale PR entwickeln
- [ ] Veraltete oder falsche Unternehmensangaben im Web korrigieren
- [ ] Keine gekauften Massenlinks oder künstlichen Erwähnungen einsetzen

**Abnahme:** Nachvollziehbarer Outreach-Plan und erste hochwertige, thematisch relevante externe Erwähnungen.

---

## 9. Qualitätssicherung und Veröffentlichung

- [ ] Alle Tests, Build, Lint und Security-Audit ausführen
- [ ] Desktop, Mobile, Tastaturbedienung und Screenreader-Basis prüfen
- [ ] Canonicals, Redirects, Sitemap, Statuscodes und interne/externe Links prüfen
- [ ] Schema-Daten validieren
- [ ] Bilder, Alt-Texte, Formate, Größen und Rechte kontrollieren
- [ ] JavaScript- und No-JavaScript-Ausgabe prüfen
- [ ] Produkt-, Marken-, Rechts- und Sicherheitsfreigabe dokumentieren
- [ ] Kontrollierten Go-live mit Rollback-Plan durchführen
- [ ] Sitemap einreichen und Indexierungsstatus überwachen

---

## 10. Laufender Betrieb

### Wöchentlich

- [ ] Verfügbarkeit, Indexierung, Crawlfehler und kritische Links prüfen
- [ ] strategische Rankings und zentrale GEO-Prompts beobachten
- [ ] neue Fragen aus Vertrieb, Beratung und Support sammeln

### Monatlich

- [ ] GSC-, Analytics-, Lead-, SERP- und GEO-Daten zusammenführen
- [ ] Contentgewinne, Verluste, Zitate und Wettbewerberbewegungen bewerten
- [ ] 2–4 priorisierte Verbesserungen oder neue Inhalte umsetzen
- [ ] Produktänderungen und Quellenaktualität prüfen
- [ ] Managementbericht mit Maßnahmen statt nur Kennzahlen liefern

### Quartalsweise

- [ ] vollständigen technischen Crawl durchführen
- [ ] Content-Inventur und Aktualisierungsliste erstellen
- [ ] Konkurrenz-, Backlink- und Entity-Analyse erneuern
- [ ] Prompt-Set, KPIs, Budget und Roadmap anpassen

---

## Empfohlene Auftragsphasen

| Phase | Inhalt | Ergebnis |
|---|---|---|
| 1. Freigabe & Setup | Scope, Rechte, Fachprüfung, Domain, Messkonzept | belastbare Produktionsfreigabe |
| 2. Datenbaseline | GSC, Analytics, DataForSEO-Pilot, Wettbewerber | priorisierte Ausgangslage |
| 3. Produktions-Go-live | Migration, Recht, Technik, Tracking, QA | offizieller stabiler Auftritt |
| 4. Content & Autorität | Themenausbau, Cases, Originaldaten, Erwähnungen | wachsende SEO-/GEO-Relevanz |
| 5. Betrieb | Monitoring, Reporting, Optimierung | messbare kontinuierliche Verbesserung |

---

## Was DataForSEO leistet – und was nicht

**DataForSEO hilft stark bei:**

- Keyword- und Suchintentionsermittlung
- SERP-, Wettbewerber- und Themenlückenanalyse
- technischem Crawl und OnPage-Auswertung
- Backlink- und Domainanalysen
- Beobachtung von Markenmentions und Quellen in KI-Antworten
- reproduzierbaren, automatisierten Reports

**DataForSEO erledigt nicht automatisch:**

- fachlich richtige oder freigegebene Inhalte
- bessere Rankings oder KI-Zitate allein durch Nutzung der API
- Marken- und Bildrechte
- externe Autorität, echte Cases oder hochwertige Erwähnungen
- die Interpretation, warum sich Sichtbarkeit verändert hat

**Empfehlung:** DataForSEO im Auftrag einsetzen – als API-Kern für Analyse und Monitoring, ergänzt durch Google Search Console als First-Party-Quelle und menschliche Fach-/Redaktionsprüfung. Mit einem begrenzten Vierwochen-Pilot starten, bevor dauerhaftes Volumen festgelegt wird.

---

## Offizielle Quellen zu DataForSEO

- API-Übersicht: https://dataforseo.com/apis
- AI Optimization Data API: https://dataforseo.com/apis/ai-optimization-api
- Pricing: https://dataforseo.com/pricing
- AI Optimization API Docs: https://docs.dataforseo.com/v3/ai_optimization/overview/
