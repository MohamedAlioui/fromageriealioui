import { Recipe } from '../data/recipes';

export function filterAndSortRecipes(
  recipes: Recipe[],
  category: string,
  difficulty: string,
  sortBy: string
): Recipe[] {
  let filtered = [...recipes];

  // Apply category filter
  if (category !== 'all') {
    filtered = filtered.filter(recipe => recipe.category === category);
  }

  // Apply difficulty filter
  if (difficulty !== 'all') {
    filtered = filtered.filter(recipe => recipe.difficulty === difficulty);
  }

  // Apply sorting
  switch (sortBy) {
    case 'prep-asc':
      filtered.sort((a, b) => parseInt(a.prepTime) - parseInt(b.prepTime));
      break;
    case 'prep-desc':
      filtered.sort((a, b) => parseInt(b.prepTime) - parseInt(a.prepTime));
      break;
    case 'difficulty-asc':
      filtered.sort((a, b) => {
        const difficultyOrder = { facile: 1, moyen: 2, difficile: 3 };
        return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
      });
      break;
    case 'difficulty-desc':
      filtered.sort((a, b) => {
        const difficultyOrder = { facile: 1, moyen: 2, difficile: 3 };
        return difficultyOrder[b.difficulty] - difficultyOrder[a.difficulty];
      });
      break;
    default:
      filtered.sort((a, b) => (a.featured === b.featured ? 0 : a.featured ? -1 : 1));
      break;
  }

  return filtered;
}