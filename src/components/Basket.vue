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

<style lang="scss" scoped></style>
