<template>
  <div class="cart-header">
      <div class="header-inner">
        <a class="logo" href="#">
          <svg class="logo-icon" width="26" height="26" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <!-- стебли -->
            <path d="M8 14c0-4 3-6 4-8"/>
            <path d="M16 14c0-4-2-5-4-8"/>
            <!-- листик -->
            <path d="M12 6c1-2 3-2 3-2s0 2-1.5 3" fill="currentColor" stroke="none" opacity="0.5"/>
            <path d="M12 6c1-2 3-2 3-2s0 2-1.5 3"/>
            <!-- вишни -->
            <circle cx="8"  cy="17" r="3" fill="currentColor" stroke="none"/>
            <circle cx="16" cy="17" r="3" fill="currentColor" stroke="none"/>
            <!-- блик -->
            <circle cx="7"  cy="16" r="0.9" fill="white" stroke="none" opacity="0.5"/>
            <circle cx="15" cy="16" r="0.9" fill="white" stroke="none" opacity="0.5"/>
          </svg>
          <span class="logo-text"><b>МАМИН</b>&nbsp;САД</span>
        </a>

        <router-link :to="{ name: 'main' }" class="back-btn" aria-label="Вернуться в каталог">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          <span class="back-text">В каталог</span>
        </router-link>

        <h1 class="cart-title">
          Корзина
          <span class="cart-badge">{{ basket.headerBasket }} {{ textHeader }}</span>
        </h1>
      </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useBasket } from '../stores/basket.js';
const basket = useBasket();

const textHeader = computed(() => {
  const count = basket.headerBasket;

  if (count % 10 === 1 && count % 100 !== 11) return 'товар';
  if (count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 10 || count % 100 >= 20))
    return 'товара';
  return 'товаров';
});
</script>