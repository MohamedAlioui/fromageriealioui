import React from 'react';

export function TermsConditions() {
  return (
    <section className="bg-white rounded-lg shadow-sm p-8">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Conditions Générales</h2>
      <div className="prose prose-emerald max-w-none">
        <h3 className="text-lg font-medium text-gray-900 mt-6 mb-4">Commandes</h3>
        <p className="text-gray-600 mb-4">
          Toute commande passée sur notre site implique l'acceptation intégrale de nos conditions générales de vente.
        </p>

        <h3 className="text-lg font-medium text-gray-900 mt-6 mb-4">Prix et Paiement</h3>
        <p className="text-gray-600 mb-4">
          Les prix sont indiqués en Dinars Tunisiens (TND) toutes taxes comprises. Le paiement est sécurisé et peut être effectué par carte bancaire ou à la livraison.
        </p>

        <h3 className="text-lg font-medium text-gray-900 mt-6 mb-4">Livraison</h3>
        <p className="text-gray-600 mb-4">
          Nous livrons dans toute la Tunisie. Les délais de livraison sont donnés à titre indicatif et peuvent varier selon la zone géographique.
        </p>

        <h3 className="text-lg font-medium text-gray-900 mt-6 mb-4">Retours et Remboursements</h3>
        <p className="text-gray-600">
          En cas de produit défectueux, nous procédons à un échange ou un remboursement dans les 14 jours suivant la réception.
        </p>
      </div>
    </section>
  );
}