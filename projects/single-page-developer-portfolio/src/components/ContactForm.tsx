import { useState } from 'react'
import type { FormEvent } from 'react'

interface Fields {
  name: string
  email: string
  message: string
}

type Errors = Partial<Record<keyof Fields, string>>

const initialFields: Fields = { name: '', email: '', message: '' }

function validate(fields: Fields): Errors {
  const errors: Errors = {}
  if (!fields.name.trim()) errors.name = 'Please enter your name'
  if (!fields.email.trim()) errors.email = 'Please enter your email address'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) errors.email = 'Sorry, invalid format here'
  if (!fields.message.trim()) errors.message = 'Please enter a message'
  return errors
}

export function ContactForm() {
  const [fields, setFields] = useState(initialFields)
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validate(fields)
    setErrors(nextErrors)
    setSent(Object.keys(nextErrors).length === 0)
    if (Object.keys(nextErrors).length === 0) setFields(initialFields)
  }

  const update = (field: keyof Fields, value: string) => {
    setFields((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
    setSent(false)
  }

  return (
    <form noValidate onSubmit={submit} aria-label="Contact Adam">
      <div className={`field ${errors.name ? 'field--error' : ''}`}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" autoComplete="name" value={fields.name} onChange={(event) => update('name', event.target.value)} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'name-error' : undefined} />
        {errors.name && <p id="name-error" className="field__error">{errors.name}</p>}
      </div>
      <div className={`field ${errors.email ? 'field--error' : ''}`}>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" autoComplete="email" value={fields.email} onChange={(event) => update('email', event.target.value)} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} />
        {errors.email && <p id="email-error" className="field__error">{errors.email}</p>}
      </div>
      <div className={`field ${errors.message ? 'field--error' : ''}`}>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={3} value={fields.message} onChange={(event) => update('message', event.target.value)} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'message-error' : undefined} />
        {errors.message && <p id="message-error" className="field__error">{errors.message}</p>}
      </div>
      <button className="text-link" type="submit">Send message</button>
      <p className="form-status" role="status">{sent ? 'Thanks! Your message is ready for Adam.' : ''}</p>
    </form>
  )
}
