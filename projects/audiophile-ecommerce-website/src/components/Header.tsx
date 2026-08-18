import { useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { cartCount } from '../context/cartMath'
import { useCart } from '../context/CartContext'
import { CartPanel } from './CartPanel'
import { CategoryNav } from './CategoryNav'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Headphones', to: '/category/headphones' },
  { label: 'Speakers', to: '/category/speakers' },
  { label: 'Earphones', to: '/category/earphones' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const { items } = useCart()
  const count = cartCount(items)

  const openCart = () => dialogRef.current?.showModal()
  const closeCart = () => dialogRef.current?.close()

  return (
    <header className="site-header">
      <div className="header-row shell">
        <button
          type="button"
          className="menu-button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <img src="/assets/shared/tablet/icon-hamburger.svg" alt="" />
          <span className="sr-only">Menu</span>
        </button>
        <Link to="/" className="header-logo" aria-label="Audiophile home">
          <img src="/assets/shared/desktop/logo.svg" alt="Audiophile" />
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <button type="button" className="cart-button" aria-label="Open cart" onClick={openCart}>
          <img src="/assets/shared/desktop/icon-cart.svg" alt="" />
          <span className="sr-only">Open cart</span>
          {count > 0 && <span className="cart-badge" aria-hidden="true">{count}</span>}
        </button>
      </div>
      {menuOpen && (
        <div id="mobile-navigation" className="mobile-nav-panel">
          <CategoryNav onNavigate={() => setMenuOpen(false)} />
        </div>
      )}
      <CartPanel ref={dialogRef} onClose={closeCart} />
    </header>
  )
}
