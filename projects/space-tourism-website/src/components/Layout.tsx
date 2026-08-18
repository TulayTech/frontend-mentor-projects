import type { ReactNode } from 'react'
import { Header } from './Header'

export function Layout({ page, children }: { page: string; children: ReactNode }) {
  return (
    <div className={`space-page space-page--${page}`}>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content">{children}</main>
    </div>
  )
}
