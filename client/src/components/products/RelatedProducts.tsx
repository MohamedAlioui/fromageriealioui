import React from 'react';
import { useProducts } from '../../hooks/useProducts';
import { ProductCard } from '../ui/ProductCard';

interface RelatedProductsProps {
  currentProductId: number;
  category: string;
}

export function RelatedProducts({ currentProductId, category }: RelatedProductsProps) {
  const { products } = useProducts();
  
  const relatedProducts = products
    .filter(product => 
      product.id !== currentProductId && 
      product.category === category
    )
    .slice(0, 3);

  if (relatedProducts.length === 0) return null;

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Produits similaires</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedProducts.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}