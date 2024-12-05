import React from 'react';

export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <img 
        src="/src/assets/images/logo.png" 
        alt="Fromagerie Logo" 
        className="h-16 w-16"
      />
      <div className="flex flex-col">
        <span className="text-2xl font-bold text-emerald-700">Fromagerie</span>
        <span className="text-xl font-script text-amber-600">Alioui</span>
      </div>
    </div>
  );
}