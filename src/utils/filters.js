export function filterByPrice(product, min, max) {
  return product.filter((p) => p.price >= min && p.price <= max);
}

export function matchesSearch(product, query) {
  const q = query.trim().toLowerCase();
  return product.description.toLowerCase().includes(q);
}

