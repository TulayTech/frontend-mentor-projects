import { ActionLink } from '../components/ActionLink'
import { Footer } from '../components/Footer'

function ArtPicture({ name, className }: { name: string; className: string }) {
  return (
    <picture className={className}>
      <source media="(max-width: 40rem)" srcSet={`/assets/mobile/${name}.jpg 1x, /assets/mobile/${name}@2x.jpg 2x`} />
      <source media="(max-width: 64rem)" srcSet={`/assets/tablet/${name}.jpg 1x, /assets/tablet/${name}@2x.jpg 2x`} />
      <img src={`/assets/desktop/${name}.jpg`} srcSet={`/assets/desktop/${name}@2x.jpg 2x`} alt="" />
    </picture>
  )
}

export function HomePage() {
  return (
    <>
      <main id="main-content">
        <section className="gallery-hero" aria-labelledby="hero-title">
          <div className="gallery-hero__black" />
          <ArtPicture name="image-hero" className="gallery-hero__image" />
          <h1 id="hero-title">
            <span>Modern</span>{' '}
            <span>Art Gallery</span>
          </h1>
          <div className="gallery-hero__copy">
            <p>The arts in the collection of the Modern Art Gallery all started from a spark of inspiration. Will these pieces inspire you? Visit us and find out.</p>
            <ActionLink to="/location" direction="right">Our location</ActionLink>
          </div>
        </section>

        <section className="gallery-grid" aria-labelledby="gallery-title">
          <div className="gallery-grid__intro">
            <h2 id="gallery-title">Your day at the gallery</h2>
            <p>Wander through our distinct collections and find new insights about our artists. Dive into the details of their creative process.</p>
          </div>
          <ArtPicture name="image-grid-1" className="gallery-grid__one" />
          <ArtPicture name="image-grid-2" className="gallery-grid__two" />
          <ArtPicture name="image-grid-3" className="gallery-grid__three" />
          <div className="gallery-grid__inspired">
            <h2>Come &amp; be inspired</h2>
            <p>We’re excited to welcome you to our gallery and see how our collections influence you.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
