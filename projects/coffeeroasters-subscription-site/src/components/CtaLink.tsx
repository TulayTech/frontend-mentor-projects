import { Link } from 'react-router-dom'

export function CtaLink({ children = 'Create your plan' }: { children?: string }) {
  return <Link className="button" to="/plan">{children}</Link>
}
