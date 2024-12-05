import React from 'react';
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon } from './icons';
import { Button } from './ui/Button';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contactez-nous</h2>
            <p className="text-lg text-gray-600 mb-8">
              Une question ? N'hésitez pas à nous contacter. Notre équipe est là pour vous répondre.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPinIcon className="w-6 h-6 text-emerald-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Adresse</h3>
                  <p className="text-gray-600">Route de Tunis, KM 5, Sfax, Tunisie</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <PhoneIcon className="w-6 h-6 text-emerald-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Téléphone</h3>
                  <p className="text-gray-600">+216 74 123 456</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MailIcon className="w-6 h-6 text-emerald-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">contact@fromagerie-alioui.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <ClockIcon className="w-6 h-6 text-emerald-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Horaires d'ouverture</h3>
                  <p className="text-gray-600">Lun - Sam: 8h00 - 19h00</p>
                  <p className="text-gray-600">Dimanche: Fermé</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                ></textarea>
              </div>

              <Button size="lg" className="w-full">
                Envoyer le message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}