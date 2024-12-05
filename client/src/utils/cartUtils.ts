import { CartItem } from '../types/cart';

export function calculateCartTotal(items: CartItem[]) {
  const subtotal = items.reduce((sum, item) => {
    const price = parseFloat(item.price);
    return sum + price * item.quantity * item.weight;
  }, 0);

  const shipping = subtotal >= 100 ? 0 : 7;
  const total = subtotal + shipping;

  return {
    subtotal,
    shipping,
    total
  };
}