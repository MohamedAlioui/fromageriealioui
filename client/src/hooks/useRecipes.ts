import { useState, useEffect } from 'react';
import { recipes as initialRecipes } from '../data/recipes';
import type { Recipe } from '../data/recipes';

export function useRecipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const loadRecipes = async () => {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      setRecipes(initialRecipes);
      setIsLoading(false);
    };

    loadRecipes();
  }, []);

  return { recipes, isLoading };
}