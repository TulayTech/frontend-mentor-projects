import { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import { compactName, products } from '../data/catalog'
import { cartCount, cartSubtotal, formatPrice } from '../context/cartMath'
import { useCart } from '../context/CartContext'
import { QuantityControl } from './QuantityControl'

export const CartPanel = forwardRef<
  HTMLDialogElement,
  { onClose: () => void }
>(function CartPanel({ onClose }, ref) {
  const { items, setQuantity, clearCart } = useCart()
  const count = cartCount(items)

  return (
    <dialog ref={ref} className="cart-dialog" aria-labelledby="cart-title">
      <div className="cart-dialog__top">
        <h2 id="cart-title">Cart ({count})</h2>
        {items.length > 0 && (
          <button type="button" className="text-button" onClick={clearCart}>
            Remove all
          </button>
        )}
        <button type="button" className="dialog-close" onClick={onClose}>
          <span aria-hidden="true">×</span>
          <span className="sr-only">Close cart</span>
        </button>
      </div>
      {items.length ? (
        <>
          <ul className="cart-items">
            {items.map((item) => {
              const product = products.find((candidate) => candidate.id === item.productId)
              if (!product) return null
              return (
                <li key={item.productId}>
                  <img
                    src={`/assets/cart/image-${product.slug}.jpg`}
                    alt=""
                  />
                  <div>
                    <strong>{compactName(product.name)}</strong>
                    <span>{formatPrice(product.price)}</span>
                  </div>
                  <QuantityControl
                    value={item.quantity}
                    label={product.name}
                    onChange={(quantity) => setQuantity(product.id, quantity)}
                  />
                </li>
              )
            })}
          </ul>
          <div className="cart-total">
            <span>Total</span>
            <strong>{formatPrice(cartSubtotal(items))}</strong>
          </div>
          <Link className="button button--primary button--wide" to="/checkout" onClick={onClose}>
            Checkout
          </Link>
        </>
      ) : (
        <div className="empty-cart">
          <p>Your cart is ready for something exceptional.</p>
          <Link to="/category/headphones" className="button button--primary" onClick={onClose}>
            Shop headphones
          </Link>
        </div>
      )}
    </dialog>
  )
})
