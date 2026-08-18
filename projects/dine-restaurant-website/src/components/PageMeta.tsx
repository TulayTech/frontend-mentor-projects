import { useEffect } from 'react'

type PageMetaProps = {
  title: string
  description: string
}

export function PageMeta({ title, description }: PageMetaProps) {
  useEffect(() => {
    document.title = title
    const descriptionTag = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    descriptionTag?.setAttribute('content', description)
  }, [description, title])

  return null
}
