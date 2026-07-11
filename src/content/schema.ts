import type { SourceId } from './sources'

export const claimStatuses = ['official', 'editorial', 'needs-client-approval'] as const
export type ClaimStatus = (typeof claimStatuses)[number]

export type Source = {
  id: string
  title: string
  url: `https://www.pro-tent.com/de-de/${string}`
  retrievedAt: `${number}-${number}-${number}`
}

export type Claim = {
  id: string
  text: string
  sourceId: SourceId
  retrievedAt: `${number}-${number}-${number}`
  status: ClaimStatus
  market?: 'DE' | 'CH' | 'AT' | 'global'
  model?: '2000' | 'MODUL 4000' | '5000' | '5000 Rescue'
}

export type FaqItem = { question: string; answer: string }
export type DecisionCriterion = { title: string; text: string }
export type OfficialLink = { label: string; href: Source['url'] }
export type PageMeta = { title: string; description: string; canonical: string; robots?: string }

export type HubPage<ClaimId extends string = string, HubPath extends string = string> = {
  path: HubPath
  eyebrow: string
  title: string
  intro: string
  criteria: DecisionCriterion[]
  faqs: FaqItem[]
  claimIds: ClaimId[]
  officialLinks: OfficialLink[]
  relatedPaths: HubPath[]
  meta: PageMeta
}
