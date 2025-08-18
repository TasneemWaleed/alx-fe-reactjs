import { create } from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [
    { id: 1, title: "Pasta", description: "Delicious homemade pasta." },
    { id: 2, title: "Pizza", description: "Cheesy and tasty pizza." },
  ],
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),
}));
