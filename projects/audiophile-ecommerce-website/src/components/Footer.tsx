import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <Link className="footer-logo" to="/" aria-label="Audiophile home">
          <img src="/assets/shared/desktop/logo.svg" alt="Audiophile" />
        </Link>
        <nav aria-label="Footer navigation">
          <Link to="/">Home</Link>
          <Link to="/category/headphones">Headphones</Link>
          <Link to="/category/speakers">Speakers</Link>
          <Link to="/category/earphones">Earphones</Link>
        </nav>
        <p>
          Audiophile is an all-in-one stop to fulfill your audio needs. We’re a small
          team of music lovers and sound specialists devoted to helping you get the
          most out of personal audio.
        </p>
        <p className="copyright">Copyright 2026. All Rights Reserved</p>
        <div className="socials" aria-label="Social media">
          <a href="https://facebook.com" aria-label="Facebook">
            <img src="/assets/shared/desktop/icon-facebook.svg" alt="" />
          </a>
          <a href="https://twitter.com" aria-label="Twitter">
            <img src="/assets/shared/desktop/icon-twitter.svg" alt="" />
          </a>
          <a href="https://instagram.com" aria-label="Instagram">
            <img src="/assets/shared/desktop/icon-instagram.svg" alt="" />
          </a>
        </div>
      </div>
    </footer>
  )
}
