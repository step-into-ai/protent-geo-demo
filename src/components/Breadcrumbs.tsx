import { Link } from 'react-router-dom'

export function Breadcrumbs({ current, parent }: { current: string; parent?: { label: string; path: string } }) {
  return <nav className="breadcrumbs" aria-label="Brotkrumen"><ol><li><Link to="/">Wissenswelt</Link></li>{parent && <li><Link to={parent.path}>{parent.label}</Link></li>}<li aria-current="page">{current}</li></ol></nav>
}