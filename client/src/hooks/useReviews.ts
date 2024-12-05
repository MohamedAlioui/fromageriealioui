import { useState, useEffect } from 'react';
import { Review } from '../types/review';
import { reviews as initialReviews } from '../data/reviews';

export function useReviews(productId: number) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      setIsLoading(true);
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 500));
        setReviews(initialReviews);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, [productId]);

  return { reviews, isLoading };
}