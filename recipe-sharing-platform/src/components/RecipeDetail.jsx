import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((r) => r.id.toString() === id);
        setRecipe(found);
      });
  }, [id]);

  if (!recipe) {
    return <p className="text-center mt-10">Loading recipe...</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <img
        src={recipe.image}
        alt={recipe.name}
        className="w-full h-64 object-cover rounded-2xl shadow"
      />
      <h1 className="text-3xl font-bold mt-4 mb-2">{recipe.name}</h1>
      <p className="text-gray-600 mb-6">{recipe.description}</p>

      {/* Ingredients */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside space-y-1">
          {recipe.ingredients.map((ing, index) => (
            <li key={index} className="text-gray-700">{ing}</li>
          ))}
        </ul>
      </div>

      {/* Instructions */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
        <ol className="list-decimal list-inside space-y-2">
          {recipe.instructions.map((step, index) => (
            <li key={index} className="text-gray-700">{step}</li>
          ))}
        </ol>
      </div>

      <Link
        to="/"
        className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        ⬅ Back to Recipes
      </Link>
    </div>
  );
}

export default RecipeDetail;
