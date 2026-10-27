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

<style lang="scss" scoped>


.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: #fff;
  border-bottom: 1px solid #e4e4df;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.06);
}

.header-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  height: 64px;
  display: flex;
  align-items: center;
  gap: 24px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: #1a1a18;
  font-family: 'Raleway', sans-serif;
  font-size: 1.15rem;
  font-weight: 700;
  letter-spacing: -0.2px;
  white-space: nowrap;
  flex-shrink: 0;

  .logo-icon {
    color: #2d6a4f;
  }

  .logo-text b {
    color: #2d6a4f;
    font-weight: 700;
  }
}

.search {
  position: relative;
  flex: 1;
  max-width: 480px;
  display: flex;
  align-items: center;
  margin-left: auto;
}

.search-icon {
  position: absolute;
  left: 14px;
  color: #9a9a92;
  pointer-events: none;
}

.search-input {
  width: 100%;
  height: 40px;
  padding: 0 16px 0 40px;
  background: #f7f7f5;
  border: 1px solid #e4e4df;
  border-radius: 10px;
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: #1a1a18;
  outline: none;
  transition: border-color 0.15s, background 0.15s, box-shadow 0.15s;

  &::placeholder {
    color: #9a9a92;
  }

  &:hover {
    border-color: #d5d5cd;
  }

  &:focus {
    background: #fff;
    border-color: #2d6a4f;
    box-shadow: 0 0 0 3px rgba(45, 106, 79, 0.12);
  }
}

.account-btn {
  display: flex;
  align-items: center;
  gap: 7px;
  color: #4a4a44;
  text-decoration: none;
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 8px 12px;
  border-radius: 8px;
  white-space: nowrap;
  flex-shrink: 0;
  transition: color 0.15s, background 0.15s;

  &:hover {
    color: #2d6a4f;
    background: #f0f5f1;
  }
}

.cart-btn {
  display: flex;
  align-items: center;
  gap: 7px;
  background: #2d6a4f;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s;
  white-space: nowrap;
  flex-shrink: 0;

  &:hover {
    background: #1b4332;
  }
}

.cart-count {
  background: #fff;
  color: #2d6a4f;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0 6px;
  min-width: 20px;
  text-align: center;
}

@media (max-width: 640px) {
  .header-inner {
    gap: 8px;
    padding: 0 16px;
  }

  .logo .logo-text {
    display: none;
  }

  .search {
    max-width: none;
  }

  .account-btn {
    padding: 8px;

    .account-text {
      display: none;
    }
  }

  .cart-btn {
    padding: 8px 10px;
    font-size: 0;
    gap: 4px;

    svg {
      width: 18px;
      height: 18px;
    }

    .cart-count {
      font-size: 0.7rem;
    }
  }
}
</style>