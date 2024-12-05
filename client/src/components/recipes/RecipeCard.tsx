import React from 'react';
import { Clock, Users, ChefHat } from 'lucide-react';
import { Recipe } from '../../data/recipes';

export function RecipeCard({
  title,
  description,
  image,
  prepTime,
  cookTime,
  difficulty,
  servings,
}: Recipe) {
  const difficultyColors = {
    facile: 'bg-emerald-100 text-emerald-800',
    moyen: 'bg-amber-100 text-amber-800',
    difficile: 'bg-red-100 text-red-800',
  };

  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        
        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{prepTime} + {cookTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{servings} pers.</span>
          </div>
          <div className="flex items-center gap-1">
            <ChefHat className="w-4 h-4" />
            <span className={`px-2 py-1 rounded-full ${difficultyColors[difficulty]}`}>
              {difficulty}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}