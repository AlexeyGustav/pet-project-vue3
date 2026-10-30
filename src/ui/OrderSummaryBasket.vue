<template>
<aside class="cart-summary">
        <h3 class="summary-title">Итого</h3>

        <ul class="summary-lines">
          <li class="summary-line">
            <span class="summary-label">Товаров</span>
            <span class="summary-value">{{ sumItemsBasket() }} шт.</span>
          </li>
          <li class="summary-line">
            <span class="summary-label">Доставка</span>
            <span class="summary-value summary-value--free">Бесплатно</span>
          </li>
        </ul>

        <div class="summary-total">
          <span class="summary-total-label">К оплате</span>
          <span class="summary-total-price">{{ (basket.totalSum).toLocaleString("RU", "ru") }} ₽</span>
        </div>

        <router-link :to="{ name: 'payment' }" class="checkout-btn"> Оформить заказ </router-link>
      </aside>
</template>

<script setup>
import { useBasket } from '../stores/basket.js';

const basket = useBasket();

// Количество товаров в корзине
function sumItemsBasket() {
  return basket.items.reduce((sum, item) => {
    return sum + item.quantity;
  }, 0);
}
</script>