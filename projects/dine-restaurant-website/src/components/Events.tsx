import { useRef, useState } from 'react'
import { events, type EventKey } from '../data/content'
import { ButtonLink } from './ButtonLink'

export function Events() {
  const [activeId, setActiveId] = useState<EventKey>('family')
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])
  const activeEvent = events.find((event) => event.id === activeId) ?? events[0]

  const selectTab = (index: number) => {
    const event = events[index]
    setActiveId(event.id)
    tabRefs.current[index]?.focus()
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      event.preventDefault()
      selectTab((index + 1) % events.length)
    }

    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      event.preventDefault()
      selectTab((index - 1 + events.length) % events.length)
    }

    if (event.key === 'Home') {
      event.preventDefault()
      selectTab(0)
    }

    if (event.key === 'End') {
      event.preventDefault()
      selectTab(events.length - 1)
    }
  }

  return (
    <section className="events" aria-labelledby="events-heading">
      <div className="container events__inner">
        <div className="events__visual">
          <picture key={activeEvent.id}>
            <source
              media="(min-width: 64rem)"
              srcSet={`/images/homepage/${activeEvent.imageName}-desktop.jpg 1x, /images/homepage/${activeEvent.imageName}-desktop@2x.jpg 2x`}
            />
            <source
              media="(min-width: 40rem)"
              srcSet={`/images/homepage/${activeEvent.imageName}-tablet.jpg 1x, /images/homepage/${activeEvent.imageName}-tablet@2x.jpg 2x`}
            />
            <img
              src={`/images/homepage/${activeEvent.imageName}-mobile.jpg`}
              srcSet={`/images/homepage/${activeEvent.imageName}-mobile@2x.jpg 2x`}
              alt={activeEvent.imageAlt}
              width="540"
              height="600"
              loading="lazy"
            />
          </picture>
        </div>

        <div className="events__content">
          <div className="events__tabs" role="tablist" aria-label="Dining event types">
            {events.map((item, index) => (
              <button
                key={item.id}
                ref={(node) => {
                  tabRefs.current[index] = node
                }}
                className="events__tab"
                type="button"
                role="tab"
                id={`event-tab-${item.id}`}
                aria-selected={item.id === activeId}
                aria-controls={`event-panel-${item.id}`}
                tabIndex={item.id === activeId ? 0 : -1}
                onClick={() => setActiveId(item.id)}
                onKeyDown={(keyboardEvent) => handleKeyDown(keyboardEvent, index)}
              >
                {item.tabLabel}
              </button>
            ))}
          </div>

          <div
            className="events__panel"
            role="tabpanel"
            id={`event-panel-${activeEvent.id}`}
            aria-labelledby={`event-tab-${activeEvent.id}`}
            tabIndex={0}
          >
            <h2 id="events-heading">{activeEvent.heading}</h2>
            <p>{activeEvent.description}</p>
            <ButtonLink variant="dark">Book a table</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
