import React from 'react';
import { LegalNotice } from '../components/legal/LegalNotice';
import { PrivacyPolicy } from '../components/legal/PrivacyPolicy';
import { TermsConditions } from '../components/legal/TermsConditions';

export function LegalPage() {
  return (
    <main className="bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Informations Légales</h1>
        <div className="space-y-16">
          <LegalNotice />
          <PrivacyPolicy />
          <TermsConditions />
        </div>
      </div>
    </main>
  );
}