import React from 'react';

export function ProductSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
      <div className="h-48 bg-gray-200" />
      <div className="p-4">
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-4" />
        <div className="flex items-center justify-between">
          <div className="h-4 bg-gray-200 rounded w-1/4" />
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-4 h-4 bg-gray-200 rounded-full" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}