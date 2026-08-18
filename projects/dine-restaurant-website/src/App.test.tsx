import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { App } from './App'

describe('App', () => {
  it('navigates from the home page to reservations without a reload', async () => {
    const user = userEvent.setup()
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    )

    await user.click(screen.getAllByRole('link', { name: 'Book a table' })[0])

    expect(screen.getByRole('heading', { name: 'Reservations' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Make Reservation' })).toBeInTheDocument()
  })

  it('renders a useful not-found route', () => {
    render(
      <MemoryRouter initialEntries={['/missing-table']}>
        <App />
      </MemoryRouter>,
    )

    expect(screen.getByRole('heading', { name: 'This table isn’t available.' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Return home' })).toBeInTheDocument()
  })
})
