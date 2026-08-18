import type { PlanSelections } from '../data/plan'

function Choice({ value }: { value?: string }) {
  return <strong>{value ?? '_____'}</strong>
}

export function OrderSummary({ selections }: { selections: PlanSelections }) {
  const capsule = selections.preference === 'Capsule'
  return (
    <p className="order-sentence">
      “I drink my coffee {selections.preference ? <>{capsule ? 'using' : 'as'} <Choice value={selections.preference} /></> : <Choice />}, with a <Choice value={selections.bean} /> type of bean. <Choice value={selections.quantity} />{!capsule && <> ground ala <Choice value={selections.grind} /></>}, sent to me <Choice value={selections.frequency} />.”
    </p>
  )
}
