export type ReservationValues = {
  name: string
  email: string
  month: string
  day: string
  year: string
  hour: string
  minute: string
  period: 'AM' | 'PM'
}

export type ReservationErrors = Partial<Record<'name' | 'email' | 'date' | 'time', string>>

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateReservation(values: ReservationValues): ReservationErrors {
  const errors: ReservationErrors = {}

  if (!values.name.trim()) {
    errors.name = 'This field is required'
  }

  if (!values.email.trim()) {
    errors.email = 'This field is required'
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = 'Please use a valid email address'
  }

  if (!values.month || !values.day || !values.year) {
    errors.date = 'This field is incomplete'
  } else {
    const month = Number(values.month)
    const day = Number(values.day)
    const year = Number(values.year)
    const daysInMonth = new Date(year, month, 0).getDate()

    if (year < 1900 || month < 1 || month > 12 || day < 1 || day > daysInMonth) {
      errors.date = 'Please enter a valid date'
    }
  }

  if (!values.hour || !values.minute) {
    errors.time = 'This field is incomplete'
  } else {
    const hour = Number(values.hour)
    const minute = Number(values.minute)

    if (hour < 1 || hour > 12 || minute < 0 || minute > 59) {
      errors.time = 'Please enter a valid time'
    }
  }

  return errors
}
