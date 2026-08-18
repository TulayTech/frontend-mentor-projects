import { fireEvent, render, screen } from '@testing-library/react'
import { TestApp } from './App'
import { filterRecipes } from './data/recipeFilters'

describe('Healthy Recipe Finder', () => {
  it('filters by ingredient and time', () => {
    expect(filterRecipes('salmon', 5, 15).map((recipe) => recipe.slug)).toEqual(['one-pan-lemon-garlic-salmon-with-asparagus'])
    expect(filterRecipes('', 5, 5)).toHaveLength(2)
  })
  it('updates recipe results from search input', () => {
    render(<TestApp initialEntry="/recipes" />)
    fireEvent.change(screen.getByPlaceholderText(/Search by name or ingredient/i), { target: { value: 'lentil' } })
    expect(screen.getByRole('status')).toHaveTextContent('1 recipe found')
    expect(screen.getByRole('heading', { name: 'Lentil & Spinach Soup' })).toBeInTheDocument()
  })
  it('renders a recipe detail route', () => {
    render(<TestApp initialEntry="/recipes/banana-oat-pancakes" />)
    expect(screen.getByRole('heading', { name: 'Banana Oat Pancakes' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Ingredients' })).toBeInTheDocument()
  })
})
