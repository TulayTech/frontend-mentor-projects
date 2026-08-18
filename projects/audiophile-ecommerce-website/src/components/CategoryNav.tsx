import { Link } from 'react-router-dom'
import type { Category } from '../data/types'

const categories: { name: Category; image: string }[] = [
  {
    name: 'headphones',
    image: '/assets/shared/desktop/image-category-thumbnail-headphones.png',
  },
  {
    name: 'speakers',
    image: '/assets/shared/desktop/image-category-thumbnail-speakers.png',
  },
  {
    name: 'earphones',
    image: '/assets/shared/desktop/image-category-thumbnail-earphones.png',
  },
]

export function CategoryNav({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <nav className="category-nav shell" aria-label="Product categories">
      {categories.map((category) => (
        <Link key={category.name} to={`/category/${category.name}`} onClick={onNavigate}>
          <img src={category.image} alt="" />
          <strong>{category.name}</strong>
          <span>
            Shop <img src="/assets/shared/desktop/icon-arrow-right.svg" alt="" />
          </span>
        </Link>
      ))}
    </nav>
  )
}
