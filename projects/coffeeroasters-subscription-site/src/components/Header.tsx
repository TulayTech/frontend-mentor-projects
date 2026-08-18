import { useCallback, useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'

export function Header() {
  const [open, setOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const navRef = useRef<HTMLElement>(null)
  const close = useCallback((restore = true) => {
    setOpen(false)
    if (restore) window.setTimeout(() => toggleRef.current?.focus(), 0)
  }, [])

  useEffect(() => {
    if (!open) return
    const focusable = navRef.current?.querySelectorAll<HTMLElement>('button, a[href]')
    focusable?.[0]?.focus()
    const keydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') return close()
      if (event.key !== 'Tab' || !focusable?.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
    }
    document.addEventListener('keydown', keydown)
    return () => document.removeEventListener('keydown', keydown)
  }, [close, open])

  return (
    <header className="site-header shell">
      <NavLink to="/" aria-label="Coffeeroasters home"><img className="logo" src="/assets/shared/desktop/logo.svg" alt="" /></NavLink>
      <button ref={toggleRef} className="menu-toggle" type="button" aria-expanded={open} aria-controls="site-navigation" onClick={() => setOpen(true)}>
        <span className="sr-only">Open menu</span><img src="/assets/shared/mobile/icon-hamburger.svg" alt="" />
      </button>
      <nav ref={navRef} id="site-navigation" className={`site-nav ${open ? 'site-nav--open' : ''}`} aria-label="Primary navigation">
        <button className="menu-close" type="button" onClick={() => close()}><span className="sr-only">Close menu</span><img src="/assets/shared/mobile/icon-close.svg" alt="" /></button>
        <NavLink to="/" end onClick={() => close(false)}>Home</NavLink>
        <NavLink to="/about" onClick={() => close(false)}>About us</NavLink>
        <NavLink to="/plan" onClick={() => close(false)}>Create your plan</NavLink>
      </nav>
    </header>
  )
}
