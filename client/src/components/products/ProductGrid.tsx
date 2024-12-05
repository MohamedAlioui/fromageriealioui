import React from 'react';
import { ProductCard } from '../ui/ProductCard';
import { ProductSkeleton } from './ProductSkeleton';
import { Product } from '../../types/product';
import { filterAndSortProducts } from '../../utils/productUtils';

interface ProductGridProps {
  products: Product[];
  isLoading: boolean;
  selectedCategory: string;
  sortBy: string;
}

export function ProductGrid({ products, isLoading, selectedCategory, sortBy }: ProductGridProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <ProductSkeleton key={i} />
        ))}
      </div>
    );
  }

  const filteredProducts = filterAndSortProducts(products, selectedCategory, sortBy);

  if (filteredProducts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Aucun produit trouvé</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}