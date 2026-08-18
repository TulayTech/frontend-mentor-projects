import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type ButtonLinkProps = {
  children: ReactNode
  className?: string
  variant?: 'light' | 'dark'
}

export function ButtonLink({ children, className = '', variant = 'light' }: ButtonLinkProps) {
  return (
    <Link className={`button button--${variant} ${className}`.trim()} to="/booking">
      {children}
    </Link>
  )
}
