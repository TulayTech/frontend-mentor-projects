import { SocialLinks } from './SocialLinks'

export function Header() {
  return (
    <header className="site-header shell">
      <a className="wordmark" href="#top" aria-label="Adam Keyes home">adamkeyes</a>
      <SocialLinks />
    </header>
  )
}
