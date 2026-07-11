import type { ReactNode } from 'react'

export function Out({ href, children }: { href: string; children: ReactNode }) {
  return <a className="out" href={href} target="_blank" rel="noopener noreferrer">{children}<span aria-hidden="true">↗</span></a>
}