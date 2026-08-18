import { NavLink, useParams } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { PageHeading } from '../components/PageHeading'
import { crew } from '../data/content'

export function CrewPage() {
  const { slug } = useParams()
  const member = crew.find((item) => item.slug === slug) ?? crew[0]
  return (
    <Layout page="crew">
      <div className="inner-page shell crew-page">
        <PageHeading number="02">Meet your crew</PageHeading>
        <section className="crew-layout" aria-live="polite">
          <div className="crew-copy">
            <p className="crew-role">{member.role}</p>
            <h2>{member.name}</h2>
            <p className="body-copy">{member.bio}</p>
            <nav className="selector selector--dots" aria-label="Crew members">
              {crew.map((item) => <NavLink key={item.slug} to={`/crew/${item.slug}`}><span className="sr-only">{item.name}</span></NavLink>)}
            </nav>
          </div>
          <div className="crew-image-wrap">
            <img src={`/assets/crew/image-${member.image}.webp`} alt={member.name} />
          </div>
        </section>
      </div>
    </Layout>
  )
}
