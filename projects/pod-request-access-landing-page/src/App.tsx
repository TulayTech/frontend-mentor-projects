import { AccessForm } from './components/AccessForm'

const platforms = [
  { name: 'Spotify', src: '/assets/desktop/spotify.svg' },
  { name: 'Apple Podcasts', src: '/assets/desktop/apple-podcast.svg' },
  { name: 'Google Podcasts', src: '/assets/desktop/google-podcasts.svg' },
  { name: 'Pocket Casts', src: '/assets/desktop/pocket-casts.svg' },
]

function App() {
  return (
    <main className="pod-page">
      <picture className="pod-page__host" aria-hidden="true">
        <source media="(max-width: 41.99rem)" srcSet="/assets/mobile/image-host.jpg" />
        <source media="(max-width: 63.99rem)" srcSet="/assets/tablet/image-host.jpg" />
        <img src="/assets/desktop/image-host.jpg" alt="" />
      </picture>

      <div className="pod-page__layout">
        <header className="site-header">
          <img src="/assets/desktop/logo.svg" alt="Pod" width="135" height="56" />
        </header>

        <section className="access-panel" aria-labelledby="access-title">
          <div className="access-panel__copy">
            <h1 id="access-title">
              Publish your podcasts <span>everywhere.</span>
            </h1>
            <p>
              Upload your audio to Pod with a single click. We’ll then distribute your podcast to
              Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and more!
            </p>
          </div>

          <AccessForm />

          <ul className="platform-list" aria-label="Available podcast platforms">
            {platforms.map((platform) => (
              <li key={platform.name}>
                <img src={platform.src} alt={platform.name} />
              </li>
            ))}
          </ul>
        </section>
      </div>

      <img
        className="pod-page__dots"
        src="/assets/desktop/bg-pattern-dots.svg"
        alt=""
        aria-hidden="true"
      />
    </main>
  )
}

export default App
