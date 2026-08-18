import { Link } from 'react-router-dom'
import { PageMeta } from '../components/PageMeta'

export function NotFoundPage() {
  return (
    <main id="main-content" className="not-found">
      <PageMeta title="Page not found | Dine" description="The requested Dine page was not found." />
      <p className="not-found__eyebrow">404</p>
      <h1>This table isn’t available.</h1>
      <p>The page you requested could not be found.</p>
      <Link className="button button--dark" to="/">
        Return home
      </Link>
    </main>
  )
}
