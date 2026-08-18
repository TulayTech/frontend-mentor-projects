import { fireEvent, render, screen } from '@testing-library/react'
import { TestApp } from './App'

describe('Space tourism routes', () => {
  it('renders the home page', () => {
    render(<TestApp />)
    expect(screen.getByRole('heading', { name: 'Space' })).toBeInTheDocument()
  })

  it('switches destination content without a refresh', () => {
    render(<TestApp initialEntry="/destination/moon" />)
    fireEvent.click(screen.getByRole('link', { name: 'Mars' }))
    expect(screen.getByRole('heading', { name: 'Mars' })).toBeInTheDocument()
    expect(screen.getByText('225 mil. km')).toBeInTheDocument()
  })

  it('renders crew and technology details', () => {
    const { unmount } = render(<TestApp initialEntry="/crew/victor-glover" />)
    expect(screen.getByRole('heading', { name: 'Victor Glover' })).toBeInTheDocument()
    unmount()
    render(<TestApp initialEntry="/technology/spaceport" />)
    expect(screen.getByRole('heading', { name: 'Spaceport' })).toBeInTheDocument()
  })
})
