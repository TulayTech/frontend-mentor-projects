import { useEffect, useRef } from 'react'

type MobileMenuProps = {
  onClose: () => void
}

const links = ['About', 'Careers', 'Events', 'Products', 'Support']

export function MobileMenu({ onClose }: MobileMenuProps) {
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const focusable = dialogRef.current?.querySelectorAll<HTMLElement>('button, a[href]')
    focusable?.[0]?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
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

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      document.removeEventListener('keydown', handleKeyDown)
      previouslyFocused?.focus()
    }
  }, [onClose])

  return (
    <div
      className="mobile-menu"
      id="mobile-menu"
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
    >
      <div className="mobile-menu__header">
        <img src="/images/logo.svg" alt="Loopstudios" />
        <button type="button" onClick={onClose} aria-label="Close menu">
          <img src="/images/icon-close.svg" alt="" />
        </button>
      </div>
      <nav aria-label="Mobile navigation">
        {links.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} onClick={onClose}>
            {link}
          </a>
        ))}
      </nav>
    </div>
  )
}
