import { Link } from 'react-router-dom'
import { Layout } from '../components/Layout'

export function HomePage() {
  return (
    <Layout page="home">
      <section className="home-content shell" aria-labelledby="home-title">
        <div>
          <p className="eyebrow">So, you want to travel to</p>
          <h1 id="home-title">Space</h1>
          <p className="body-copy">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </div>
        <Link className="explore" to="/destination/moon">Explore</Link>
      </section>
    </Layout>
  )
}
