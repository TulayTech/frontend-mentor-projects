import { Layout } from '../components/Layout'

const locations = [
  ['illustration-uk.svg', 'United Kingdom', ['68 Asfordby Rd', 'Alcaston', 'SY6 1YA', '+44 1241 918425']],
  ['illustration-canada.svg', 'Canada', ['1528 Eglinton Avenue', 'Toronto', 'Ontario M4P 1A6', '+1 416 485 2997']],
  ['illustration-australia.svg', 'Australia', ['36 Swanston Street', 'Kewell', 'Victoria', '+61 4 9928 3629']],
]

export function AboutPage() {
  return (
    <Layout>
      <section className="about-hero shell" aria-labelledby="about-title"><div><h1 id="about-title">About us</h1><p>Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bringing the perfect cup—from bean to brew—in every shipment.</p></div></section>
      <section className="commitment shell" aria-labelledby="commitment-title">
        <picture><source media="(max-width: 40rem)" srcSet="/assets/about/mobile/image-commitment.jpg" /><source media="(max-width: 64rem)" srcSet="/assets/about/tablet/image-commitment.jpg" /><img src="/assets/about/desktop/image-commitment.jpg" alt="A barista selecting roasted coffee beans" /></picture>
        <div><h2 id="commitment-title">Our commitment</h2><p>We’re built on a simple mission and a commitment to doing good along the way. We make it easy to discover and brew the world’s best coffee at home. We travel to understand the challenges and opportunities at the source, collaborate with exceptional growers, and invest in their communities. Curating only the finest blends, we roast each lot to highlight tasting profiles distinctive to its native region.</p></div>
      </section>
      <section className="quality shell" aria-labelledby="quality-title">
        <picture><source media="(max-width: 40rem)" srcSet="/assets/about/mobile/image-quality.jpg" /><source media="(max-width: 64rem)" srcSet="/assets/about/tablet/image-quality.jpg" /><img src="/assets/about/desktop/image-quality.jpg" alt="A carefully prepared cup of coffee" /></picture>
        <div><h2 id="quality-title">Uncompromising quality</h2><p>We work with growers who pay close attention to every stage of harvest and processing, then use a rigorous quality-control program to avoid over-roasting or baking coffee dry. Every bag is tagged with a roast date and batch number, making brewing easy and enjoyable.</p></div>
      </section>
      <section className="headquarters shell" aria-labelledby="headquarters-title"><h2 id="headquarters-title">Our headquarters</h2><div>{locations.map(([icon, country, address]) => <article key={country as string}><img src={`/assets/about/desktop/${icon}`} alt="" /><h3>{country}</h3><address>{(address as string[]).map((line) => <span key={line}>{line}</span>)}</address></article>)}</div></section>
    </Layout>
  )
}
