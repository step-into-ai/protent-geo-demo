import { publicClaim, type ClaimId } from '../content/claims'
import { sources } from '../content/sources'

export function SourceList({ claimIds }: { claimIds: ClaimId[] }) {
  return <div className="source-list">{claimIds.map(publicClaim).filter(claim => claim !== undefined).map(claim => {
    const id = claim.id
    const source = sources[claim.sourceId]
    return <article key={id} className="source-item">
      <span className={`status status-${claim.status}`}>{claim.status === 'official' ? 'Offizielle Produktangabe' : 'Planungshinweis'}</span>
      <p>{claim.text}</p>
      <a href={source.url} target="_blank" rel="noopener noreferrer">{source.title} · abgerufen am {source.retrievedAt.split('-').reverse().join('.')} ↗</a>
    </article>
  })}</div>
}