import { describe, it, expect, beforeEach } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useBasket } from '../stores/basket.js';

describe('тесты стора корзины', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  const product = {
    id: 1,
    price: 400,
    quantity: 2,
  };

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
  it('Добавление товаров в корзину', () => {
    const basket = useBasket();
    basket.addBasket(product);

    expect(basket.items).toHaveLength(1);
    expect(basket.items[0].quantity).toBe(1);

    basket.addBasket(product);
    expect(basket.items[0].quantity).toBe(2);

    basket.plusCounter(product);
    expect(basket.items[0].quantity).toBe(3);
  });
  it('Убавление товаров из корзины', () => {
    const basket = useBasket();
    basket.addBasket(product);

    expect(basket.items).toHaveLength(1);
    expect(basket.items[0].quantity).toBe(1);

    basket.addBasket(product);
    expect(basket.items[0].quantity).toBe(2);

    basket.minusCounter(product);
    expect(basket.items[0].quantity).toBe(1);
  });
  it('Удаление товара из корзины', () => {
    const basket = useBasket();
    basket.addBasket(product);

    expect(basket.items).toHaveLength(1);
    expect(basket.items[0].quantity).toBe(1);

    basket.deleteCard(product);
    expect(basket.items).toHaveLength(0);
  });
});
