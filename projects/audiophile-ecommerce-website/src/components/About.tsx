export function About() {
  return (
    <section className="about shell" aria-labelledby="about-title">
      <picture>
        <source
          media="(max-width: 40rem)"
          srcSet="/assets/shared/mobile/image-best-gear.jpg"
        />
        <source
          media="(max-width: 64rem)"
          srcSet="/assets/shared/tablet/image-best-gear.jpg"
        />
        <img
          src="/assets/shared/desktop/image-best-gear.jpg"
          alt="A customer enjoying premium headphones"
        />
      </picture>
      <div>
        <h2 id="about-title">
          Bringing you the <em>best</em> audio gear
        </h2>
        <p>
          Located at the heart of New York City, Audiophile is the premier store for
          high-end headphones, earphones, speakers, and audio accessories. We have a
          large showroom and luxury demonstration rooms available for you to browse
          and experience a wide range of our products.
        </p>
      </div>
    </section>
  )
}
