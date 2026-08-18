import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'

describe('Pod request access page', () => {
  it('renders the key content and podcast platforms', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: /publish your podcasts everywhere/i })).toBeVisible()
    expect(screen.getByRole('img', { name: 'Spotify' })).toBeVisible()
    expect(screen.getByRole('button', { name: /request access/i })).toBeVisible()
  })

  it('shows the required error for an empty email', () => {
    render(<App />)

    fireEvent.click(screen.getByRole('button', { name: /request access/i }))

    expect(screen.getByRole('alert')).toHaveTextContent('Oops! Please add your email')
    expect(screen.getByLabelText('Email address')).toHaveAttribute('aria-invalid', 'true')
  })

  it('rejects malformed email addresses', () => {
    render(<App />)

    fireEvent.change(screen.getByLabelText('Email address'), { target: { value: 'not-an-email' } })
    fireEvent.click(screen.getByRole('button', { name: /request access/i }))

    expect(screen.getByRole('alert')).toHaveTextContent('Oops! Please check your email')
  })

  it('confirms a valid demo submission without claiming to send data', () => {
    render(<App />)

    fireEvent.change(screen.getByLabelText('Email address'), {
      target: { value: 'listener@example.com' },
    })
    fireEvent.click(screen.getByRole('button', { name: /request access/i }))

    expect(screen.getByRole('status')).toHaveTextContent(/does not send or store your email/i)
  })
})
