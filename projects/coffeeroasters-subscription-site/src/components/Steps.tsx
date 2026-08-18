import { CtaLink } from './CtaLink'

const steps = [
  ['01', 'Pick your coffee', 'Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them.'],
  ['02', 'Choose the frequency', 'Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel anytime.'],
  ['03', 'Receive and enjoy!', 'We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees.'],
]

export function Steps({ dark = false, action = true }: { dark?: boolean; action?: boolean }) {
  return (
    <section className={`steps ${dark ? 'steps--dark' : ''}`} aria-labelledby={dark ? undefined : 'steps-title'} aria-label={dark ? 'How your plan works' : undefined}>
      {!dark && <h2 id="steps-title">How it works</h2>}
      <div className="steps__grid">
        {steps.map(([number, title, copy]) => (
          <article key={number}><span className="step-dot" aria-hidden="true" /><p className="step-number">{number}</p><h3>{title}</h3><p>{copy}</p></article>
        ))}
      </div>
      {action && <CtaLink />}
    </section>
  )
}
