import { FormEvent, useId, useRef, useState } from 'react'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type Feedback =
  | { kind: 'error'; message: string }
  | { kind: 'success'; message: string }
  | null

export function AccessForm() {
  const [feedback, setFeedback] = useState<Feedback>(null)
  const emailId = useId()
  const feedbackId = `${emailId}-feedback`
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const email = String(form.get('email') ?? '').trim()

    if (!email) {
      setFeedback({ kind: 'error', message: 'Oops! Please add your email' })
      inputRef.current?.focus()
      return
    }

    if (!EMAIL_PATTERN.test(email)) {
      setFeedback({ kind: 'error', message: 'Oops! Please check your email' })
      inputRef.current?.focus()
      return
    }

    setFeedback({
      kind: 'success',
      message: 'Thanks! This portfolio demo does not send or store your email.',
    })
    event.currentTarget.reset()
  }

  return (
    <form className="access-form" noValidate onSubmit={handleSubmit}>
      <div className="access-form__controls">
        <label className="visually-hidden" htmlFor={emailId}>
          Email address
        </label>
        <input
          ref={inputRef}
          id={emailId}
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Email address"
          aria-describedby={feedback ? feedbackId : undefined}
          aria-invalid={feedback?.kind === 'error'}
          onChange={() => feedback && setFeedback(null)}
        />
        <button type="submit">Request access</button>
      </div>

      {feedback && (
        <p
          className={`access-form__feedback access-form__feedback--${feedback.kind}`}
          id={feedbackId}
          role={feedback.kind === 'error' ? 'alert' : 'status'}
        >
          {feedback.message}
        </p>
      )}
    </form>
  )
}
