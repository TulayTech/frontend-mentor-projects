import { validateReservation } from './validation'

const validReservation = {
  name: 'Taylor Morgan',
  email: 'taylor@example.com',
  month: '10',
  day: '18',
  year: '2026',
  hour: '7',
  minute: '30',
  period: 'PM' as const,
}

describe('validateReservation', () => {
  it('accepts complete, correctly formatted values', () => {
    expect(validateReservation(validReservation)).toEqual({})
  })

  it('rejects impossible dates and times', () => {
    expect(
      validateReservation({
        ...validReservation,
        month: '2',
        day: '31',
        hour: '14',
      }),
    ).toMatchObject({
      date: 'Please enter a valid date',
      time: 'Please enter a valid time',
    })
  })
})
