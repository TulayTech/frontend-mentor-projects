import { ActionLink } from '../components/ActionLink'
import { Footer } from '../components/Footer'

export function LocationPage() {
  return (
    <>
      <main id="main-content">
        <section className="map" aria-label="Map showing the gallery at 99 King Street in Newport">
          <picture>
            <source media="(max-width: 40rem)" srcSet="/assets/mobile/image-map.png 1x, /assets/mobile/image-map@2x.png 2x" />
            <source media="(max-width: 64rem)" srcSet="/assets/tablet/image-map.png 1x, /assets/tablet/image-map@2x.png 2x" />
            <img src="/assets/desktop/image-map.png" srcSet="/assets/desktop/image-map@2x.png 2x" alt="Street map centered on the Modern Art Gallery" />
          </picture>
          <div className="map__link"><ActionLink to="/" direction="left">Back to home</ActionLink></div>
        </section>

        <section className="location-details" aria-labelledby="location-title">
          <div className="location-details__inner">
            <h1 id="location-title">Our location</h1>
            <div>
              <h2>99 King Street</h2>
              <address>Newport<br />RI 02840<br />United States of America</address>
              <p>Our newly opened gallery is located near the Edward King House on 99 King Street, the Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer light />
    </>
  )
}
