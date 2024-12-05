export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  rating: number;
  isNew?: boolean;
  inStock?: boolean;
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Fromage Amir Semi Curé",
    price: "27.75 TND",
    image: "https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=800&q=80",
    rating: 5,
    isNew: true,
    category: "Semi-curé"
  },
  {
    id: 2,
    name: "Mozzarella Centra MERIAH",
    price: "8.15 TND",
    image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=800&q=80",
    rating: 4,
    category: "Mozzarella"
  },
  {
    id: 3,
    name: "Mozzarella Duo",
    price: "8.60 TND",
    image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=800&q=80",
    rating: 5,
    inStock: false,
    category: "Mozzarella"
  },
  {
    id: 4,
    name: "Gouda à l'ail noir",
    price: "25.75 TND",
    image: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=800&q=80",
    rating: 4,
    isNew: true,
    category: "Gouda"
  }
];