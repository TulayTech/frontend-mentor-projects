import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'

describe('Fylo landing page', () => {
  it('renders the primary sections', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: /all your files/i })).toBeVisible()
    expect(screen.getByRole('heading', { name: /stay productive/i })).toBeVisible()
    expect(screen.getAllByText('Founder & CEO, Huddle')).toHaveLength(3)
  })

  it('shows a validation message for an invalid email', () => {
    render(<App />)

    fireEvent.change(screen.getByLabelText('Email address'), { target: { value: 'invalid' } })
    fireEvent.click(screen.getByRole('button', { name: /get started for free/i }))

    expect(screen.getByRole('alert')).toHaveTextContent('Please enter a valid email address')
    expect(screen.getByLabelText('Email address')).toHaveAttribute('aria-invalid', 'true')
  })

  it('gives honest confirmation for a valid demo submission', () => {
    render(<App />)

    fireEvent.change(screen.getByLabelText('Email address'), {
      target: { value: 'person@example.com' },
    })
    fireEvent.click(screen.getByRole('button', { name: /get started for free/i }))

    expect(screen.getByRole('status')).toHaveTextContent(/does not send or store your email/i)
  })
})
