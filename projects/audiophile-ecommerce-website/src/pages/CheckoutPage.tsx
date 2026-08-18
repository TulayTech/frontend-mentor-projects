import { useRef, useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { compactName, products } from '../data/catalog'
import { useCart } from '../context/CartContext'
import { formatPrice, orderTotals } from '../context/cartMath'

type Errors = Record<string, string>

const required = (value: string, message: string) => (value.trim() ? '' : message)

function validate(data: FormData) {
  const value = (name: string) => String(data.get(name) ?? '')
  const errors: Errors = {
    name: required(value('name'), 'Name is required'),
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value('email'))
      ? ''
      : 'Enter a valid email address',
    phone: /^\+?[0-9\s()-]{7,}$/.test(value('phone'))
      ? ''
      : 'Enter a valid phone number',
    address: required(value('address'), 'Address is required'),
    zip: required(value('zip'), 'ZIP code is required'),
    city: required(value('city'), 'City is required'),
    country: required(value('country'), 'Country is required'),
  }

  if (value('payment') === 'e-money') {
    errors.eMoneyNumber = /^\d{9}$/.test(value('eMoneyNumber'))
      ? ''
      : 'Enter a 9-digit e-Money number'
    errors.pin = /^\d{4}$/.test(value('pin')) ? '' : 'Enter a 4-digit PIN'
  }

  return Object.fromEntries(Object.entries(errors).filter(([, message]) => message))
}

function Field({
  id,
  label,
  error,
  ...props
}: {
  id: string
  label: string
  error?: string
  type?: string
  placeholder?: string
  inputMode?: 'email' | 'numeric' | 'tel' | 'text'
  autoComplete?: string
}) {
  return (
    <label className={`field ${error ? 'field--error' : ''}`} htmlFor={id}>
      <span>
        {label}
        {error && <small id={`${id}-error`}>{error}</small>}
      </span>
      <input
        id={id}
        name={id}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
      />
    </label>
  )
}

