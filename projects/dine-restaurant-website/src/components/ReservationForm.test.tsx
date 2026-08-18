import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ReservationForm } from './ReservationForm'

describe('ReservationForm', () => {
  it('shows the challenge-required errors and focuses the first invalid field', async () => {
    const user = userEvent.setup()
    render(<ReservationForm />)

    await user.click(screen.getByRole('button', { name: 'Make Reservation' }))

    expect(screen.getByLabelText('Name')).toHaveFocus()
    expect(screen.getAllByText('This field is required')).toHaveLength(2)
    expect(screen.getAllByText('This field is incomplete')).toHaveLength(2)
  })

  it('rejects a malformed email address', async () => {
    const user = userEvent.setup()
    render(<ReservationForm />)

    await user.type(screen.getByLabelText('Name'), 'Taylor Morgan')
    await user.type(screen.getByLabelText('Email'), 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Make Reservation' }))

    expect(screen.getByText('Please use a valid email address')).toBeInTheDocument()
  })

  it('confirms a valid request without claiming to transmit data', async () => {
    const user = userEvent.setup()
    render(<ReservationForm />)

    await user.type(screen.getByLabelText('Name'), 'Taylor Morgan')
    await user.type(screen.getByLabelText('Email'), 'taylor@example.com')
    await user.type(screen.getByLabelText('Month'), '10')
    await user.type(screen.getByLabelText('Day'), '18')
    await user.type(screen.getByLabelText('Year'), '2026')
    await user.type(screen.getByLabelText('Hour'), '07')
    await user.type(screen.getByLabelText('Minute'), '30')
    await user.selectOptions(screen.getByLabelText('AM or PM'), 'PM')
    await user.click(screen.getByRole('button', { name: 'Add one guest' }))
    await user.click(screen.getByRole('button', { name: 'Make Reservation' }))

    expect(screen.getByText('5 people')).toBeInTheDocument()
    expect(screen.getByText(/This portfolio demo does not send/)).toBeInTheDocument()
  })
})
