import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type ActionLinkProps = { to: string; direction: 'left' | 'right'; children: ReactNode }

export function ActionLink({ to, direction, children }: ActionLinkProps) {
  return (
    <Link className={`action-link action-link--${direction}`} to={to}>
      <span>{children}</span>
      <span className="action-link__icon" aria-hidden="true">
        <img src={`/assets/icon-arrow-${direction}.svg`} alt="" />
      </span>
    </Link>
  )
}
