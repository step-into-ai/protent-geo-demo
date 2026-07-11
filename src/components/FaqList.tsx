import type { FaqItem } from '../content/schema'

export function FaqList({ items }: { items: FaqItem[] }) {
  return <div className="faq-list">{items.map((item, index) => <details key={item.question} open={index === 0}>
    <summary><span>{String(index + 1).padStart(2, '0')}</span>{item.question}<i aria-hidden="true">+</i></summary><p>{item.answer}</p>
  </details>)}</div>
}