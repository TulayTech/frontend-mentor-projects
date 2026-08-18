import { useCallback, useState } from 'react'
import { MobileMenu } from './components/MobileMenu'

const navLinks = ['About', 'Careers', 'Events', 'Products', 'Support']

const creations = [
  ['Deep earth', 'image-deep-earth.jpg'],
  ['Night arcade', 'image-night-arcade.jpg'],
  ['Soccer team VR', 'image-soccer-team.jpg'],
  ['The grid', 'image-grid.jpg'],
  ['From up above VR', 'image-from-above.jpg'],
  ['Pocket borealis', 'image-pocket-borealis.jpg'],
  ['The curiosity', 'image-curiosity.jpg'],
  ['Make it fisheye', 'image-fisheye.jpg'],
]

const socials = ['facebook', 'twitter', 'pinterest', 'instagram']

function Navigation({ className = '' }: { className?: string }) {
  return (
    <nav className={className} aria-label={className.includes('footer') ? 'Footer navigation' : 'Primary navigation'}>
      {navLinks.map((link) => (
        <a key={link} href={`#${link.toLowerCase()}`}>
          {link}
        </a>
      ))}
    </nav>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = useCallback(() => setMenuOpen(false), [])

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="hero" id="about">
        <div className="hero__inner">
          <div className="site-header">
            <a href="#main-content" aria-label="Loopstudios home">
              <img src="/images/logo.svg" alt="" />
            </a>
            <Navigation className="desktop-nav" />
            <button
              className="menu-button"
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
            >
              <img src="/images/icon-hamburger.svg" alt="" />
            </button>
          </div>

          <h1>Immersive experiences that deliver</h1>
        </div>
      </header>

      {menuOpen && <MobileMenu onClose={closeMenu} />}

      <main id="main-content">
        <section className="about" aria-labelledby="about-title">
          <picture>
            <source media="(max-width: 47.99rem)" srcSet="/images/mobile/image-interactive.jpg" />
            <img
              className="about__image"
              src="/images/desktop/image-interactive.jpg"
              alt="A person enjoying a virtual reality experience"
            />
          </picture>
          <div className="about__copy">
            <h2 id="about-title">The leader in interactive VR</h2>
            <p>
              Founded in 2011, Loopstudios has been producing world-class virtual reality projects
              for some of the best companies around the globe. Our award-winning creations have
              transformed businesses through digital experiences that bind to their brand.
            </p>
          </div>
        </section>

        <section className="creations" id="products" aria-labelledby="creations-title">
          <h2 id="creations-title">Our creations</h2>
          <a className="see-all see-all--desktop" href="#gallery">
            See all
          </a>
          <div className="gallery" id="gallery">
            {creations.map(([title, image]) => (
              <a
                className="creation-card"
                key={title}
                href={`/images/desktop/${image}`}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${title} artwork`}
              >
                <picture>
                  <source media="(max-width: 47.99rem)" srcSet={`/images/mobile/${image}`} />
                  <img src={`/images/desktop/${image}`} alt="" />
                </picture>
                <span>{title}</span>
              </a>
            ))}
          </div>
          <a className="see-all see-all--mobile" href="#gallery">
            See all
          </a>
        </section>
      </main>

      <footer className="site-footer" id="support">
        <div className="site-footer__inner">
          <a className="site-footer__logo" href="#about" aria-label="Loopstudios home">
            <img src="/images/logo.svg" alt="" />
          </a>
          <Navigation className="footer-nav" />
          <div className="socials" aria-label="Social media links">
            {socials.map((social) => (
              <a key={social} href={`https://www.${social === 'twitter' ? 'x' : social}.com/`} aria-label={social}>
                <img src={`/images/icon-${social}.svg`} alt="" />
              </a>
            ))}
          </div>
          <p>© 2021 Loopstudios. All rights reserved.</p>
        </div>
      </footer>

      <span className="anchor-target" id="careers" />
      <span className="anchor-target" id="events" />
    </>
  )
}

export default App
