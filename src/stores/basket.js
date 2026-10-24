import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useBasket = defineStore('basket', () => {
  const items = ref([]);

  // Корзина в хедере
  const headerBasket = computed(() => items.value.length);

  function addBasket(item) {
    const existing = items.value.find((p) => p.id === item.id);

    if (existing) {
      existing.quantity += 1;
    } else {
      items.value.push({ ...item, quantity: 1 });
    }
  }
  // Убавить товар
  function minusItemProduct(product) {
    const existing = items.value.find((p) => p.id === product.id);
    if (!existing) return;
    if (existing.quantity > 1) {
      existing.quantity -= 1;
    } else {
      items.value = items.value.filter((p) => p.id !== product.id);
    }
  }
  // Добавить товар
  function increaseQuantity(product) {
    const existing = items.value.find((p) => p.id === product.id);
    if (existing) existing.quantity += 1;
  }

  return { items, headerBasket, addBasket, minusItemProduct, increaseQuantity };
});
