import { useRef, useState, type ChangeEvent, type FormEvent } from 'react'
import {
  validateReservation,
  type ReservationErrors,
  type ReservationValues,
} from '../utils/validation'

const initialValues: ReservationValues = {
  name: '',
  email: '',
  month: '',
  day: '',
  year: '',
  hour: '',
  minute: '',
  period: 'AM',
}

type TextFieldName = Exclude<keyof ReservationValues, 'period'>

export function ReservationForm() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState<ReservationErrors>({})
  const [guests, setGuests] = useState(4)
  const [submitted, setSubmitted] = useState(false)
  const statusRef = useRef<HTMLDivElement>(null)

  const updateTextField = (event: ChangeEvent<HTMLInputElement>) => {
    const field = event.target.name as TextFieldName
    const value = event.target.value
    setValues((current) => ({ ...current, [field]: value }))
    setSubmitted(false)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validateReservation(values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false)
      const firstError = Object.keys(nextErrors)[0] as keyof ReservationErrors
      const fieldName = firstError === 'date' ? 'month' : firstError === 'time' ? 'hour' : firstError
      const firstInvalidField = event.currentTarget.elements.namedItem(fieldName)

      if (firstInvalidField instanceof HTMLElement) {
        firstInvalidField.focus()
      }
      return
    }

    setSubmitted(true)
    window.requestAnimationFrame(() => statusRef.current?.focus())
  }

  const changeGuests = (amount: number) => {
    setGuests((current) => Math.min(20, Math.max(1, current + amount)))
    setSubmitted(false)
  }

  const numberField = (
    name: 'month' | 'day' | 'year' | 'hour' | 'minute',
    label: string,
    placeholder: string,
    maxLength: number,
    errorId: string,
    invalid: boolean,
  ) => (
    <input
      className="reservation-form__number"
      type="text"
      inputMode="numeric"
      pattern="[0-9]*"
      name={name}
      aria-label={label}
      aria-invalid={invalid}
      aria-describedby={invalid ? errorId : undefined}
      placeholder={placeholder}
      value={values[name]}
      maxLength={maxLength}
      onChange={updateTextField}
    />
  )

  return (
    <form className="reservation-form" onSubmit={handleSubmit} noValidate>
      <div className={`reservation-form__field ${errors.name ? 'has-error' : ''}`.trim()}>
        <label className="sr-only" htmlFor="reservation-name">
          Name
        </label>
        <input
          id="reservation-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Name"
          value={values.name}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'name-error' : undefined}
          onChange={updateTextField}
        />
        {errors.name && (
          <p className="field-error" id="name-error">
            {errors.name}
          </p>
        )}
      </div>

      <div className={`reservation-form__field ${errors.email ? 'has-error' : ''}`.trim()}>
        <label className="sr-only" htmlFor="reservation-email">
          Email
        </label>
        <input
          id="reservation-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Email"
          value={values.email}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'email-error' : undefined}
          onChange={updateTextField}
        />
        {errors.email && (
          <p className="field-error" id="email-error">
            {errors.email}
          </p>
        )}
      </div>

      <fieldset className={`reservation-form__group ${errors.date ? 'has-error' : ''}`.trim()}>
        <legend>Pick a date</legend>
        <div className="reservation-form__date-fields">
          {numberField('month', 'Month', 'MM', 2, 'date-error', Boolean(errors.date))}
          {numberField('day', 'Day', 'DD', 2, 'date-error', Boolean(errors.date))}
          {numberField('year', 'Year', 'YYYY', 4, 'date-error', Boolean(errors.date))}
        </div>
        {errors.date && (
          <p className="field-error" id="date-error">
            {errors.date}
          </p>
        )}
      </fieldset>

      <fieldset className={`reservation-form__group ${errors.time ? 'has-error' : ''}`.trim()}>
        <legend>Pick a time</legend>
        <div className="reservation-form__time-fields">
          {numberField('hour', 'Hour', '09', 2, 'time-error', Boolean(errors.time))}
          {numberField('minute', 'Minute', '00', 2, 'time-error', Boolean(errors.time))}
          <label className="sr-only" htmlFor="reservation-period">
            AM or PM
          </label>
          <select
            id="reservation-period"
            name="period"
            value={values.period}
            onChange={(event) => {
              setValues((current) => ({
                ...current,
                period: event.target.value as ReservationValues['period'],
              }))
              setSubmitted(false)
            }}
          >
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
        </div>
        {errors.time && (
          <p className="field-error" id="time-error">
            {errors.time}
          </p>
        )}
      </fieldset>

      <div className="guest-stepper">
        <button
          type="button"
          aria-label="Remove one guest"
          disabled={guests === 1}
          onClick={() => changeGuests(-1)}
        >
          <img src="/images/icons/icon-minus.svg" alt="" width="7" height="3" />
        </button>
        <output aria-live="polite" aria-atomic="true">
          {guests} {guests === 1 ? 'person' : 'people'}
        </output>
        <button
          type="button"
          aria-label="Add one guest"
          disabled={guests === 20}
          onClick={() => changeGuests(1)}
        >
          <img src="/images/icons/icon-plus.svg" alt="" width="10" height="10" />
        </button>
      </div>

      <button className="button button--dark reservation-form__submit" type="submit">
        Make Reservation
      </button>

      {submitted && (
        <div className="reservation-form__success" role="status" tabIndex={-1} ref={statusRef}>
          <strong>Your table request is ready.</strong>
          <span>
            This portfolio demo does not send personal information. In a live service, the restaurant
            would confirm availability next.
          </span>
        </div>
      )}
    </form>
  )
}
