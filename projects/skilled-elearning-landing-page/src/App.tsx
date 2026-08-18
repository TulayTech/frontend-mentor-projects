import { ActionLink } from './components/ActionLink'
import { CourseGrid } from './components/CourseGrid'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

export function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <section className="hero" aria-labelledby="hero-title">
          <div className="container hero__inner">
            <div className="hero__copy">
              <h1 id="hero-title">Maximize skill, minimize budget</h1>
              <p>
                Our modern courses across a range of in-demand skills will give you the knowledge you
                need to live the life you want.
              </p>
              <ActionLink variant="hero">Get Started</ActionLink>
            </div>
            <picture className="hero__media">
              <source
                media="(min-width: 64rem)"
                type="image/webp"
                srcSet="/assets/image-hero-desktop.webp 1x, /assets/image-hero-desktop@2x.webp 2x"
              />
              <source
                media="(min-width: 64rem)"
                srcSet="/assets/image-hero-desktop.png 1x, /assets/image-hero-desktop@2x.png 2x"
              />
              <source
                media="(min-width: 40rem)"
                type="image/webp"
                srcSet="/assets/image-hero-tablet.webp 1x, /assets/image-hero-tablet@2x.webp 2x"
              />
              <source
                media="(min-width: 40rem)"
                srcSet="/assets/image-hero-tablet.png 1x, /assets/image-hero-tablet@2x.png 2x"
              />
              <source
                type="image/webp"
                srcSet="/assets/image-hero-mobile.webp 1x, /assets/image-hero-mobile@2x.webp 2x"
              />
              <img
                src="/assets/image-hero-mobile.png"
                srcSet="/assets/image-hero-mobile@2x.png 2x"
                alt="A student learning online with course hours and membership statistics"
                width="435"
                height="409"
              />
            </picture>
          </div>
        </section>
        <CourseGrid />
      </main>
      <Footer />
    </>
  )
}
