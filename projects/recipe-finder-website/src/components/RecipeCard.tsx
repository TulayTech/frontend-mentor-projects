import { Link } from 'react-router-dom'
import type { Recipe } from '../data/types'
const asset = (path: string) => path.replace('./', '/')
export function RecipeCard({ recipe }: { recipe: Recipe }) {
  return <article className="recipe-card"><picture><source media="(max-width: 40rem)" srcSet={asset(recipe.image.small)} /><img src={asset(recipe.image.large)} alt={`Prepared ${recipe.title}`} /></picture><h3><Link to={`/recipes/${recipe.slug}`}>{recipe.title}</Link></h3><p>{recipe.overview}</p><div className="recipe-meta"><span><img src="/assets/images/icon-prep-time.svg" alt="" />Prep: {recipe.prepMinutes} min</span><span><img src="/assets/images/icon-cook-time.svg" alt="" />Cook: {recipe.cookMinutes} min</span></div></article>
}
