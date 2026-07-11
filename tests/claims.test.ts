import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import { claims, claimStatuses, publicClaim } from '../src/content/claims'
import { sources } from '../src/content/sources'

describe('zentrale Claims', () => {
  it('kennt genau die drei Freigabestatus', () => {
    expect(claimStatuses).toEqual(['official', 'editorial', 'needs-client-approval'])
  })

  it('blockiert zentral jeden Claim mit ausstehender Freigabe', () => {
    expect(publicClaim('no-weather-release')).toBeUndefined()
    expect(publicClaim('three-models')?.id).toBe('three-models')
  })

  it('hat für jeden Claim eine registrierte Quelle, Datum und Status', () => {
    const sourceIds = new Set(Object.keys(sources))
    expect(claims.length).toBeGreaterThanOrEqual(15)
    for (const claim of claims) {
      expect(claim.text.trim()).not.toBe('')
      expect(sourceIds.has(claim.sourceId)).toBe(true)
      expect(claim.retrievedAt).toMatch(/^\d{4}-\d{2}-\d{2}$/)
      expect(claimStatuses).toContain(claim.status)
    }
  })

  it('koppelt Claim.sourceId im Typsystem an SourceId', () => {
    const schema = readFileSync('src/content/schema.ts', 'utf8')
    expect(schema).toMatch(/import type \{ SourceId \} from ['"]\.\/sources['"]/)
    expect(schema).toMatch(/sourceId:\s*SourceId/)
  })

  it('governt alle öffentlich sichtbaren Startseiten-Produktclaims und neutralisiert Superlative', () => {
    const app = readFileSync('src/App.tsx', 'utf8')
    expect(app).not.toContain('maximale Stabilität')
    expect(app).not.toContain('grundsätzlich kann er auch allein erfolgen')
    expect(app).toContain('homeClaims')
    expect(app).toContain('publicClaim')
    expect(app).not.toContain('claimsById')
    expect(claims.map(claim => claim.id)).toEqual(expect.arrayContaining([
      '2000-home-profile', '4000-home-profile', '5000-home-profile', 'setup-home',
    ]))
  })

  it('begrenzt den Drei-Reihen-Claim auf den Vergleich und schließt Rescue nicht aus', () => {
    const claim = claims.find(item => item.id === 'three-models')!
    expect(claim.text).toMatch(/Vergleich/)
    expect(claim.text).toMatch(/Rescue/)
  })
})
