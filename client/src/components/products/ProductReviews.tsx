import React, { useState } from 'react';
import { Star, ThumbsUp, Image as ImageIcon } from 'lucide-react';
import { Review } from '../../types/review';
import { Button } from '../ui/Button';
import { ReviewForm } from './ReviewForm';

interface ProductReviewsProps {
  productId: number;
  reviews: Review[];
}

export function ProductReviews({ productId, reviews }: ProductReviewsProps) {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'positive' | 'negative'>('all');

  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
  
  const filteredReviews = reviews.filter(review => {
    if (selectedFilter === 'positive') return review.rating >= 4;
    if (selectedFilter === 'negative') return review.rating < 4;
    return true;
  });

  const ratingCounts = reviews.reduce((acc, review) => {
    acc[review.rating] = (acc[review.rating] || 0) + 1;
    return acc;
  }, {} as Record<number, number>);

  return (
    <section className="mt-16 bg-white rounded-lg shadow-lg p-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Avis clients</h2>
        <Button onClick={() => setShowReviewForm(true)}>
          Donner mon avis
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Rating Summary */}
        <div className="col-span-1">
          <div className="text-center">
            <div className="text-5xl font-bold text-gray-900 mb-2">
              {averageRating.toFixed(1)}
            </div>
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.round(averageRating)
                      ? 'text-amber-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <p className="text-gray-600">
              Basé sur {reviews.length} avis
            </p>
          </div>

          <div className="space-y-2 mt-6">
            {[5, 4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center">
                <div className="w-12 text-sm text-gray-600">{rating} étoiles</div>
                <div className="flex-1 mx-3 h-2 rounded-full bg-gray-200">
                  <div
                    className="h-2 rounded-full bg-amber-400"
                    style={{
                      width: `${((ratingCounts[rating] || 0) / reviews.length) * 100}%`
                    }}
                  />
                </div>
                <div className="w-12 text-sm text-gray-600">
                  {ratingCounts[rating] || 0}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews List */}
        <div className="lg:col-span-2">
          <div className="flex gap-2 mb-6">
            <Button
              variant={selectedFilter === 'all' ? 'primary' : 'secondary'}
              size="sm"
              onClick={() => setSelectedFilter('all')}
            >
              Tous
            </Button>
            <Button
              variant={selectedFilter === 'positive' ? 'primary' : 'secondary'}
              size="sm"
              onClick={() => setSelectedFilter('positive')}
            >
              Positifs
            </Button>
            <Button
              variant={selectedFilter === 'negative' ? 'primary' : 'secondary'}
              size="sm"
              onClick={() => setSelectedFilter('negative')}
            >
              Négatifs
            </Button>
          </div>

          <div className="space-y-6">
            {filteredReviews.map((review) => (
              <div key={review.id} className="border-b border-gray-200 pb-6">
                <div className="flex items-center mb-4">
                  <img
                    src={review.user.avatar || 'https://via.placeholder.com/40'}
                    alt={review.user.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="ml-4">
                    <h4 className="font-medium text-gray-900">
                      {review.user.name}
                    </h4>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating
                              ? 'text-amber-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="ml-2 text-sm text-gray-600">
                        {review.date}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{review.comment}</p>

                {review.images && review.images.length > 0 && (
                  <div className="flex gap-2 mb-4">
                    {review.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Review image ${index + 1}`}
                        className="w-20 h-20 object-cover rounded"
                      />
                    ))}
                  </div>
                )}

                <button
                  className="flex items-center text-sm text-gray-600 hover:text-emerald-600"
                  onClick={() => {}}
                >
                  <ThumbsUp className="w-4 h-4 mr-1" />
                  Utile ({review.helpful})
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ReviewForm
        isOpen={showReviewForm}
        onClose={() => setShowReviewForm(false)}
        productId={productId}
      />
    </section>
  );
}