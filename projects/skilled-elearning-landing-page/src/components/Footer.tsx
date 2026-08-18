import { ActionLink } from './ActionLink'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <img src="/assets/logo-light.svg" alt="Skilled" width="112" height="29" />
        <ActionLink variant="footer">Get Started</ActionLink>
      </div>
    </footer>
  )
}
