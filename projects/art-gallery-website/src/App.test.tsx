import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { AppRoutes } from './App'

describe('Modern Art Gallery routes', () => {
  it('renders the gallery home page', () => {
    render(<MemoryRouter><AppRoutes /></MemoryRouter>)
    expect(screen.getByRole('heading', { name: 'Modern Art Gallery' })).toBeVisible()
    expect(screen.getByRole('heading', { name: /your day at the gallery/i })).toBeVisible()
  })

  it('navigates to the location and back without a refresh', () => {
    render(<MemoryRouter><AppRoutes /></MemoryRouter>)
    fireEvent.click(screen.getByRole('link', { name: 'Our location' }))
    expect(screen.getByRole('heading', { name: 'Our location' })).toBeVisible()
    fireEvent.click(screen.getByRole('link', { name: 'Back to home' }))
    expect(screen.getByRole('heading', { name: 'Modern Art Gallery' })).toBeVisible()
  })
})
