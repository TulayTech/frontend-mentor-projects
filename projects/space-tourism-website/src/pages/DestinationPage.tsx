import { NavLink, useParams } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { PageHeading } from '../components/PageHeading'
import { destinations } from '../data/content'

export function DestinationPage() {
  const { slug } = useParams()
  const destination = destinations.find((item) => item.slug === slug) ?? destinations[0]
  return (
    <Layout page="destination">
      <div className="inner-page shell">
        <PageHeading number="01">Pick your destination</PageHeading>
        <section className="destination-layout" aria-live="polite">
          <img className="destination-image" src={`/assets/destination/image-${destination.image}.webp`} alt={`The ${destination.name}`} />
          <div className="destination-copy">
            <nav className="selector selector--text" aria-label="Destinations">
              {destinations.map((item) => <NavLink key={item.slug} to={`/destination/${item.slug}`}>{item.name}</NavLink>)}
            </nav>
            <h2>{destination.name}</h2>
            <p className="body-copy">{destination.description}</p>
            <dl className="travel-stats">
              <div><dt>Avg. distance</dt><dd>{destination.distance}</dd></div>
              <div><dt>Est. travel time</dt><dd>{destination.travel}</dd></div>
            </dl>
          </div>
        </section>
      </div>
    </Layout>
  )
}
