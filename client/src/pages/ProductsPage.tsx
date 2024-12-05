import React, { useState } from 'react';
import { ProductGrid } from '../components/products/ProductGrid';
import { ProductFilters } from '../components/products/ProductFilters';
import { ProductSort } from '../components/products/ProductSort';
import { useProducts } from '../hooks/useProducts';
import { FilterIcon } from 'lucide-react';

export function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { products, isLoading } = useProducts();

  return (
    <main className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Nos Produits</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez notre sélection de fromages artisanaux, fabriqués avec passion
          </p>
        </div>

        {/* Mobile Filter Button */}
        <div className="lg:hidden mb-6">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center space-x-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200"
          >
            <FilterIcon className="w-5 h-5" />
            <span>Filtres</span>
          </button>
        </div>

        <div className="flex flex-col lg:flex-row lg:gap-x-8">
          {/* Mobile Filter Sidebar */}
          <aside
            className={`
              lg:hidden fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out
              ${isFilterOpen ? 'translate-x-0' : '-translate-x-full'}
            `}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsFilterOpen(false)} />
            <div className="relative w-4/5 max-w-xs bg-white h-full p-6">
              <button
                onClick={() => setIsFilterOpen(false)}
                className="absolute top-4 right-4 text-gray-500"
              >
                ✕
              </button>
              <ProductFilters
                selectedCategory={selectedCategory}
                onCategoryChange={(category) => {
                  setSelectedCategory(category);
                  setIsFilterOpen(false);
                }}
              />
            </div>
          </aside>

          {/* Desktop Filter Sidebar */}
          <aside className="hidden lg:block lg:w-64">
            <ProductFilters
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </aside>

          <div className="flex-1">
            <div className="flex justify-end mb-6">
              <ProductSort value={sortBy} onChange={setSortBy} />
            </div>

            <ProductGrid
              products={products}
              isLoading={isLoading}
              selectedCategory={selectedCategory}
              sortBy={sortBy}
            />
          </div>
        </div>
      </div>
    </main>
  );
}