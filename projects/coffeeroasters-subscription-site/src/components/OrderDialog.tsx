import { useEffect, useRef } from 'react'
import type { PlanSelections, Quantity, Frequency } from '../data/plan'
import { monthlyCost } from '../data/plan'
import { OrderSummary } from './OrderSummary'

export function OrderDialog({ selections, onClose, onCheckout }: { selections: PlanSelections; onClose: () => void; onCheckout: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const price = monthlyCost(selections.quantity as Quantity, selections.frequency as Frequency)

  useEffect(() => {
    closeRef.current?.focus()
    const keydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') return onClose()
      if (event.key !== 'Tab') return
      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>('button')
      if (!focusable?.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
    }
    document.addEventListener('keydown', keydown)
    return () => document.removeEventListener('keydown', keydown)
  }, [onClose])

  return (
    <div className="dialog-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}>
      <div ref={dialogRef} className="order-dialog" role="dialog" aria-modal="true" aria-labelledby="dialog-title">
        <header><h2 id="dialog-title">Order Summary</h2><button ref={closeRef} type="button" onClick={onClose} aria-label="Close order summary">×</button></header>
        <div className="order-dialog__body"><OrderSummary selections={selections} /><p>Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription discount codes can also be redeemed at checkout.</p><button className="button" type="button" onClick={onCheckout}>Checkout <span>– ${price.toFixed(2)} / mo</span></button></div>
      </div>
    </div>
  )
}
