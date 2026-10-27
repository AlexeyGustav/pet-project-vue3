<template>
  <div class="success-page">
    <!-- ─── Центральный блок ──────────────────────────── -->
    <main class="success-main">
      <!-- Иконка успеха -->
      <div class="success-icon-wrap">
        <div class="success-icon-ring success-icon-ring--outer"></div>
        <div class="success-icon-ring success-icon-ring--inner"></div>
        <div class="success-icon-circle">
          <svg class="success-check" width="36" height="36" viewBox="0 0 36 36" fill="none">
            <path
              d="M8 18L15 25L28 11"
              stroke="#fff"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>

      <h1 class="success-title">Заказ оформлен!</h1>
      <p class="success-subtitle">Оплата прошла успешно. Мы уже готовим ваш заказ к отправке.</p>

      <!-- Карточка заказа -->
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
          <span class="order-card-value order-card-value--bold"
            >{{ basket.lastOrder.total.toLocaleString('RU', 'ru') }} ₽</span
          >
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

      <!-- Действия -->
      <div class="success-actions">
        <router-link :to="{ name: 'main' }" class="btn-primary">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M3 4H4.5L7.5 13H13.5L15.5 6.5H6"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <circle cx="8" cy="15.5" r="1" stroke="currentColor" stroke-width="1.3" />
            <circle cx="12.5" cy="15.5" r="1" stroke="currentColor" stroke-width="1.3" />
          </svg>
          Вернуться в каталог
        </router-link>
      </div>

      <!-- Подпись -->
      <p class="success-note">Подтверждение отправлено на вашу электронную почту</p>
    </main>
  </div>
</template>

<script setup>
import { useBasket } from '../stores/basket.js';
import { usePayment } from '../stores/payment.js';

const basket = useBasket();
const pay = usePayment();

const today = new Date();
const isoDate = today.toISOString().split('T')[0];
</script>

<style scoped></style>
