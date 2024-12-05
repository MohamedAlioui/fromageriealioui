import React from 'react';
import { Button } from './ui/Button';

export function About() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Notre Histoire" 
              className="rounded-lg shadow-lg"
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6">Notre Histoire</h2>
            <p className="text-gray-600 mb-6">
              Chez Meriah, la passion du fromage c'est une histoire de famille. Créé en 1997, par Mr Lotfi Meriah, la fromagerie Meriah est connue pour ses produits faits à 100% de lait de ferme, fabriqués par Tunifrom.
            </p>
            <p className="text-gray-600 mb-6">
              Cultivés dans nos propres fermes, nos fromages sont authentiques et préparés en suivant toutes les étapes de production, de la matière première jusqu'à l'affinage.
            </p>
            <Button>
              En savoir plus
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}