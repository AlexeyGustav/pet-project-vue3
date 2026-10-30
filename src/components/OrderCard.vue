<template>
  <div class="order-card">
    <div class="order-card-row">
      <span class="order-card-label">Номер заказа</span>
      <span class="order-card-value order-card-value--accent">#ORD-20241023-8847</span>
    </div>
    <div class="order-card-divider"></div>
    <div class="order-card-row">
      <span class="order-card-label">Дата оформления</span>
      <span class="order-card-value">{{ isoDate }}</span>
    </div>
    <div class="order-card-divider"></div>
    <div class="order-card-row">
      <span class="order-card-label">Сумма оплаты</span>
      <span class="order-card-value order-card-value--bold">{{ basket.lastOrder }} ₽</span>
    </div>
    <div class="order-card-divider"></div>
    <div class="order-card-row">
      <span class="order-card-label">Способ оплаты</span>
      <span class="order-card-value">
        {{ pay.typePay }}
      </span>
    </div>
    <div class="order-card-divider"></div>
    <div class="order-card-row order-card-row--status">
      <span class="order-card-label">Статус</span>
      <span class="status-badge">
        <span class="status-dot"></span>
        Подтверждён
      </span>
    </div>
  </div>
</template>

<script setup>
import { usePayment } from '../stores/payment.js';
import { ref } from 'vue';
import { useBasket } from '../stores/basket.js';

const pay = usePayment();
const basket = useBasket();

const copySum = ref('');
copySum.value = basket.totalSum.toLocaleString('RU', 'ru');

const today = new Date();
const isoDate = today.toISOString().split('T')[0];
</script>
