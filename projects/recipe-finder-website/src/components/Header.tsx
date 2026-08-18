import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <NavLink to="/" aria-label="Healthy Recipe Finder home"><img src="/assets/images/logo.svg" alt="" /></NavLink>
        <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen((value) => !value)}><span className="sr-only">Toggle menu</span><img src="/assets/images/icon-hamburger-menu.svg" alt="" /></button>
        <nav id="main-navigation" className={open ? 'open' : ''} aria-label="Primary navigation"><NavLink to="/" end onClick={() => setOpen(false)}>Home</NavLink><NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink><NavLink to="/recipes" onClick={() => setOpen(false)}>Recipes</NavLink></nav>
        <NavLink className="button header-cta" to="/recipes">Browse recipes</NavLink>
      </div>
    </header>
  )
}
