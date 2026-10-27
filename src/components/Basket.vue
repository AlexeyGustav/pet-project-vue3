<template>
  <div class="cart-page">
    <header class="cart-header">
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
    </header>

    <div v-if="basket.headerBasket" class="cart-body">
      <!-- Список товаров -->
      <section class="cart-items">
        <!-- Товар -->
        <div v-for="card in basket.items" :key="card.id">
          <article class="cart-item">
            <div class="item-image-wrap">
              <img :src="card.img" alt="Часы Minimalist Watch" class="item-image" />
            </div>

            <div class="item-info">
              <p class="item-category">{{ card.title }}</p>
              <h2 class="item-name">{{ card.description }}</h2>
              <p class="item-sku">{{ sliceText(card.text) }}</p>
            </div>

            <div class="item-controls">
              <div class="qty-control">
                <button
                  class="qty-btn"
                  aria-label="Уменьшить количество"
                  @click="basket.minusCounter(card)"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M2 7H12"
                      stroke="currentColor"
                      stroke-width="1.75"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
                <span class="qty-value">{{ card.quantity }}</span>
                <button
                  class="qty-btn"
                  aria-label="Увеличить количество"
                  @click="basket.plusCounter(card)"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M7 2V12M2 7H12"
                      stroke="currentColor"
                      stroke-width="1.75"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
              </div>

              <p class="item-price">{{ sumItem(card.price, card.quantity) }} ₽</p>

              <button
                @click="basket.deleteCard(card)"
                class="item-remove"
                aria-label="Удалить из корзины"
              >
                <svg width="22" height="22" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M3 4.5H15M7.5 4.5V3H10.5V4.5M6 4.5V14.25C6 14.664 6.336 15 6.75 15H11.25C11.664 15 12 14.664 12 14.25V4.5"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </article>
          <div class="item-divider"></div>
        </div>
      </section>

      <!-- Сводка заказа -->
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
    </div>

    <!-- ─── Пустая корзина (скрыта при наличии товаров) ── -->
    <div v-else class="cart-empty">
      <svg
        width="164"
        height="164"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 8H12L20 44H48L56 20H16"
          stroke="#C4C4C4"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <circle cx="24" cy="52" r="3" stroke="#C4C4C4" stroke-width="2.5" />
        <circle cx="44" cy="52" r="3" stroke="#C4C4C4" stroke-width="2.5" />
      </svg>
      <p class="cart-empty-text">Корзина пуста</p>
    </div>
  </div>
</template>

<script setup>
import { useBasket } from '../stores/basket.js';
import { computed } from 'vue';

const basket = useBasket();


const textHeader = computed(() => {
  const count = basket.headerBasket;

  if (count % 10 === 1 && count % 100 !== 11) return 'товар';
  if (count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 10 || count % 100 >= 20))
    return 'товара';
  return 'товаров';
});

function sliceText(text) {
  const wordsArray = text.split(' ');
  const textSlice = wordsArray.slice(0, 5).join(' ') + '...';
  return textSlice;
}

// Количество товаров в корзине
function sumItemsBasket() {
  return basket.items.reduce((sum, item) => {
    return sum + item.quantity;
  }, 0);
}

function sumItem(item, quantity) {
  const sumItem = item * quantity
  basket.sumItem = sumItem;
  return sumItem.toLocaleString('ru-RU')
}
</script>

<style lang="scss" scoped>
.cart-page {
  background: #f7f7f5;
  font-family: 'Inter', sans-serif;
  color: #1a1a18;
  font-size: 15px;
  line-height: 1.6;
  padding: 0 0 60px;
}

