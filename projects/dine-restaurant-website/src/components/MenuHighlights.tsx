import { menuHighlights } from '../data/content'
import { Divider } from './Divider'

export function MenuHighlights() {
  return (
    <section className="highlights" aria-labelledby="highlights-title">
      <div className="container highlights__inner">
        <div className="highlights__intro">
          <Divider />
          <h2 id="highlights-title">A few highlights from our menu</h2>
          <p>
            We cater for all dietary requirements, but here’s a glimpse at some of our diner’s
            favourites. Our menu is revamped every season.
          </p>
        </div>
        <ul className="highlights__list">
          {menuHighlights.map((item) => (
            <li className="dish" key={item.name}>
              <picture className="dish__picture">
                <source
                  media="(min-width: 40rem)"
                  srcSet={`/images/homepage/${item.imageName}-desktop-tablet.jpg 1x, /images/homepage/${item.imageName}-desktop-tablet@2x.jpg 2x`}
                />
                <img
                  src={`/images/homepage/${item.imageName}-mobile.jpg`}
                  srcSet={`/images/homepage/${item.imageName}-mobile@2x.jpg 2x`}
                  alt=""
                  width="327"
                  height="245"
                  loading="lazy"
                />
              </picture>
              <div className="dish__copy">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
