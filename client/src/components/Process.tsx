import React from 'react';
import { MilkIcon, CheeseIcon, AwardIcon, TruckIcon } from './icons';

const steps = [
  {
    icon: MilkIcon,
    title: "Sélection du Lait",
    description: "Nous sélectionnons le meilleur lait frais de nos fermes locales"
  },
  {
    icon: CheeseIcon,
    title: "Fabrication Artisanale",
    description: "Nos maîtres fromagers appliquent leur savoir-faire traditionnel"
  },
  {
    icon: AwardIcon,
    title: "Contrôle Qualité",
    description: "Chaque fromage est rigoureusement contrôlé avant distribution"
  },
  {
    icon: TruckIcon,
    title: "Livraison Fraîcheur",
    description: "Livraison rapide pour garantir une fraîcheur optimale"
  }
];

export function Process() {
  return (
    <section className="py-20 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre Processus de Fabrication</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            De la ferme à votre table, découvrez comment nous créons nos fromages artisanaux
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <step.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-emerald-200"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}