import React from 'react';
import { Mail, Phone, MessageSquare } from 'lucide-react';

export function ContactSection() {
  return (
    <section className="bg-white rounded-lg shadow-sm p-8">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Besoin d'aide supplémentaire ?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center p-6 rounded-lg bg-emerald-50">
          <Mail className="w-8 h-8 text-emerald-600 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Email</h3>
          <p className="text-gray-600">
            Écrivez-nous à<br />
            <a href="mailto:contact@fromagerie-alioui.com" className="text-emerald-600 hover:underline">
              contact@fromagerie-alioui.com
            </a>
          </p>
        </div>

        <div className="flex flex-col items-center text-center p-6 rounded-lg bg-emerald-50">
          <Phone className="w-8 h-8 text-emerald-600 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Téléphone</h3>
          <p className="text-gray-600">
            Appelez-nous au<br />
            <a href="tel:+21674123456" className="text-emerald-600 hover:underline">
              +216 74 123 456
            </a>
          </p>
        </div>

        <div className="flex flex-col items-center text-center p-6 rounded-lg bg-emerald-50">
          <MessageSquare className="w-8 h-8 text-emerald-600 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Chat</h3>
          <p className="text-gray-600">
            Discutez en direct avec<br />notre service client
          </p>
        </div>
      </div>
    </section>
  );
}