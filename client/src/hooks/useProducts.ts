import { useState, useEffect } from 'react';
import { products as initialProducts } from '../data/products';
import { Product } from '../types/product';

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const loadProducts = async () => {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      setProducts(initialProducts);
      setIsLoading(false);
    };

    loadProducts();
  }, []);

  return { products, isLoading };
}