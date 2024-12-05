import React from 'react';
import { FaqSection } from '../components/faq/FaqSection';
import { ContactSection } from '../components/faq/ContactSection';

export function FaqPage() {
  return (
    <main className="bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Questions Fréquentes</h1>
          <p className="text-lg text-gray-600">
            Trouvez rapidement des réponses à vos questions
          </p>
        </div>
        <div className="space-y-12">
          <FaqSection />
          <ContactSection />
        </div>
      </div>
    </main>
  );
}