export function CheckoutPage() {
  const { items, clearCart } = useCart()
  const [payment, setPayment] = useState('e-money')
  const [errors, setErrors] = useState<Errors>({})
  const confirmationRef = useRef<HTMLDialogElement>(null)
  const navigate = useNavigate()
  const totals = orderTotals(items)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validate(new FormData(event.currentTarget))
    setErrors(nextErrors)

    const firstError = Object.keys(nextErrors)[0]
    if (firstError) {
      document.getElementById(firstError)?.focus()
      return
    }

    confirmationRef.current?.showModal()
  }

  const finishOrder = () => {
    confirmationRef.current?.close()
    clearCart()
    navigate('/')
  }

  if (!items.length) {
    return (
      <Layout>
        <section className="empty-checkout shell">
          <p className="eyebrow eyebrow--orange">Your cart is empty</p>
          <h1>Choose your next listening experience</h1>
          <p>Add a product before heading to checkout.</p>
          <Link className="button button--primary" to="/category/headphones">
            Shop headphones
          </Link>
        </section>
      </Layout>
    )
  }

  const firstItem = items[0]
  const firstProduct = products.find((product) => product.id === firstItem.productId)!

  return (
    <Layout>
      <div className="checkout-page">
        <div className="shell">
          <button type="button" className="back-button" onClick={() => navigate(-1)}>
            Go back
          </button>
          <form className="checkout-grid" noValidate onSubmit={handleSubmit}>
            <div className="checkout-form">
              <h1>Checkout</h1>
              <fieldset>
                <legend>Billing details</legend>
                <div className="field-grid">
                  <Field id="name" label="Name" placeholder="Alexei Ward" autoComplete="name" error={errors.name} />
                  <Field id="email" label="Email address" type="email" inputMode="email" placeholder="alexei@mail.com" autoComplete="email" error={errors.email} />
                  <Field id="phone" label="Phone number" type="tel" inputMode="tel" placeholder="+1 202-555-0136" autoComplete="tel" error={errors.phone} />
                </div>
              </fieldset>
              <fieldset>
                <legend>Shipping info</legend>
                <div className="field-grid">
                  <div className="field-span">
                    <Field id="address" label="Your address" placeholder="1137 Williams Avenue" autoComplete="street-address" error={errors.address} />
                  </div>
                  <Field id="zip" label="ZIP code" inputMode="numeric" placeholder="10001" autoComplete="postal-code" error={errors.zip} />
                  <Field id="city" label="City" placeholder="New York" autoComplete="address-level2" error={errors.city} />
                  <Field id="country" label="Country" placeholder="United States" autoComplete="country-name" error={errors.country} />
                </div>
              </fieldset>
              <fieldset>
                <legend>Payment details</legend>
                <div className="payment-choice">
                  <span>Payment method</span>
                  <label>
                    <input type="radio" name="payment" value="e-money" checked={payment === 'e-money'} onChange={() => setPayment('e-money')} />
                    e-Money
                  </label>
                  <label>
                    <input type="radio" name="payment" value="cash" checked={payment === 'cash'} onChange={() => setPayment('cash')} />
                    Cash on delivery
                  </label>
                </div>
                {payment === 'e-money' ? (
                  <div className="field-grid payment-fields">
                    <Field id="eMoneyNumber" label="e-Money number" inputMode="numeric" placeholder="238521993" error={errors.eMoneyNumber} />
                    <Field id="pin" label="e-Money PIN" inputMode="numeric" placeholder="6891" error={errors.pin} />
                  </div>
                ) : (
                  <div className="cash-note">
                    <img src="/assets/checkout/icon-cash-on-delivery.svg" alt="" />
                    <p>The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence.</p>
                  </div>
                )}
              </fieldset>
            </div>
            <aside className="order-summary" aria-labelledby="summary-title">
              <h2 id="summary-title">Summary</h2>
              <ul>
                {items.map((item) => {
                  const product = products.find((candidate) => candidate.id === item.productId)!
                  return (
                    <li key={item.productId}>
                      <img src={`/assets/cart/image-${product.slug}.jpg`} alt="" />
                      <div><strong>{compactName(product.name)}</strong><span>{formatPrice(product.price)}</span></div>
                      <span>x{item.quantity}</span>
                    </li>
                  )
                })}
              </ul>
              <dl>
                <div><dt>Total</dt><dd>{formatPrice(totals.subtotal)}</dd></div>
                <div><dt>Shipping</dt><dd>{formatPrice(totals.shipping)}</dd></div>
                <div><dt>VAT (included)</dt><dd>{formatPrice(totals.vat)}</dd></div>
                <div className="grand-total"><dt>Grand total</dt><dd>{formatPrice(totals.grandTotal)}</dd></div>
              </dl>
              <button className="button button--primary button--wide" type="submit">Continue & pay</button>
            </aside>
          </form>
        </div>
      </div>
      <dialog ref={confirmationRef} className="confirmation" aria-labelledby="confirmation-title">
        <img src="/assets/checkout/icon-order-confirmation.svg" alt="" />
        <h2 id="confirmation-title">Thank you for your order</h2>
        <p>You will receive an email confirmation shortly.</p>
        <div className="confirmation__summary">
          <div>
            <img src={`/assets/cart/image-${firstProduct.slug}.jpg`} alt="" />
            <span><strong>{compactName(firstProduct.name)}</strong><small>{formatPrice(firstProduct.price)}</small></span>
            <span>x{firstItem.quantity}</span>
            {items.length > 1 && <p>and {items.length - 1} other item{items.length > 2 ? 's' : ''}</p>}
          </div>
          <div><span>Grand total</span><strong>{formatPrice(totals.grandTotal)}</strong></div>
        </div>
        <button type="button" className="button button--primary button--wide" onClick={finishOrder}>Back to home</button>
      </dialog>
    </Layout>
  )
}
