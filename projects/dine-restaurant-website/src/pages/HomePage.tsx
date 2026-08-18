import { ButtonLink } from '../components/ButtonLink'
import { Events } from '../components/Events'
import { FeatureSection } from '../components/FeatureSection'
import { Footer } from '../components/Footer'
import { Logo } from '../components/Logo'
import { MenuHighlights } from '../components/MenuHighlights'
import { PageMeta } from '../components/PageMeta'

export function HomePage() {
  return (
    <>
      <PageMeta
        title="Dine | Seasonal farmhouse dining"
        description="Experience Dine’s seasonal menu and the freshest locally sourced produce in beautiful country surroundings."
      />
      <main id="main-content">
        <section className="home-hero" aria-labelledby="home-title">
          <div className="container home-hero__inner">
            <Logo linked={false} />
            <div className="home-hero__copy">
              <h1 id="home-title">Exquisite dining since 1989</h1>
              <p>
                Experience our seasonal menu in beautiful country surroundings. Eat the freshest
                produce from the comfort of our farmhouse.
              </p>
              <ButtonLink>Book a table</ButtonLink>
            </div>
          </div>
        </section>

        <div className="features" aria-label="About Dine">
          <div className="container features__inner">
            <FeatureSection
              title="Enjoyable place for all the family"
              description="Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal."
              imageName="enjoyable-place"
              imageAlt="A country valley and farmhouse surrounded by autumn trees"
            />
            <FeatureSection
              title="The most locally sourced food"
              description="All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food."
              imageName="locally-sourced"
              imageAlt="A chef plating a dish with locally sourced ingredients"
              reversed
            />
          </div>
        </div>

        <MenuHighlights />
        <Events />

        <section className="reservation-cta" aria-labelledby="reservation-cta-title">
          <div className="container reservation-cta__inner">
            <h2 id="reservation-cta-title">Ready to make a reservation?</h2>
            <ButtonLink>Book a table</ButtonLink>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
