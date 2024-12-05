export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  rating: number;
  isNew?: boolean;
  category: string;
  description?: string;
}