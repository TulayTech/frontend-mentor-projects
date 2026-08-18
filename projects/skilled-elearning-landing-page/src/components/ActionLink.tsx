import type { ReactNode } from 'react'

type ActionLinkProps = {
  children: ReactNode
  className?: string
  label?: string
  variant: 'header' | 'hero' | 'footer'
}

export function ActionLink({ children, className = '', label, variant }: ActionLinkProps) {
  return (
    <a
      className={`action-link action-link--${variant} ${className}`.trim()}
      href="#courses"
      aria-label={label}
    >
      {children}
    </a>
  )
}
