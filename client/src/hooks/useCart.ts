import { create } from 'zustand';
import { CartItem } from '../types/cart';

interface CartStore {
  items: CartItem[];
  isLoading: boolean;
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  updateWeight: (id: number, weight: number) => void;
  clearCart: () => void;
}

export const useCart = create<CartStore>((set) => ({
  items: [
    {
      id: 1,
      name: "Fromage Amir Semi Curé",
      price: "27.75",
      image: "https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=800&q=80",
      quantity: 2,
      weight: 0.5
    },
    {
      id: 2,
      name: "Mozzarella Centra MERIAH",
      price: "8.15",
      image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=800&q=80",
      quantity: 1,
      weight: 1
    }
  ],
  isLoading: false,
  addItem: (item) => 
    set((state) => ({
      items: [...state.items, item]
    })),
  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id)
    })),
  updateQuantity: (id, quantity) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    })),
  updateWeight: (id, weight) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, weight } : item
      )
    })),
  clearCart: () => set({ items: [] })
}));