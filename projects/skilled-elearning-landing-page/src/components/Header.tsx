import { ActionLink } from './ActionLink'

export function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <img src="/assets/logo-dark.svg" alt="Skilled" width="112" height="29" />
        <ActionLink variant="header">Get Started</ActionLink>
      </div>
    </header>
  )
}
