<template>
  <header class="site-header">
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

      <form  class="search" role="search" @submit.prevent>
        <svg class="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          class="search-input"
          type="search"
          :value="search.input"
          @input="search.writeInput($event)"
          @focus="search.focusInput"
          @blur="search.blurInput"
          placeholder="Поиск товаров…"
        />
      </form>

      <a class="account-btn" href="#" aria-label="Личный кабинет">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
             stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
        <span class="account-text">Войти</span>
      </a>

      <router-link :to="{'name': 'basket'}" class="cart-btn" >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="9" cy="21" r="1"/>
          <circle cx="20" cy="21" r="1"/>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
        </svg>
        Корзина
        <span class="cart-count">{{ basket.headerBasket }}</span>
      </router-link>
    </div>
  </header>
</template>

<script setup>
import { useBasket } from '../stores/basket.js';
import { useSearch } from '../stores/search.js';

const basket = useBasket();
const search = useSearch();

</script>

<style lang="scss" scoped></style>