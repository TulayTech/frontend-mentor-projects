import type { ReactNode } from 'react'

type SocialIconProps = {
  label: string
  href: string
  children: ReactNode
}

export function SocialIcon({ label, href, children }: SocialIconProps) {
  return (
    <a className="social-link" href={href} aria-label={label}>
      <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16">
        {children}
      </svg>
    </a>
  )
}
