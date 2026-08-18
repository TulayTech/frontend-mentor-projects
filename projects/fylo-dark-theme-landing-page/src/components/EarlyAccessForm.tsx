import { FormEvent, useId, useRef, useState } from 'react'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type Message = { type: 'error' | 'success'; text: string } | null

export function EarlyAccessForm() {
  const [message, setMessage] = useState<Message>(null)
  const emailId = useId()
  const messageId = `${emailId}-message`
  const inputRef = useRef<HTMLInputElement>(null)

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const email = String(new FormData(event.currentTarget).get('email') ?? '').trim()

    if (!EMAIL_PATTERN.test(email)) {
      setMessage({ type: 'error', text: 'Please enter a valid email address' })
      inputRef.current?.focus()
      return
    }

    setMessage({
      type: 'success',
      text: 'Thanks! This portfolio demo does not send or store your email.',
    })
    event.currentTarget.reset()
  }

  return (
    <form className="signup-form" noValidate onSubmit={submit}>
      <div className="signup-form__field">
        <label className="visually-hidden" htmlFor={emailId}>
          Email address
        </label>
        <input
          ref={inputRef}
          id={emailId}
          name="email"
          type="email"
          autoComplete="email"
          placeholder="email@example.com"
          aria-describedby={message ? messageId : undefined}
          aria-invalid={message?.type === 'error'}
          onChange={() => message && setMessage(null)}
        />
        {message && (
          <p
            id={messageId}
            className={`signup-form__message signup-form__message--${message.type}`}
            role={message.type === 'error' ? 'alert' : 'status'}
          >
            {message.text}
          </p>
        )}
      </div>
      <button className="button" type="submit">
        Get Started For Free
      </button>
    </form>
  )
}
