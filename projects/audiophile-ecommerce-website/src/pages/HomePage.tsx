import { Link } from 'react-router-dom'
import { About } from '../components/About'
import { CategoryNav } from '../components/CategoryNav'
import { Layout } from '../components/Layout'

export function HomePage() {
  return (
    <Layout>
      <section className="hero">
        <div className="shell hero__content">
          <p className="eyebrow">New product</p>
          <h1>XX99 Mark II Headphones</h1>
          <p>
            Experience natural, lifelike audio and exceptional build quality made for
            the passionate music enthusiast.
          </p>
          <Link className="button button--primary" to="/product/xx99-mark-two-headphones">
            See product
          </Link>
        </div>
      </section>
      <CategoryNav />
      <section className="featured shell" aria-label="Featured products">
        <article className="featured-zx9">
          <picture>
            <source
              media="(max-width: 40rem)"
              srcSet="/assets/home/mobile/image-speaker-zx9.png"
            />
            <source
              media="(max-width: 64rem)"
              srcSet="/assets/home/tablet/image-speaker-zx9.png"
            />
            <img src="/assets/home/desktop/image-speaker-zx9.png" alt="ZX9 speaker" />
          </picture>
          <div>
            <h2>ZX9 Speaker</h2>
            <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
            <Link className="button button--dark" to="/product/zx9-speaker">
              See product
            </Link>
          </div>
        </article>
        <article className="featured-zx7">
          <h2>ZX7 Speaker</h2>
          <Link className="button button--outline" to="/product/zx7-speaker">
            See product
          </Link>
        </article>
        <article className="featured-yx1">
          <picture>
            <source
              media="(max-width: 40rem)"
              srcSet="/assets/home/mobile/image-earphones-yx1.jpg"
            />
            <source
              media="(max-width: 64rem)"
              srcSet="/assets/home/tablet/image-earphones-yx1.jpg"
            />
            <img src="/assets/home/desktop/image-earphones-yx1.jpg" alt="YX1 earphones" />
          </picture>
          <div>
            <h2>YX1 Earphones</h2>
            <Link className="button button--outline" to="/product/yx1-earphones">
              See product
            </Link>
          </div>
        </article>
      </section>
      <About />
    </Layout>
  )
}
