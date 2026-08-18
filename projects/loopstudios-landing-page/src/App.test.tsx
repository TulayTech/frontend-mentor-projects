import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'

describe('Loopstudios landing page', () => {
  it('renders the main content and all creation cards', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: /immersive experiences/i })).toBeVisible()
    expect(screen.getByRole('heading', { name: /leader in interactive vr/i })).toBeVisible()
    expect(screen.getAllByLabelText(/artwork$/i)).toHaveLength(8)
  })

  it('opens and closes the accessible mobile menu', () => {
    render(<App />)
    const openButton = screen.getByRole('button', { name: 'Open menu' })

    openButton.focus()
    fireEvent.click(openButton)
    expect(openButton).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('dialog', { name: 'Menu' })).toBeVisible()

    fireEvent.keyDown(document, { key: 'Escape' })
    expect(screen.queryByRole('dialog', { name: 'Menu' })).not.toBeInTheDocument()
    expect(openButton).toHaveFocus()
  })
})
