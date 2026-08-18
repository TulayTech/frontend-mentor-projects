import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'

describe('Developer portfolio', () => {
  it('renders the portfolio content', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /nice to meet you/i })).toBeInTheDocument()
    expect(screen.getAllByRole('article')).toHaveLength(6)
  })

  it('validates empty and invalid form fields', () => {
    render(<App />)
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'invalid' } })
    fireEvent.click(screen.getByRole('button', { name: 'Send message' }))
    expect(screen.getByText('Please enter your name')).toBeInTheDocument()
    expect(screen.getByText('Sorry, invalid format here')).toBeInTheDocument()
    expect(screen.getByText('Please enter a message')).toBeInTheDocument()
  })

  it('accepts a complete message', () => {
    render(<App />)
    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Taylor' } })
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'taylor@example.com' } })
    fireEvent.change(screen.getByLabelText('Message'), { target: { value: 'Let’s work together.' } })
    fireEvent.click(screen.getByRole('button', { name: 'Send message' }))
    expect(screen.getByRole('status')).toHaveTextContent('Thanks!')
  })
})
