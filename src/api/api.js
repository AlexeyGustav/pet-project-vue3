export async function getProducts() {
  const res = await fetch('http://localhost:5173/items.json');

  if (!res.ok) {
    throw new Error(`HTTP ${res.status}: ${res.statusText}`);
  }

  return res.json();
}