import { publicClaim, type ClaimId } from '../content/claims'
import { sources } from '../content/sources'

const labels = { official: 'Herstellerangabe', editorial: 'Redaktionelle Einordnung', 'needs-client-approval': 'Freigabe ausstehend' }

export function SourceList({ claimIds }: { claimIds: ClaimId[] }) {
  return <div className="source-list">{claimIds.map(publicClaim).filter(claim => claim !== undefined).map(claim => {
    const id = claim.id
    const source = sources[claim.sourceId]
    return <article key={id} className="source-item">
      <span className={`status status-${claim.status}`}>{labels[claim.status]}</span>
      <p>{claim.text}</p>
      <a href={source.url} target="_blank" rel="noopener noreferrer">{source.title} · abgerufen am {source.retrievedAt.split('-').reverse().join('.')} ↗</a>
    </article>
  })}</div>
}