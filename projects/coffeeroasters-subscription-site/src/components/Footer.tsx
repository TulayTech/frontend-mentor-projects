import { Link } from 'react-router-dom'

const socials = [
  ['Facebook', 'icon-facebook.svg', 'https://www.facebook.com/'],
  ['X', 'icon-twitter.svg', 'https://x.com/'],
  ['Instagram', 'icon-instagram.svg', 'https://www.instagram.com/'],
]

export function Footer() {
  return (
    <footer className="site-footer shell">
      <Link to="/" aria-label="Coffeeroasters home"><img className="logo" src="/assets/shared/desktop/logo.svg" alt="" /></Link>
      <nav aria-label="Footer navigation"><Link to="/">Home</Link><Link to="/about">About us</Link><Link to="/plan">Create your plan</Link></nav>
      <nav className="socials" aria-label="Social media">
        {socials.map(([label, icon, url]) => <a key={label} href={url} aria-label={label}><img src={`/assets/shared/desktop/${icon}`} alt="" /></a>)}
      </nav>
    </footer>
  )
}
