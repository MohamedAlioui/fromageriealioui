import React from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Comment conserver nos fromages ?",
    answer: "Nos fromages doivent être conservés au réfrigérateur entre 4°C et 8°C. Pour une dégustation optimale, sortez-les 30 minutes avant la consommation."
  },
  {
    question: "Quels sont les délais de livraison ?",
    answer: "Les livraisons sont effectuées sous 24-48h pour Sfax et 2-4 jours pour le reste de la Tunisie."
  },
  {
    question: "Proposez-vous des fromages sans lactose ?",
    answer: "Oui, nous proposons une gamme de fromages sans lactose. Consultez la section 'Produits' pour plus de détails."
  },
  {
    question: "Comment passer une commande en gros ?",
    answer: "Pour les commandes professionnelles, contactez notre service commercial au +216 74 123 456 ou par email à pro@fromagerie-alioui.com"
  }
];

export function FaqSection() {
  return (
    <div className="space-y-6">
      {faqs.map((faq, index) => (
        <details
          key={index}
          className="group bg-white rounded-lg shadow-sm"
        >
          <summary className="flex justify-between items-center cursor-pointer p-6">
            <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
            <ChevronDown className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180" />
          </summary>
          <div className="px-6 pb-6">
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}