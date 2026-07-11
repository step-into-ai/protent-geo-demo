import type { Claim } from './schema'

const date = '2026-07-11' as const
export const claims = [
  { id: 'three-models', text: 'Dieser Vergleich behandelt die Modellreihen 2000, MODUL 4000 und 5000; spezialisierte Lösungen wie Pro-Tent 5000 Rescue sind nicht Teil dieses Vergleichs.', sourceId: 'overview', retrievedAt: date, status: 'editorial' },
  { id: 'sizes-span', text: 'Die dokumentierte Standardgrößen-Spanne reicht von 1,5 × 1,5 m bis 8 × 4 m; nicht jede Größe ist für jedes Modell verfügbar.', sourceId: 'sizes', retrievedAt: date, status: 'official' },
  { id: 'tool-free', text: 'Der Hersteller beschreibt den Aufbau der Faltkonstruktion als werkzeuglos.', sourceId: 'setup', retrievedAt: date, status: 'official' },
  { id: '2000-profile', text: 'Das Pro-Tent 2000 ist die kompakte Modellreihe für kleinere Budgets.', sourceId: 'model2000', retrievedAt: date, status: 'editorial', model: '2000' },
  { id: '4000-modular', text: 'Das MODUL 4000 ist für modulare Raumkonzepte, Innenkabinen und integrierbares Zubehör positioniert.', sourceId: 'model4000', retrievedAt: date, status: 'editorial', model: 'MODUL 4000' },
  { id: '5000-profile', text: 'Das Pro-Tent 5000 ist für große Formate und anspruchsvolle Outdoor-Einsätze positioniert.', sourceId: 'model5000', retrievedAt: date, status: 'editorial', model: '5000' },
  { id: 'plan-first', text: 'Fläche, Mobiliar, Bewegungswege und Zugang sollten vor der Größenwahl geklärt werden.', sourceId: 'sizeGuide', retrievedAt: date, status: 'editorial' },
  { id: 'messe-context', text: 'Faltzelte werden von Pro-Tent für Events, Promotion und Messen als Einsatzbereich geführt.', sourceId: 'events', retrievedAt: date, status: 'official' },
  { id: 'messe-zones', text: 'Ein Messestand sollte von Aufgabe, Sichtachsen und benötigten Funktionszonen her geplant werden.', sourceId: 'events', retrievedAt: date, status: 'editorial' },
  { id: 'roadshow', text: 'Für wechselnde Eventstandorte sind Transport, Aufbau, Verankerung und konsistente Gestaltung gemeinsam zu planen.', sourceId: 'events', retrievedAt: date, status: 'editorial' },
  { id: 'three-print', text: 'Pro-Tent nennt drei Druckverfahren sowie Lösungen von Logodruck bis Vollbedruckung.', sourceId: 'printing', retrievedAt: date, status: 'official' },
  { id: 'print-accessories', text: 'Laut Druckservice kann auch Zubehör personalisiert werden.', sourceId: 'printing', retrievedAt: date, status: 'official' },
  { id: 'print-choice', text: 'Motiv, Material, Einsatz und gewünschte Wirkung bestimmen die redaktionelle Auswahl des Druckansatzes.', sourceId: 'printing', retrievedAt: date, status: 'editorial' },
  { id: 'accessory-categories', text: 'Das offizielle Zubehörangebot umfasst Lösungen für Ausbau, Beleuchtung, Transport und Befestigung.', sourceId: 'accessories', retrievedAt: date, status: 'official' },
  { id: 'accessory-task', text: 'Zubehör sollte nach Aufgabe, Standort und Ablauf ausgewählt werden, nicht als isolierte Ergänzung.', sourceId: 'accessories', retrievedAt: date, status: 'editorial' },
  { id: 'fixing-required', text: 'Die Befestigung oder Beschwerung muss zum Untergrund und zur Situation vor Ort passen.', sourceId: 'fixing', retrievedAt: date, status: 'editorial' },
  { id: 'no-weather-release', text: 'Eine konkrete Wind- oder Wetterfreigabe benötigt aktuelle, eindeutig zugeordnete Herstellerdokumentation.', sourceId: 'fixing', retrievedAt: date, status: 'needs-client-approval' },
  { id: 'consulting-process', text: 'Die offizielle Beratung strukturiert den Weg von Bedarf und Gestaltung zur Konfiguration.', sourceId: 'consulting', retrievedAt: date, status: 'official' },
  { id: '2000-home-profile', text: 'Kompaktes Profi-Faltzelt für kleinere Budgets – mit werkzeuglosem Aufbau und dokumentierten Standardgrößen von 2 × 2 m bis 6 × 3 m.', sourceId: 'model2000', retrievedAt: date, status: 'editorial', model: '2000' },
  { id: '4000-home-profile', text: 'Für variable Raumkonzepte, Innenkabinen und systematische Erweiterungen; die Produktseite beschreibt ein Profil zur direkten Zubehörintegration.', sourceId: 'model4000', retrievedAt: date, status: 'editorial', model: 'MODUL 4000' },
  { id: '5000-home-profile', text: 'Für große Formate und anspruchsvolle Outdoor-Einsätze positioniert; dokumentierte Standardgrößen reichen von 3 × 3 m bis 8 × 4 m.', sourceId: 'model5000', retrievedAt: date, status: 'editorial', model: '5000' },
  { id: 'setup-home', text: 'Die Faltkonstruktion wird auseinandergezogen, in der Höhe justiert und anschließend passend zum Standort befestigt; der Hersteller beschreibt den Aufbau als werkzeuglos.', sourceId: 'setup', retrievedAt: date, status: 'official' },
  { id: 'use-messe', text: 'Sichtbarkeit, geordnete Abläufe und ein konsistenter Markenauftritt stehen bei Messe und Promotion im Mittelpunkt.', sourceId: 'events', retrievedAt: date, status: 'editorial' },
  { id: 'use-gastronomy', text: 'Flexible Außenflächen können für Service, Catering und Veranstaltungen geplant werden.', sourceId: 'gastronomy', retrievedAt: date, status: 'editorial' },
  { id: 'use-rescue', text: 'Mobile Arbeits- und Schutzräume unterstützen planbare Abläufe im Bereich Schutz und Rettung.', sourceId: 'rescueUse', retrievedAt: date, status: 'editorial' },
  { id: 'use-clubs', text: 'Faltzelte können als Treffpunkt für Turniere, Feste und Informationsstände geplant werden.', sourceId: 'clubs', retrievedAt: date, status: 'editorial' },
] as const satisfies readonly Claim[]

export type ClaimId = (typeof claims)[number]['id']

const claimsById = new Map<ClaimId, (typeof claims)[number]>(claims.map(claim => [claim.id, claim]))
const claimIds = new Set<string>(claims.map(claim => claim.id))

export function isClaimId(id: string): id is ClaimId {
  return claimIds.has(id)
}

export function publicClaim(id: ClaimId) {
  const claim = claimsById.get(id)
  return claim?.status === 'needs-client-approval' ? undefined : claim
}
export { claimStatuses } from './schema'
