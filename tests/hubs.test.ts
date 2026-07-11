import { describe, expect, it } from 'vitest'
import { hubPages, validateHubReferences } from '../src/content/hubs'
import pageContent from '../src/content/pages.json'

const paths = ['/faltzelte', '/messestaende', '/promotion-event', '/bedruckung', '/ausstattung'] as const

describe('Hub-Inhalte und Metadaten', () => {
  it('bezieht React-Metadaten und FAQ aus derselben frameworkneutralen Quelle wie der Generator', () => {
    for (const path of paths) {
      expect(hubPages[path].meta).toEqual(pageContent.hubs[path].meta)
      expect(hubPages[path].faqs).toEqual(pageContent.hubs[path].faqs)
    }
  })

  it('weist unbekannte Claim-IDs und verwandte Pfade bei der Datenvalidierung zurück', () => {
    expect(() => validateHubReferences({ '/faltzelte': { path: '/faltzelte', claimIds: ['unbekannt'], relatedPaths: ['/ausstattung'] } })).toThrow(/Claim-ID/)
    expect(() => validateHubReferences({ '/faltzelte': { path: '/faltzelte', claimIds: ['three-models'], relatedPaths: ['/unbekannt'] } })).toThrow(/verwandter Pfad/)
  })
  it.each(paths)('%s besitzt eindeutige Metadaten und Canonical', path => {
    const page = hubPages[path]
    expect(page.meta.title.length).toBeGreaterThan(25)
    expect(page.meta.description.length).toBeGreaterThan(70)
    expect(page.meta.canonical).toBe(`https://step-into-ai.github.io/protent-geo-demo${path}/`)
    expect(new Set(Object.values(hubPages).map(item => item.meta.title)).size).toBe(paths.length)
  })

  it.each(paths)('%s enthält substanzielle Orientierung, Kriterien, FAQ und Quellen', path => {
    const page = hubPages[path]
    expect(page.intro.length).toBeGreaterThan(180)
    expect(page.criteria.length).toBeGreaterThanOrEqual(4)
    expect(page.faqs.length).toBeGreaterThanOrEqual(3)
    expect(page.claimIds.length).toBeGreaterThanOrEqual(3)
    expect(page.officialLinks.length).toBeGreaterThanOrEqual(2)
    expect(page.officialLinks.every(link => link.href.startsWith('https://www.pro-tent.com/de-de/'))).toBe(true)
  })
})
