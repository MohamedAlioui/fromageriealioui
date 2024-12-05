import React from 'react';
import { Leaf, Heart, Award, Recycle } from 'lucide-react';

const values = [
  {
    icon: Leaf,
    title: "Durabilité",
    description: "Nous nous engageons à utiliser des pratiques durables et respectueuses de l'environnement."
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Chaque fromage est fabriqué avec amour et attention aux détails."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Nous visons l'excellence dans chaque aspect de notre production."
  },
  {
    icon: Recycle,
    title: "Tradition",
    description: "Nous perpétuons les traditions fromagères tout en innovant."
  }
];

export function OurValues() {
  return (
    <section className="py-20 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Valeurs</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Les principes qui guident chacune de nos actions et façonnent notre identité
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <value.icon className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}