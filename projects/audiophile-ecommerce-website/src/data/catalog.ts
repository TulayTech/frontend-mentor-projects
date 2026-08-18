import productsJson from './products.json'
import type { Category, Product, ResponsiveImage } from './types'

export const products = productsJson as Product[]

export const assetPath = (path: string) => path.replace('./', '/')

export const productBySlug = (slug?: string) =>
  products.find((product) => product.slug === slug)

export const productsByCategory = (category: Category) =>
  products.filter((product) => product.category === category).reverse()

export const pictureSources = (image: ResponsiveImage) => ({
  mobile: assetPath(image.mobile),
  tablet: assetPath(image.tablet),
  desktop: assetPath(image.desktop),
})

export const compactName = (name: string) =>
  name
    .replace('Headphones', '')
    .replace('Wireless Earphones', '')
    .replace('Speaker', '')
    .trim()
