import { useEffect, useRef } from 'react'

type MobileMenuProps = { onClose: () => void }

export function MobileMenu({ onClose }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const trigger = document.activeElement as HTMLElement | null
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const controls = menuRef.current?.querySelectorAll<HTMLElement>('button, a[href]')
    controls?.[0]?.focus()

    const keydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key !== 'Tab' || !controls?.length) return
      const first = controls[0]
      const last = controls[controls.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', keydown)
    return () => {
      document.body.style.overflow = originalOverflow
      document.removeEventListener('keydown', keydown)
      trigger?.focus()
    }
  }, [onClose])

  return (
    <div className="mobile-menu" id="mobile-menu" ref={menuRef} role="dialog" aria-modal="true" aria-label="Menu">
      <button type="button" aria-label="Close menu" onClick={onClose}>
        <img src="/assets/mobile/icon-cross.svg" alt="" />
      </button>
      <nav aria-label="Mobile navigation">
        <a href="#about" onClick={onClose}>About</a>
        <a href="#services" onClick={onClose}>Service</a>
        <a href="#projects" onClick={onClose}>Projects</a>
        <a className="nav-cta" href="#contact" onClick={onClose}>Schedule a Call</a>
      </nav>
    </div>
  )
}
