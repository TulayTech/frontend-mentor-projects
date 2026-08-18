import { useCallback, useState } from 'react'
import { MobileMenu } from './components/MobileMenu'
import { ProjectSlider } from './components/ProjectSlider'

const approaches = [
  ['01', 'Brand strategy', 'Brand strategy is critical for long-term success. Outshining competitors and capturing the target audience are key.'],
  ['02', 'Brand design', 'Keeping the brand design unique and meaningful helps in communicating the brand’s timeless value effectively.'],
  ['03', 'Web design', 'A beautifully crafted website is the best tool for brand awareness, and ultimately results in increased revenues.'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = useCallback(() => setMenuOpen(false), [])

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <a className="site-header__logo" href="#main-content" aria-label="Creative home">
          <img src="/assets/desktop/logo.svg" alt="" />
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#services">Service</a>
          <a href="#projects">Projects</a>
          <a className="nav-cta" href="#contact">Schedule a Call</a>
        </nav>
        <button
          className="menu-button"
          type="button"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(true)}
        >
          <img src="/assets/mobile/icon-hamburger.svg" alt="" />
        </button>
      </header>

      {menuOpen && <MobileMenu onClose={closeMenu} />}

      <main id="main-content">
        <section className="hero" id="about" aria-labelledby="hero-title">
          <picture className="hero__image">
            <source media="(max-width: 40rem)" srcSet="/assets/mobile/image-hero.jpg" />
            <source media="(max-width: 64rem)" srcSet="/assets/tablet/image-hero.jpg" />
            <img src="/assets/desktop/image-hero.jpg" alt="Two designers collaborating at computers" />
          </picture>
          <div className="hero__copy">
            <h1 id="hero-title">Branding &amp; website design agency</h1>
            <p>We specialize in visual storytelling by creating cohesive brand and website design solutions for small businesses, giving lasting impressions to audiences in a digital world.</p>
            <a className="button" href="#services">Learn more</a>
          </div>
        </section>

        <section className="strategy" id="services" aria-labelledby="strategy-title">
          <picture className="strategy__image">
            <source media="(max-width: 40rem)" srcSet="/assets/mobile/image-strategic.jpg" />
            <source media="(max-width: 64rem)" srcSet="/assets/tablet/image-strategic.jpg" />
            <img src="/assets/desktop/image-strategic.jpg" alt="A designer sketching a brand wordmark" />
          </picture>
          <div className="strategy__copy">
            <img className="strategy__wave" src="/assets/desktop/bg-pattern-wave-red.svg" alt="" />
            <h2 id="strategy-title"><span>Design</span> is strategic.</h2>
            <p>A well-crafted design strategy consistently produces desired outcomes and brand awareness. We are firm believers that success lies in creative collaboration with our clients.</p>
            <a href="#contact">Schedule a Call</a>
          </div>
        </section>

        <section className="approach" aria-labelledby="approach-title">
          <h2 id="approach-title">Our approach for creating a winning brand</h2>
          <ol>
            {approaches.map(([number, title, text]) => (
              <li key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </section>

        <ProjectSlider />

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <img src="/assets/desktop/bg-pattern-wave-red.svg" alt="" />
          <h2 id="contact-title">Let’s build something great together.</h2>
          <a className="button" href="mailto:hello@creative.example?subject=Schedule%20a%20call">Schedule a Call</a>
        </section>
      </main>
    </>
  )
}

export default App
