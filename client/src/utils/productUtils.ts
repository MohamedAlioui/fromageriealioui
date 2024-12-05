import { Product } from '../types/product';

export function filterAndSortProducts(
  products: Product[],
  category: string,
  sortBy: string
): Product[] {
  let filtered = [...products];

  // Apply category filter
  if (category !== 'all') {
    if (category === 'nouveau') {
      filtered = filtered.filter(product => product.isNew);
    } else {
      filtered = filtered.filter(
        product => product.category.toLowerCase() === category
      );
    }
  }

  // Apply sorting
  switch (sortBy) {
    case 'newest':
      filtered.sort((a, b) => (a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1));
      break;
    case 'price-asc':
      filtered.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      break;
    case 'price-desc':
      filtered.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
      break;
    default:
      // 'featured' - keep original order
      break;
  }

  return filtered;
}