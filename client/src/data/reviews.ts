import { Review } from '../types/review';

export const reviews: Review[] = [
  {
    id: 1,
    user: {
      id: '1',
      name: 'Sarah B.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80'
    },
    rating: 5,
    comment: "Un fromage exceptionnel ! Le goût est parfaitement équilibré et la texture est crémeuse à souhait. Je le recommande vivement pour les plateaux de fromages.",
    date: '2024-02-15',
    helpful: 12,
    images: [
      'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=200&q=80',
      'https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=200&q=80'
    ]
  },
  {
    id: 2,
    user: {
      id: '2',
      name: 'Ahmed M.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80'
    },
    rating: 4,
    comment: "Très bon produit, mais le prix est un peu élevé. La qualité est au rendez-vous cependant.",
    date: '2024-02-10',
    helpful: 8
  },
  {
    id: 3,
    user: {
      id: '3',
      name: 'Marie L.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80'
    },
    rating: 5,
    comment: "Je suis cliente régulière et je ne suis jamais déçue. La qualité est constante et le service est impeccable.",
    date: '2024-02-05',
    helpful: 15
  }
];