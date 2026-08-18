import { fireEvent, render, screen } from '@testing-library/react'
import { beforeEach } from 'vitest'
import { TestApp } from './App'

describe('Audiophile storefront', () => {
  beforeEach(() => window.localStorage.clear())

  it('renders a category from the product catalog', () => {
    render(<TestApp initialEntry="/category/speakers" />)
    expect(screen.getByRole('heading', { level: 1, name: 'speakers' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'ZX9 Speaker' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'ZX7 Speaker' })).toBeInTheDocument()
  })

  it('adds a selected quantity to the cart', () => {
    render(<TestApp initialEntry="/product/xx59-headphones" />)
    fireEvent.click(screen.getByRole('button', { name: /Increase XX59 Headphones quantity/i }))
    fireEvent.click(screen.getByRole('button', { name: 'Add to cart' }))
    expect(screen.getByRole('status')).toHaveTextContent('2 XX59 Headphones added to cart')
    fireEvent.click(screen.getByRole('button', { name: 'Open cart' }))
    expect(screen.getByRole('heading', { name: 'Cart (2)' })).toBeInTheDocument()
    expect(screen.getByText('$ 1,798')).toBeInTheDocument()
  })

  it('connects checkout errors to invalid fields', () => {
    window.localStorage.setItem('audiophile-cart', JSON.stringify([{ productId: 4, quantity: 1 }]))
    render(<TestApp initialEntry="/checkout" />)
    fireEvent.click(screen.getByRole('button', { name: 'Continue & pay' }))
    const name = screen.getByLabelText(/Name/i)
    expect(name).toHaveAttribute('aria-invalid', 'true')
    expect(name).toHaveAttribute('aria-describedby', 'name-error')
    expect(screen.getByText('Enter a valid email address')).toBeInTheDocument()
  })
})
