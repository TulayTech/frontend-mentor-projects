import { pictureSources } from '../data/catalog'
import type { ResponsiveImage } from '../data/types'

export function ProductPicture({
  image,
  alt,
  className,
}: {
  image: ResponsiveImage
  alt: string
  className?: string
}) {
  const sources = pictureSources(image)
  return (
    <picture className={className}>
      <source media="(max-width: 40rem)" srcSet={sources.mobile} />
      <source media="(max-width: 64rem)" srcSet={sources.tablet} />
      <img src={sources.desktop} alt={alt} />
    </picture>
  )
}
