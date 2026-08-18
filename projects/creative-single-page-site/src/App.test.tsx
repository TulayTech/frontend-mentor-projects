import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'

describe('Creative agency site', () => {
  it('renders the agency content and approach', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /branding & website design agency/i })).toBeVisible()
    expect(screen.getByRole('heading', { name: /our approach/i })).toBeVisible()
    expect(screen.getAllByRole('listitem')).toHaveLength(3)
  })

  it('moves through projects with controls and arrow keys', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: 'Lean Product Roadmap' })).toBeVisible()
    fireEvent.click(screen.getByRole('button', { name: 'Next project' }))
    expect(screen.getByRole('heading', { name: 'New Majestic Hotel' })).toBeVisible()
    fireEvent.keyDown(screen.getByRole('region', { name: 'New Majestic Hotel' }), { key: 'ArrowRight' })
    expect(screen.getByRole('heading', { name: 'Crypto Dashboard' })).toBeVisible()
  })

  it('opens and closes the mobile menu', () => {
    render(<App />)
    const trigger = screen.getByRole('button', { name: 'Open menu' })
    trigger.focus()
    fireEvent.click(trigger)
    expect(screen.getByRole('dialog', { name: 'Menu' })).toBeVisible()
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(screen.queryByRole('dialog', { name: 'Menu' })).not.toBeInTheDocument()
    expect(trigger).toHaveFocus()
  })
})
