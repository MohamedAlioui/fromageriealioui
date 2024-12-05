import React from 'react';

export function OurStory() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre Histoire</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Fondée en 2021, la Fromagerie Alioui est née d'une passion familiale pour l'art fromager. Notre voyage a commencé dans les montagnes tunisiennes, où nous avons découvert des recettes traditionnelles transmises de génération en génération.
              </p>
              <p>
                Ce qui a commencé comme une petite fromagerie artisanale s'est transformé en une entreprise respectée, tout en conservant les valeurs familiales et l'engagement envers la qualité qui nous définissent depuis le premier jour.
              </p>
              <p>
                Aujourd'hui, nous sommes fiers de perpétuer cette tradition tout en innovant pour créer des fromages qui allient savoir-faire ancestral et goûts contemporains.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1559561853-08451507cbe7?auto=format&fit=crop&w=800&q=80"
              alt="Notre atelier de fabrication"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-emerald-100 rounded-lg p-6 shadow-lg">
              <p className="text-4xl font-bold text-emerald-800">2+ ans</p>
              <p className="text-sm text-emerald-600">d'excellence fromagère</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}