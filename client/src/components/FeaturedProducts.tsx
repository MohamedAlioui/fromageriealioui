import React, { useState } from 'react';
import { ProductGrid } from './products/ProductGrid';
import { ProductFilters } from './products/ProductFilters';
import { ProductSort } from './products/ProductSort';
import { useProducts } from '../hooks/useProducts';

export function FeaturedProducts() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');
  const { products, isLoading } = useProducts();

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Nos Fromages</h2>
            <p className="text-gray-600">Découvrez notre sélection de fromages artisanaux</p>
          </div>
          <div className="mt-4 md:mt-0">
            <ProductSort value={sortBy} onChange={setSortBy} />
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-4 lg:gap-x-8">
          <ProductFilters
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
          
          <div className="mt-6 lg:mt-0 lg:col-span-3">
            <ProductGrid
              products={products}
              isLoading={isLoading}
              selectedCategory={selectedCategory}
              sortBy={sortBy}
            />
          </div>
        </div>
      </div>
    </section>
  );
}