.cart-header {
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

.back-btn {
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
  transition:
    color 0.15s,
    background 0.15s;

  &:hover {
    color: #2d6a4f;
    background: #f0f5f1;
  }
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

.cart-title {
  display: flex;
  align-items: baseline;
  gap: 10px;
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: -0.3px;
  color: #1a1a18;
  margin-left: auto;
}

.cart-badge {
  font-size: 0.75rem;
  font-weight: 500;
  color: #6b6b65;
}

/* ─── Тело ──────────────────────────────────────────── */
.cart-body {
  max-width: 1120px;
  margin: 40px auto 0;
  padding: 0 40px;
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 32px;
  align-items: start;
}

/* ─── Список товаров ────────────────────────────────── */
.cart-items {
  background: #fff;
  border-radius: 12px;
  border: 1px solid #e4e4df;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.07);
  overflow: hidden;
}

.item-divider {
  height: 1px;
  background: #f0f0ec;
  margin: 0 24px;
}

.cart-item {
  display: grid;
  grid-template-columns: 88px 1fr auto;
  gap: 20px;
  align-items: center;
  padding: 20px 24px;
  transition: background 0.1s;
}

.cart-item:hover {
  background: #f7f7f5;
}

/* Изображение */
.item-image-wrap {
  width: 88px;
  height: 88px;
  border-radius: 8px;
  overflow: hidden;
  background: #f7f7f5;
  flex-shrink: 0;
}

.item-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s;
}

.cart-item:hover .item-image {
  transform: scale(1.04);
}

/* Информация */
.item-info {
  min-width: 0;
}

.item-category {
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #2d6a4f;
  margin-bottom: 4px;
}

.item-name {
  font-size: 16px;
  font-weight: 700;
  line-height: 1.3;
  color: #1a1a18;
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.item-sku {
  font-size: 12px;
  color: #6b6b65;
}

/* Управление */
.item-controls {
  display: flex;
  align-items: center;
  gap: 24px;
  flex-shrink: 0;
}

.qty-control {
  display: flex;
  align-items: center;
  border: 1px solid #e4e4df;
  border-radius: 8px;
  overflow: hidden;
}

.qty-btn {
  width: 36px;
  height: 36px;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b6b65;
  transition:
    background 0.15s,
    color 0.15s;
}

.qty-btn:hover {
  background: #f7f7f5;
  color: #1a1a18;
}

.qty-value {
  min-width: 36px;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  color: #1a1a18;
  border-left: 1px solid #e4e4df;
  border-right: 1px solid #e4e4df;
  line-height: 36px;
}

.item-price {
  font-size: 17px;
  font-weight: 700;
  color: #1a1a18;
  min-width: 90px;
  text-align: right;
  font-variant-numeric: tabular-nums;
}

.item-remove {
  background: none;
  border: none;
  cursor: pointer;
  color: #c9c9c2;
  padding: 6px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    background 0.15s,
    color 0.15s;
}

.item-remove:hover {
  background: #fee2e2;
  color: #dc2626;
}

/* ─── Сводка ────────────────────────────────────────── */
.cart-summary {
  background: #fff;
  border: 1px solid #e4e4df;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.07);
  padding: 24px;
  position: sticky;
  top: 88px;
}

.summary-title {
  font-size: 17px;
  font-weight: 700;
  color: #1a1a18;
  margin-bottom: 20px;
}

.summary-lines {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-bottom: 20px;
  border-bottom: 1px solid #f0f0ec;
  margin-bottom: 20px;
}

.summary-line {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
}

.summary-label {
  color: #6b6b65;
}

.summary-value {
  font-weight: 500;
  color: #1a1a18;
}

.summary-value--discount {
  color: #2d6a4f;
}

.summary-value--free {
  color: #2d6a4f;
}

.summary-total {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 20px;
}

.summary-total-label {
  font-size: 15px;
  font-weight: 600;
  color: #1a1a18;
}

.summary-total-price {
  font-size: 24px;
  font-weight: 800;
  letter-spacing: -0.5px;
  color: #1a1a18;
  font-variant-numeric: tabular-nums;
}

.checkout-btn {
  display: block;
  text-align: center;
  width: 100%;
  padding: 14px 0;
  background: #2d6a4f;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  transition:
    background 0.15s,
    transform 0.1s;
  margin-bottom: 12px;
  text-decoration: none;
}

.checkout-btn:hover {
  background: #1b4332;
}

.checkout-btn:active {
  transform: scale(0.97);
}

.summary-note {
  font-size: 12px;
  color: #6b6b65;
  text-align: center;
  line-height: 1.5;
}

.summary-link {
  color: #2d6a4f;
  text-decoration: none;
}

.summary-link:hover {
  text-decoration: underline;
}

/* ─── Пустая корзина ────────────────────────────────── */
.cart-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 80px 40px;
  text-align: center;
}

.cart-empty-text {
  font-size: 18px;
  color: #6b6b65;
}

.cart-empty-link {
  color: #2d6a4f;
  text-decoration: none;
  font-weight: 500;
}

@media (max-width: 900px) {
  .header-inner {
    gap: 8px;
    padding: 0 16px;
  }

  .logo .logo-text {
    display: none;
  }

  .back-btn .back-text {
    display: none;
  }

  .cart-body {
    grid-template-columns: 1fr;
    margin-top: 24px;
    padding: 0 16px;
    gap: 20px;
  }

  .cart-summary {
    position: static;
  }

  .cart-item {
    grid-template-columns: 72px 1fr;
    grid-template-rows: auto auto;
    padding: 16px;
    gap: 12px;
  }

  .item-controls {
    grid-column: 1 / -1;
    justify-content: space-between;
  }

  .item-image-wrap {
    width: 72px;
    height: 72px;
  }
}

@media (max-width: 480px) {
  .cart-title {
    font-size: 18px;
  }

  .item-price {
    font-size: 15px;
  }
}
</style>
