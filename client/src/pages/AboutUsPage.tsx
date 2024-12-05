import React from 'react';
import { OurStory } from '../components/about/OurStory';
import { OurValues } from '../components/about/OurValues';
import { OurTeam } from '../components/about/OurTeam';
import { Timeline } from '../components/about/Timeline';

export function AboutUsPage() {
  return (
    <main className="bg-gray-50">
      <div className="relative h-[300px] bg-emerald-900">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Qui Sommes Nous
            </h1>
            <p className="text-lg text-gray-100 max-w-2xl">
              Découvrez l'histoire et les valeurs qui font de la Fromagerie Alioui une référence dans l'art fromager.
            </p>
          </div>
        </div>
      </div>
      
      <OurStory />
      <OurValues />
      <Timeline />
      <OurTeam />
    </main>
  );
}