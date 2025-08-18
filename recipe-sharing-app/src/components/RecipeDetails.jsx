import { useParams, useNavigate } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { recipes, deleteRecipe } = useRecipeStore();

  const recipe = recipes.find((r) => r.id === Number(id));

  if (!recipe) return <p>Recipe not found</p>;

  const handleDelete = () => {
    deleteRecipe(recipe.id);
    navigate("/"); 
  };

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <button onClick={() => alert("Edit feature coming soon!")}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default RecipeDetails;
