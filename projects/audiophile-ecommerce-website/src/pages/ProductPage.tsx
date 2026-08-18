import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { About } from '../components/About'
import { CategoryNav } from '../components/CategoryNav'
import { Layout } from '../components/Layout'
import { ProductPicture } from '../components/ProductPicture'
import { QuantityControl } from '../components/QuantityControl'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../context/cartMath'
import { productBySlug } from '../data/catalog'

export function ProductPage() {
  const { slug } = useParams()
  const product = productBySlug(slug)
  const navigate = useNavigate()
  const { addItem } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [announcement, setAnnouncement] = useState('')

  if (!product) {
    return (
      <Layout>
        <section className="not-found shell">
          <h1>Product not found</h1>
          <Link className="button button--primary" to="/">
            Return home
          </Link>
        </section>
      </Layout>
    )
  }

  const addToCart = () => {
    addItem(product.id, quantity)
    setAnnouncement(`${quantity} ${product.name} added to cart`)
  }

  return (
    <Layout>
      <article className="product-detail shell">
        <button type="button" className="back-button" onClick={() => navigate(-1)}>
          Go back
        </button>
        <div className="product-detail__hero">
          <ProductPicture image={product.image} alt={product.name} />
          <div>
            {product.new && <p className="eyebrow eyebrow--orange">New product</p>}
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <strong className="price">{formatPrice(product.price)}</strong>
            <div className="add-row">
              <QuantityControl
                value={quantity}
                label={`${product.name} quantity`}
                onChange={(value) => setQuantity(Math.max(1, value))}
              />
              <button type="button" className="button button--primary" onClick={addToCart}>
                Add to cart
              </button>
            </div>
            <p className="sr-only" role="status">
              {announcement}
            </p>
          </div>
        </div>
        <div className="product-detail__info">
          <section>
            <h2>Features</h2>
            {product.features.split('\n\n').map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
          <section className="included">
            <h2>In the box</h2>
            <ul>
              {product.includes.map((item) => (
                <li key={item.item}>
                  <strong>{item.quantity}x</strong>
                  <span>{item.item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <div className="gallery">
          <ProductPicture image={product.gallery.first} alt={`${product.name} detail`} />
          <ProductPicture image={product.gallery.second} alt={`${product.name} in use`} />
          <ProductPicture image={product.gallery.third} alt={`${product.name} product view`} />
        </div>
        <section className="related" aria-labelledby="related-title">
          <h2 id="related-title">You may also like</h2>
          <div>
            {product.others.map((other) => (
              <article key={other.slug}>
                <ProductPicture image={other.image} alt={other.name} />
                <h3>{other.name}</h3>
                <Link className="button button--primary" to={`/product/${other.slug}`}>
                  See product
                </Link>
              </article>
            ))}
          </div>
        </section>
      </article>
      <CategoryNav />
      <About />
    </Layout>
  )
}
