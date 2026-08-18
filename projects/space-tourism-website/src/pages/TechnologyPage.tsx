import { NavLink, useParams } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { PageHeading } from '../components/PageHeading'
import { technologies } from '../data/content'

export function TechnologyPage() {
  const { slug } = useParams()
  const technology = technologies.find((item) => item.slug === slug) ?? technologies[0]
  return (
    <Layout page="technology">
      <div className="technology-page">
        <div className="shell"><PageHeading number="03">Space launch 101</PageHeading></div>
        <section className="technology-layout" aria-live="polite">
          <nav className="selector selector--numbers" aria-label="Technology">
            {technologies.map((item, index) => <NavLink key={item.slug} to={`/technology/${item.slug}`}><span className="sr-only">{item.name}</span>{index + 1}</NavLink>)}
          </nav>
          <div className="technology-copy">
            <p>The terminology…</p>
            <h2>{technology.name}</h2>
            <p className="body-copy">{technology.description}</p>
          </div>
          <picture className="technology-image">
            <source media="(max-width: 64rem)" srcSet={`/assets/technology/image-${technology.image}-landscape.jpg`} />
            <img src={`/assets/technology/image-${technology.image}-portrait.jpg`} alt={technology.name} />
          </picture>
        </section>
      </div>
    </Layout>
  )
}
