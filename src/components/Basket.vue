<template>
  <div class="cart-page">
    <HeaderBasket/>

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
      <OrderSummaryBasket/>
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
import HeaderBasket from '@/ui/HeaderBasket.vue';
import { useBasket } from '../stores/basket.js';
import OrderSummaryBasket from '@/ui/OrderSummaryBasket.vue';

const basket = useBasket();

function sliceText(text) {
  const wordsArray = text.split(' ');
  const textSlice = wordsArray.slice(0, 5).join(' ') + '...';
  return textSlice;
}

function sumItem(item, quantity) {
  const sumItem = item * quantity
  basket.sumItem = sumItem;
  return sumItem.toLocaleString('ru-RU')
}
</script>

<style lang="scss" scoped></style>
