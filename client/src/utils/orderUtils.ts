export function calculateOrderTotal(price: string, quantity: number, weight: number) {
  const basePrice = parseFloat(price.replace(/[^\d.]/g, ''));
  const subtotal = basePrice * quantity * weight;
  const shipping = subtotal >= 100 ? 0 : 7;
  const total = subtotal + shipping;

  return {
    subtotal,
    shipping,
    total
  };
}

export function generateOrderNumber() {
  const date = new Date();
  const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  return `CMD${date.getFullYear()}${(date.getMonth() + 1).toString().padStart(2, '0')}${random}`;
}