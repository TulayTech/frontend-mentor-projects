import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { Events } from './Events'

describe('Events', () => {
  it('changes the visible experience when a tab is selected', async () => {
    const user = userEvent.setup()
    render(
      <MemoryRouter>
        <Events />
      </MemoryRouter>,
    )

    await user.click(screen.getByRole('tab', { name: 'Special Events' }))

    expect(screen.getByRole('heading', { name: 'Special Events' })).toBeInTheDocument()
    expect(screen.getByText(/romantic dinner or special date/i)).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Special Events' })).toHaveAttribute(
      'aria-selected',
      'true',
    )
  })

  it('supports arrow-key navigation through the tabs', () => {
    render(
      <MemoryRouter>
        <Events />
      </MemoryRouter>,
    )

    const familyTab = screen.getByRole('tab', { name: 'Family Gathering' })
    familyTab.focus()
    fireEvent.keyDown(familyTab, { key: 'ArrowRight' })

    const specialTab = screen.getByRole('tab', { name: 'Special Events' })
    expect(specialTab).toHaveFocus()
    expect(specialTab).toHaveAttribute('aria-selected', 'true')
  })
})
