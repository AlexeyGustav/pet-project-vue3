export async function getProducts() {
  const res = await fetch('./items.json');

  if (!res.ok) {
    throw new Error(`HTTP ${res.status}: ${res.statusText}`);
  }

  return res.json();
}