import type { HubPath } from '../content/hubs'

export const primaryNavigation = [
  { path: '/faltzelte', label: 'Faltzelte' },
  { path: '/messestaende', label: 'Messe' },
  { path: '/promotion-event', label: 'Promotion' },
  { path: '/bedruckung', label: 'Bedruckung' },
  { path: '/ausstattung', label: 'Ausstattung' },
] as const satisfies readonly { path: HubPath; label: string }[]
