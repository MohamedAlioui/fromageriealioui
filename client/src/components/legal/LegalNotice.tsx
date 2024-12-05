import React from 'react';

export function LegalNotice() {
  return (
    <section className="bg-white rounded-lg shadow-sm p-8">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Mentions Légales</h2>
      <div className="prose prose-emerald max-w-none">
        <h3 className="text-lg font-medium text-gray-900 mt-6 mb-4">Éditeur du Site</h3>
        <p className="text-gray-600 mb-4">
          Fromagerie Alioui SARL<br />
          Route de Tunis, KM 5<br />
          3000 Sfax, Tunisie<br />
          Tél : +216 74 123 456<br />
          Email : contact@fromagerie-alioui.com
        </p>

        <h3 className="text-lg font-medium text-gray-900 mt-6 mb-4">Directeur de la Publication</h3>
        <p className="text-gray-600 mb-4">
          M. Ahmed Alioui, Gérant
        </p>

        <h3 className="text-lg font-medium text-gray-900 mt-6 mb-4">Hébergement</h3>
        <p className="text-gray-600 mb-4">
          Le site www.fromagerie-alioui.com est hébergé par :<br />
          OVH SAS<br />
          2 rue Kellermann<br />
          59100 Roubaix - France
        </p>

        <h3 className="text-lg font-medium text-gray-900 mt-6 mb-4">Propriété Intellectuelle</h3>
        <p className="text-gray-600">
          L'ensemble du contenu de ce site est protégé par le droit d'auteur. Toute reproduction, même partielle, est interdite sans autorisation préalable.
        </p>
      </div>
    </section>
  );
}