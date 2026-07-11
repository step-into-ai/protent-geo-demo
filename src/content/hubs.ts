import type { HubPage } from './schema'
import pageContent from './pages.json'
import { isClaimId, type ClaimId } from './claims'

const official = 'https://www.pro-tent.com/de-de'

export const hubPaths = ['/faltzelte', '/messestaende', '/promotion-event', '/bedruckung', '/ausstattung'] as const
export type HubPath = (typeof hubPaths)[number]

export const hubPages = {
  '/faltzelte': {
    path: '/faltzelte',
    ...pageContent.hubs['/faltzelte'],
    claimIds: ['three-models', 'sizes-span', 'tool-free', '2000-profile', '4000-modular', '5000-profile'],
    officialLinks: [{ label: 'Faltzelte im Überblick', href: `${official}/faltzelte/` }, { label: 'Offizielle Größenübersicht', href: `${official}/zeltgroessen/` }, { label: 'Zelt-Konfigurator', href: `${official}/konfigurator/zelt-konfigurator/` }],
    relatedPaths: ['/ausstattung', '/bedruckung'],
  },
  '/messestaende': {
    path: '/messestaende',
    ...pageContent.hubs['/messestaende'],
    claimIds: ['messe-context', 'messe-zones', '4000-modular', 'plan-first'],
    officialLinks: [{ label: 'Events, Promotion und Messen', href: `${official}/einsatzbereiche/events-promotion-messen/` }, { label: 'MODUL 4000 ansehen', href: `${official}/faltzelte/pro-tent-modul-4000/` }, { label: 'Beratung öffnen', href: `${official}/beratung/` }],
    relatedPaths: ['/faltzelte', '/bedruckung', '/ausstattung'],
  },
  '/promotion-event': {
    path: '/promotion-event',
    ...pageContent.hubs['/promotion-event'],
    claimIds: ['messe-context', 'roadshow', 'print-accessories', 'fixing-required', 'no-weather-release'],
    officialLinks: [{ label: 'Offizieller Einsatzbereich', href: `${official}/einsatzbereiche/events-promotion-messen/` }, { label: 'Befestigung planen', href: `${official}/faltpavillons-befestigen/` }, { label: 'Konfigurator starten', href: `${official}/konfigurator/zelt-konfigurator/` }],
    relatedPaths: ['/bedruckung', '/ausstattung', '/faltzelte'],
  },
  '/bedruckung': {
    path: '/bedruckung',
    ...pageContent.hubs['/bedruckung'],
    claimIds: ['three-print', 'print-accessories', 'print-choice'],
    officialLinks: [{ label: 'Offizieller Druckservice', href: `${official}/druckservice/` }, { label: 'Gestaltungs-Vorlagen', href: `${official}/druckservice/gestaltungs-vorlagen/` }, { label: 'Beratung öffnen', href: `${official}/beratung/` }],
    relatedPaths: ['/messestaende', '/promotion-event', '/ausstattung'],
  },
  '/ausstattung': {
    path: '/ausstattung',
    ...pageContent.hubs['/ausstattung'],
    claimIds: ['accessory-categories', 'accessory-task', '4000-modular', 'fixing-required'],
    officialLinks: [{ label: 'Offizielles Zubehör', href: `${official}/zubehoer/` }, { label: 'MODUL 4000 ansehen', href: `${official}/faltzelte/pro-tent-modul-4000/` }, { label: 'Befestigungsratgeber', href: `${official}/faltpavillons-befestigen/` }],
    relatedPaths: ['/faltzelte', '/messestaende', '/promotion-event'],
  },
} satisfies Record<HubPath, HubPage<ClaimId, HubPath>>

export function validateHubReferences(pages: Record<string, { path: string; claimIds: readonly string[]; relatedPaths: readonly string[] }>) {
  const knownPaths = new Set<string>(hubPaths)
  for (const [key, page] of Object.entries(pages)) {
    if (!knownPaths.has(key) || page.path !== key) throw new Error(`Unbekannter Hub-Pfad: ${key}`)
    for (const id of page.claimIds) if (!isClaimId(id)) throw new Error(`Unbekannte Claim-ID: ${id}`)
    for (const path of page.relatedPaths) if (!knownPaths.has(path)) throw new Error(`Unbekannter verwandter Pfad: ${path}`)
  }
}

validateHubReferences(hubPages)
