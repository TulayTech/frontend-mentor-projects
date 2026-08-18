import { useCallback, useMemo, useRef, useState } from 'react'
import { Layout } from '../components/Layout'
import { OrderDialog } from '../components/OrderDialog'
import { OrderSummary } from '../components/OrderSummary'
import { Steps } from '../components/Steps'
import { categories, prices } from '../data/plan'
import type { CategoryId, Frequency, PlanSelections } from '../data/plan'

const nextCategory: Partial<Record<CategoryId, CategoryId>> = { preference: 'bean', bean: 'quantity', quantity: 'grind', grind: 'frequency' }

export function PlanPage() {
  const [selections, setSelections] = useState<PlanSelections>({})
  const [open, setOpen] = useState<CategoryId | null>('preference')
  const [dialogOpen, setDialogOpen] = useState(false)
  const [checkedOut, setCheckedOut] = useState(false)
  const createButtonRef = useRef<HTMLButtonElement>(null)

  const capsule = selections.preference === 'Capsule'
  const complete = Boolean(selections.preference && selections.bean && selections.quantity && selections.frequency && (capsule || selections.grind))
  const select = (category: CategoryId, value: string) => {
    setSelections((current) => ({ ...current, [category]: value, ...(category === 'preference' && value === 'Capsule' ? { grind: undefined } : {}) }))
    const next = nextCategory[category]
    if (next) setOpen(next === 'grind' && category === 'quantity' && capsule ? 'frequency' : next)
  }
  const closeDialog = useCallback(() => {
    setDialogOpen(false)
    window.setTimeout(() => createButtonRef.current?.focus(), 0)
  }, [])
  const frequencyOptions = useMemo(() => {
    const quantity = selections.quantity ?? '250g'
    return prices[quantity]
  }, [selections.quantity])

  return (
    <Layout>
      <section className="plan-hero shell" aria-labelledby="plan-title"><div><h1 id="plan-title">Create a plan</h1><p>Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.</p></div></section>
      <div className="plan-steps shell"><Steps dark action={false} /></div>
      <section className="plan-builder shell" aria-label="Build your coffee subscription">
        <nav className="plan-index" aria-label="Plan steps">{categories.map((category) => <a key={category.id} href={`#${category.id}`} className={selections[category.id] ? 'complete' : ''}><span>{category.number}</span>{category.label}</a>)}</nav>
        <div className="plan-options">
          {categories.map((category) => {
            const disabled = category.id === 'grind' && capsule
            const expanded = open === category.id && !disabled
            return (
              <section id={category.id} className={`option-group ${disabled ? 'option-group--disabled' : ''}`} key={category.id}>
                <h2><button type="button" disabled={disabled} aria-expanded={expanded} aria-controls={`${category.id}-options`} onClick={() => setOpen(expanded ? null : category.id)}>{category.title}<img className={expanded ? 'open' : ''} src="/assets/plan/desktop/icon-arrow.svg" alt="" /></button></h2>
                <div id={`${category.id}-options`} className="option-cards" hidden={!expanded}>
                  {category.options.map(([title, description]) => {
                    const selected = selections[category.id] === title
                    const price = category.id === 'frequency' ? `$${frequencyOptions[title as Frequency].toFixed(2)} ` : ''
                    return <button key={title} type="button" aria-label={`${title} ${category.label}`} aria-pressed={selected} onClick={() => select(category.id, title)}><strong>{title}</strong><span>{price}{description}</span></button>
                  })}
                </div>
              </section>
            )
          })}
          <section className="order-summary" aria-labelledby="summary-title"><h2 id="summary-title">Order Summary</h2><OrderSummary selections={selections} /></section>
          <button ref={createButtonRef} className="button create-plan" type="button" disabled={!complete} onClick={() => setDialogOpen(true)}>Create my plan!</button>
          <p className="checkout-status" role="status">{checkedOut ? 'Your plan is ready for checkout.' : ''}</p>
        </div>
      </section>
      {dialogOpen && <OrderDialog selections={selections} onClose={closeDialog} onCheckout={() => { setCheckedOut(true); closeDialog() }} />}
    </Layout>
  )
}
