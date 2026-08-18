import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the full course catalogue with a logical heading structure', () => {
    render(<App />)

    expect(screen.getByRole('heading', { level: 1, name: 'Maximize skill, minimize budget' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Check out our most popular courses!' })).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(5)
  })

  it('connects every call to action to the course catalogue', () => {
    render(<App />)

    for (const link of screen.getAllByRole('link', { name: /get started/i })) {
      expect(link).toHaveAttribute('href', '#courses')
    }
  })
})
