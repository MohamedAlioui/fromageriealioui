import React from 'react';
import { Button } from './ui/Button';

export function Hero() {
  return (
    <div className="relative h-[600px]">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-3xl px-4">
          <h1 className="text-5xl font-bold text-white mb-6">
            Bienvenue à la Fromagerie Meriah
          </h1>
          <p className="text-xl text-white mb-8">
            Découvrez notre sélection de fromages artisanaux, fabriqués avec passion depuis 1997
          </p>
          <Button size="lg">
            Découvrir nos produits
          </Button>
        </div>
      </div>
    </div>
  );
}