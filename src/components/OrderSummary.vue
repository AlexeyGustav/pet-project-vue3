<template>
  <aside class="checkout-summary">
        <h3 class="summary-title">Ваш заказ</h3>

        <ul class="summary-items" v-for="card in basket.items">
          <li class="summary-item">
            <div class="summary-item-img-wrap">
              <img :src="card.img" alt="" class="summary-item-img" />
            </div>
            <div class="summary-item-info">
              <p class="summary-item-name">{{ card.description }}</p>
              <p class="summary-item-qty">{{ card.quantity }} шт.</p>
            </div>
            <p class="summary-item-price">{{ card.newPrice }}</p>
          </li>
        </ul>

        <div class="summary-divider"></div>

        <ul class="summary-lines">
          <li class="summary-line">
            <span class="summary-label">Доставка</span>
            <span class="summary-value summary-value--green">Бесплатно</span>
          </li>
        </ul>

        <div class="summary-total">
          <span class="summary-total-label">К оплате</span>
          <span class="summary-total-price"
            >{{ basket.totalSum.toLocaleString('RU', 'ru') }} ₽</span
          >
        </div>
      </aside>
</template>

<script setup>
import { useBasket } from '../stores/basket.js';
const basket = useBasket();
</script>
