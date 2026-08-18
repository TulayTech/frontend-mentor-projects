export type Category = 'headphones' | 'speakers' | 'earphones'

export interface ResponsiveImage {
  mobile: string
  tablet: string
  desktop: string
}

export interface IncludedItem {
  quantity: number
  item: string
}

export interface RelatedProduct {
  slug: string
  name: string
  image: ResponsiveImage
}

export interface Product {
  id: number
  slug: string
  name: string
  image: ResponsiveImage
  category: Category
  categoryImage: ResponsiveImage
  new: boolean
  price: number
  description: string
  features: string
  includes: IncludedItem[]
  gallery: {
    first: ResponsiveImage
    second: ResponsiveImage
    third: ResponsiveImage
  }
  others: RelatedProduct[]
}

export interface CartItem {
  productId: number
  quantity: number
}
