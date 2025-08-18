import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const { recipes, filteredRecipes, searchTerm } = useRecipeStore((s) => ({
    recipes: s.recipes,
    filteredRecipes: s.filteredRecipes,
    searchTerm: s.searchTerm,
  }));

  const list = searchTerm ? filteredRecipes : recipes;

  return (
    <div>
      <h2>Recipes</h2>
      {list.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        <ul>
          {list.map((r) => (
            <li key={r.id}>
              <Link to={`/recipe/${r.id}`}>{r.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;
