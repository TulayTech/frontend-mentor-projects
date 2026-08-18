import { useCallback, useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  ['00', 'Home', '/'],
  ['01', 'Destination', '/destination/moon'],
  ['02', 'Crew', '/crew/douglas-hurley'],
  ['03', 'Technology', '/technology/launch-vehicle'],
]

export function Header() {
  const [open, setOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const drawerRef = useRef<HTMLElement>(null)

  const closeMenu = useCallback((restoreFocus = true) => {
    setOpen(false)
    if (restoreFocus) window.setTimeout(() => triggerRef.current?.focus(), 0)
  }, [])

  useEffect(() => {
    if (!open) return
    const drawer = drawerRef.current
    const focusable = drawer?.querySelectorAll<HTMLElement>('button, a[href]')
    focusable?.[0]?.focus()
    const keydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu()
        return
      }
      if (event.key !== 'Tab' || !focusable?.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', keydown)
    return () => document.removeEventListener('keydown', keydown)
  }, [closeMenu, open])

  return (
    <header className="site-header">
      <NavLink className="logo" to="/" aria-label="Space tourism home">
        <img src="/assets/shared/logo.svg" alt="" />
      </NavLink>
      <span className="header-line" aria-hidden="true" />
      <button ref={triggerRef} className="menu-toggle" type="button" aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(true)}>
        <span className="sr-only">Open menu</span>
        <img src="/assets/shared/icon-hamburger.svg" alt="" />
      </button>
      <nav ref={drawerRef} id="primary-navigation" className={`primary-nav ${open ? 'primary-nav--open' : ''}`} aria-label="Primary navigation">
        <button className="menu-close" type="button" onClick={() => closeMenu()}>
          <span className="sr-only">Close menu</span>
          <img src="/assets/shared/icon-close.svg" alt="" />
        </button>
        <ul>
          {links.map(([number, label, to]) => (
            <li key={to}>
              <NavLink to={to} end={to === '/'} onClick={() => closeMenu(false)}>
                <span aria-hidden="true">{number}</span>{label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
