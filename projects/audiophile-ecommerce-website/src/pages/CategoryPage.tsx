import { Link, useParams } from 'react-router-dom'
import { About } from '../components/About'
import { CategoryNav } from '../components/CategoryNav'
import { Layout } from '../components/Layout'
import { ProductPicture } from '../components/ProductPicture'
import { productsByCategory } from '../data/catalog'
import type { Category } from '../data/types'

const categories: Category[] = ['headphones', 'speakers', 'earphones']

export function CategoryPage() {
  const { category } = useParams()
  const validCategory = categories.find((item) => item === category)

  if (!validCategory) {
    return (
      <Layout>
        <section className="not-found shell">
          <h1>Category not found</h1>
          <Link className="button button--primary" to="/">
            Return home
          </Link>
        </section>
      </Layout>
    )
  }

  const categoryProducts = productsByCategory(validCategory)

  return (
    <Layout>
      <header className="page-heading">
        <h1>{validCategory}</h1>
      </header>
      <section className="product-list shell" aria-label={`${validCategory} products`}>
        {categoryProducts.map((product) => (
          <article className="product-row" key={product.id}>
            <ProductPicture
              image={product.categoryImage}
              alt={product.name}
              className="product-row__image"
            />
            <div className="product-row__copy">
              {product.new && <p className="eyebrow eyebrow--orange">New product</p>}
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <Link className="button button--primary" to={`/product/${product.slug}`}>
                See product
              </Link>
            </div>
          </article>
        ))}
      </section>
      <CategoryNav />
      <About />
    </Layout>
  )
}
