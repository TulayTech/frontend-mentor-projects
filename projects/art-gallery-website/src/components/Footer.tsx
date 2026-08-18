import { Link } from 'react-router-dom'

const socials = ['facebook', 'instagram', 'twitter']

export function Footer({ light = false }: { light?: boolean }) {
  return (
    <footer className={`site-footer ${light ? 'site-footer--light' : ''}`}>
      <div className="site-footer__inner">
        <Link to="/" aria-label="Modern Art Gallery home">
          <img className="site-footer__logo" src={`/assets/logo-${light ? 'dark' : 'light'}.svg`} alt="" />
        </Link>
        <p>The Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm. Find us at 99 King Street, Newport, USA.</p>
        <div className="socials" aria-label="Social media links">
          {socials.map((social) => (
            <a key={social} href={`https://www.${social === 'twitter' ? 'x' : social}.com/`} aria-label={social}>
              <img src={`/assets/icon-${social}.svg`} alt="" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
