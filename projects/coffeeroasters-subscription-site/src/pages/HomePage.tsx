import { CtaLink } from '../components/CtaLink'
import { Layout } from '../components/Layout'
import { Steps } from '../components/Steps'

const coffees = [
  ['gran-espresso', 'Gran Espresso', 'Light and flavorful blend with cocoa and black pepper for an intense experience'],
  ['planalto', 'Planalto', 'Brazilian dark roast with rich and velvety body, and hints of fruits and nuts'],
  ['piccollo', 'Piccollo', 'Mild and smooth blend featuring notes of toasted almond and dried cherry'],
  ['danche', 'Danche', 'Ethiopian hand-harvested blend densely packed with vibrant fruit notes'],
]

const benefits = [
  ['icon-coffee-bean.svg', 'Best quality', 'Discover an endless variety of the world’s best artisan coffee from each of our roasters.'],
  ['icon-gift.svg', 'Exclusive benefits', 'Special offers and swag when you subscribe, including 30% off your first shipment.'],
  ['icon-truck.svg', 'Free shipping', 'We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.'],
]

export function HomePage() {
  return (
    <Layout>
      <section className="home-hero shell" aria-labelledby="home-title">
        <div><h1 id="home-title">Great coffee made simple.</h1><p>Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees delivered directly to your door, at your schedule.</p><CtaLink /></div>
      </section>
      <section className="collection shell" aria-labelledby="collection-title">
        <h2 id="collection-title">Our collection</h2>
        <div>{coffees.map(([image, name, copy]) => <article key={name}><img src={`/assets/home/desktop/image-${image}.png`} alt="" /><div><h3>{name}</h3><p>{copy}</p></div></article>)}</div>
      </section>
      <section className="benefits shell" aria-labelledby="benefits-title">
        <div className="benefits__intro"><h2 id="benefits-title">Why choose us?</h2><p>A large part of our role is choosing which particular coffees will be featured in our range. We work closely with the best coffee growers to give you a more impactful experience.</p></div>
        <div className="benefits__grid">{benefits.map(([icon, title, copy]) => <article key={title}><img src={`/assets/home/desktop/${icon}`} alt="" /><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </section>
      <div className="home-steps shell"><Steps /></div>
    </Layout>
  )
}
