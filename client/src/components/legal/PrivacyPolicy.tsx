import React from 'react';

export function PrivacyPolicy() {
  return (
    <section className="bg-white rounded-lg shadow-sm p-8">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Politique de Confidentialité</h2>
      <div className="prose prose-emerald max-w-none">
        <h3 className="text-lg font-medium text-gray-900 mt-6 mb-4">Collecte des Données</h3>
        <p className="text-gray-600 mb-4">
          Nous collectons uniquement les données nécessaires au traitement de vos commandes et à l'amélioration de nos services.
        </p>

        <h3 className="text-lg font-medium text-gray-900 mt-6 mb-4">Utilisation des Données</h3>
        <ul className="list-disc pl-6 text-gray-600 mb-4">
          <li>Traitement des commandes</li>
          <li>Service client</li>
          <li>Communication marketing (avec votre consentement)</li>
          <li>Amélioration de nos services</li>
        </ul>

        <h3 className="text-lg font-medium text-gray-900 mt-6 mb-4">Protection des Données</h3>
        <p className="text-gray-600 mb-4">
          Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données personnelles contre tout accès non autorisé.
        </p>

        <h3 className="text-lg font-medium text-gray-900 mt-6 mb-4">Vos Droits</h3>
        <p className="text-gray-600">
          Vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles. Pour exercer ces droits, contactez-nous à privacy@fromagerie-alioui.com.
        </p>
      </div>
    </section>
  );
}