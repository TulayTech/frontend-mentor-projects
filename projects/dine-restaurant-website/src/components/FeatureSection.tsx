import { Divider } from './Divider'

type FeatureSectionProps = {
  title: string
  description: string
  imageName: 'enjoyable-place' | 'locally-sourced'
  imageAlt: string
  reversed?: boolean
}

export function FeatureSection({
  title,
  description,
  imageName,
  imageAlt,
  reversed = false,
}: FeatureSectionProps) {
  return (
    <section className={`feature ${reversed ? 'feature--reversed' : ''}`.trim()}>
      <div className="feature__image-wrap">
        <picture>
          <source
            media="(min-width: 64rem)"
            srcSet={`/images/homepage/${imageName}-desktop.jpg 1x, /images/homepage/${imageName}-desktop@2x.jpg 2x`}
          />
          <source
            media="(min-width: 40rem)"
            srcSet={`/images/homepage/${imageName}-tablet.jpg 1x, /images/homepage/${imageName}-tablet@2x.jpg 2x`}
          />
          <img
            className="feature__image"
            src={`/images/homepage/${imageName}-mobile.jpg`}
            srcSet={`/images/homepage/${imageName}-mobile@2x.jpg 2x`}
            alt={imageAlt}
            width="540"
            height="720"
            loading="lazy"
          />
        </picture>
      </div>
      <div className="feature__copy">
        <Divider />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </section>
  )
}
