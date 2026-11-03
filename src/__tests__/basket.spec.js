import { describe, it, expect, beforeEach } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useBasket } from '../stores/basket.js';

describe('тесты стора корзины', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('посчёт итоговой суммы', () => {
    const items = [
      {
        id: 1,
        price: 400,
        quantity: 2,
      },
      {
        id: 2,
        price: 420,
        quantity: 1,
      },
    ];

    const basket = useBasket();
    expect(basket.totalSum).toBe(0);

    basket.items = items;
    expect(basket.totalSum).toBe(1220);
  });
  it('Добавление и удаление товаров из корзины', () => {
    const product = {
      id: 1,
      price: 400,
      quantity: 2,
    };
    const basket = useBasket();
    basket.addBasket(product);

    expect(basket.items).toHaveLength(1);
    expect(basket.items[0].quantity).toBe(1);

    basket.addBasket(product);
    expect(basket.items[0].quantity).toBe(2);

    basket.plusCounter(product);
    expect(basket.items[0].quantity).toBe(3);

    basket.minusCounter(product);
    expect(basket.items[0].quantity).toBe(2);

    basket.deleteCard(product);
    expect(basket.items).toHaveLength(0);
  });
});
