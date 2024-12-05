export interface Recipe {
  id: number;
  title: string;
  description: string;
  image: string;
  prepTime: string;
  cookTime: string;
  difficulty: 'facile' | 'moyen' | 'difficile';
  servings: number;
  ingredients: string[];
  instructions: string[];
  category: string;
  featured?: boolean;
}

export const recipes: Recipe[] = [
  {
    id: 1,
    title: "Gratin de Pommes de Terre au Fromage Amir",
    description: "Un gratin crémeux et réconfortant avec notre fromage Amir semi-curé",
    image: "https://images.unsplash.com/photo-1568470908577-29ed71189556?auto=format&fit=crop&w=800&q=80",
    prepTime: "20 min",
    cookTime: "45 min",
    difficulty: "facile",
    servings: 6,
    ingredients: [
      "1kg de pommes de terre",
      "200g de fromage Amir râpé",
      "50cl de crème fraîche",
      "2 gousses d'ail",
      "Sel et poivre"
    ],
    instructions: [
      "Préchauffer le four à 180°C",
      "Éplucher et couper les pommes de terre en fines tranches",
      "Disposer les pommes de terre en couches",
      "Ajouter la crème et le fromage",
      "Cuire 45 minutes jusqu'à gratiner"
    ],
    category: "plats-principaux",
    featured: true
  },
  {
    id: 2,
    title: "Salade Caprese à la Mozzarella",
    description: "Une salade fraîche et légère avec notre Mozzarella Centra",
    image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&w=800&q=80",
    prepTime: "10 min",
    cookTime: "0 min",
    difficulty: "facile",
    servings: 4,
    ingredients: [
      "250g de Mozzarella Centra",
      "4 tomates mûres",
      "Basilic frais",
      "Huile d'olive",
      "Sel et poivre"
    ],
    instructions: [
      "Couper la mozzarella et les tomates en tranches",
      "Alterner les tranches de tomates et de mozzarella",
      "Ajouter les feuilles de basilic",
      "Assaisonner d'huile d'olive, sel et poivre"
    ],
    category: "entrees",
    featured: true
  }
];