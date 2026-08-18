import { fireEvent, render, screen } from '@testing-library/react'
import { TestApp } from './App'
import { monthlyCost } from './data/plan'

describe('Coffeeroasters', () => {
  it('renders the home and about routes', () => {
    const { unmount } = render(<TestApp />)
    expect(screen.getByRole('heading', { name: 'Great coffee made simple.' })).toBeInTheDocument()
    unmount()
    render(<TestApp initialEntry="/about" />)
    expect(screen.getByRole('heading', { name: 'About us' })).toBeInTheDocument()
  })

  it('uses the supplied monthly pricing rules', () => {
    expect(monthlyCost('250g', 'Every week')).toBe(28.8)
    expect(monthlyCost('500g', 'Every 2 weeks')).toBe(35)
    expect(monthlyCost('1000g', 'Every month')).toBe(42)
  })

  it('disables grind selections for capsules', () => {
    render(<TestApp initialEntry="/plan" />)
    fireEvent.click(screen.getByRole('button', { name: 'Capsule Preferences' }))
    expect(screen.getByRole('button', { name: 'Want us to grind them?' })).toBeDisabled()
    expect(screen.getByText(/using/i)).toHaveTextContent('using Capsule')
  })

  it('creates a complete plan and calculates its modal price', () => {
    render(<TestApp initialEntry="/plan" />)
    for (const choice of ['Filter Preferences', 'Single origin Bean type', '500g Quantity', 'Wholebean Grind option', 'Every 2 weeks Deliveries']) {
      fireEvent.click(screen.getByRole('button', { name: choice }))
    }
    const create = screen.getByRole('button', { name: 'Create my plan!' })
    expect(create).toBeEnabled()
    fireEvent.click(create)
    expect(screen.getByRole('dialog', { name: 'Order Summary' })).toHaveTextContent('$35.00 / mo')
  })
})
