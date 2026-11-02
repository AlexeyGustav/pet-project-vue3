<template>
  <div class="success-page">
    <main class="success-main">
      <!-- Иконка успеха -->
     <SucessIcon/>

      <h1 class="success-title">Заказ оформлен!</h1>
      <p class="success-subtitle">Оплата прошла успешно. Мы уже готовим ваш заказ к отправке.</p>

      <!-- Карточка заказа -->
      <OrderCard/>

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
