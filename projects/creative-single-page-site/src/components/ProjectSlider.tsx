import { KeyboardEvent, useState } from 'react'

const slides = [
  { title: 'Brand naming & guidelines', project: 'Lean Product Roadmap', year: '2019 project' },
  { title: 'Brand identity & merchandise', project: 'New Majestic Hotel', year: '2018 project' },
  { title: 'Brand identity & web design', project: 'Crypto Dashboard', year: '2016 project' },
]

export function ProjectSlider() {
  const [active, setActive] = useState(0)
  const slide = slides[active]

  const previous = () => setActive((current) => (current - 1 + slides.length) % slides.length)
  const next = () => setActive((current) => (current + 1) % slides.length)
  const keydown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'ArrowLeft') previous()
    if (event.key === 'ArrowRight') next()
  }

  return (
    <section
      className="project-slider"
      id="projects"
      aria-labelledby="project-title"
      aria-roledescription="carousel"
      tabIndex={0}
      onKeyDown={keydown}
    >
      <picture className="project-slider__image">
        <source media="(max-width: 40rem)" srcSet={`/assets/mobile/image-slide-${active + 1}.jpg`} />
        <source media="(max-width: 64rem)" srcSet={`/assets/tablet/image-slide-${active + 1}.jpg`} />
        <img src={`/assets/desktop/image-slide-${active + 1}.jpg`} alt="" />
      </picture>
      <p className="project-slider__caption" aria-live="polite">
        <strong>{slide.title}</strong>
        <span>{slide.project}</span>
        <span>{slide.year}</span>
      </p>
      <div className="project-slider__panel">
        <img className="project-slider__wave" src="/assets/desktop/bg-pattern-wavy-white.svg" alt="" />
        <h2 id="project-title">{slide.project}</h2>
        <div className="project-slider__controls">
          <button type="button" aria-label="Previous project" onClick={previous}>
            <img src="/assets/desktop/icon-arrow-previous.svg" alt="" />
          </button>
          <button type="button" aria-label="Next project" onClick={next}>
            <img src="/assets/desktop/icon-arrow-next.svg" alt="" />
          </button>
        </div>
      </div>
    </section>
  )
}
