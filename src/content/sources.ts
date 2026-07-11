import type { Source } from './schema'

const retrievedAt = '2026-07-11' as const
export const sources = {
  overview: { id: 'overview', title: 'Faltzelte im Überblick', url: 'https://www.pro-tent.com/de-de/faltzelte/', retrievedAt },
  model2000: { id: 'model2000', title: 'Pro-Tent 2000', url: 'https://www.pro-tent.com/de-de/faltzelte/pro-tent-2000/', retrievedAt },
  model4000: { id: 'model4000', title: 'Pro-Tent MODUL 4000', url: 'https://www.pro-tent.com/de-de/faltzelte/pro-tent-modul-4000/', retrievedAt },
  model5000: { id: 'model5000', title: 'Pro-Tent 5000', url: 'https://www.pro-tent.com/de-de/faltzelte/pro-tent-5000/', retrievedAt },
  sizes: { id: 'sizes', title: 'Zeltgrößen', url: 'https://www.pro-tent.com/de-de/zeltgroessen/', retrievedAt },
  sizeGuide: { id: 'sizeGuide', title: 'Faltzeltgröße berechnen', url: 'https://www.pro-tent.com/de-de/faltzeltgroesse-berechnen/', retrievedAt },
  setup: { id: 'setup', title: 'Faltzelt-Aufbau', url: 'https://www.pro-tent.com/de-de/faltzelte/aufbau/', retrievedAt },
  fixing: { id: 'fixing', title: 'Faltpavillons befestigen', url: 'https://www.pro-tent.com/de-de/faltpavillons-befestigen/', retrievedAt },
  accessories: { id: 'accessories', title: 'Zubehör', url: 'https://www.pro-tent.com/de-de/zubehoer/', retrievedAt },
  printing: { id: 'printing', title: 'Druckservice', url: 'https://www.pro-tent.com/de-de/druckservice/', retrievedAt },
  events: { id: 'events', title: 'Events, Promotion und Messen', url: 'https://www.pro-tent.com/de-de/einsatzbereiche/events-promotion-messen/', retrievedAt },
  gastronomy: { id: 'gastronomy', title: 'Gastronomie und Gastgewerbe', url: 'https://www.pro-tent.com/de-de/einsatzbereiche/gastronomie-gastgewerbe/', retrievedAt },
  rescueUse: { id: 'rescueUse', title: 'Schutz und Rettung', url: 'https://www.pro-tent.com/de-de/einsatzbereiche/schutz-rettung/', retrievedAt },
  clubs: { id: 'clubs', title: 'Vereine und Verbände', url: 'https://www.pro-tent.com/de-de/einsatzbereiche/vereine-verbaende/', retrievedAt },
  consulting: { id: 'consulting', title: 'Beratung', url: 'https://www.pro-tent.com/de-de/beratung/', retrievedAt },
  configurator: { id: 'configurator', title: 'Zelt-Konfigurator', url: 'https://www.pro-tent.com/de-de/konfigurator/zelt-konfigurator/', retrievedAt },
} satisfies Record<string, Source>

export type SourceId = keyof typeof sources
