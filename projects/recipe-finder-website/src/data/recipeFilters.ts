import recipesJson from './recipes.json'
import type { Recipe } from './types'

export const recipes = recipesJson as Recipe[]

export function filterRecipes(query: string, maxPrep: number, maxCook: number) {
  const term = query.trim().toLowerCase()

  return recipes.filter(
    (recipe) =>
      (!term ||
        recipe.title.toLowerCase().includes(term) ||
        recipe.ingredients.some((item) => item.toLowerCase().includes(term))) &&
      (!maxPrep || recipe.prepMinutes <= maxPrep) &&
      (!maxCook || recipe.cookMinutes <= maxCook),
  )
}
