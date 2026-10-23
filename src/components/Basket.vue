<template>
  <div class="cart-page">
    <!-- ─── Основное тело ──────────────────────────────── -->
    <div class="cart-body">

      <!-- Список товаров -->
      <section class="cart-items">

        <!-- Товар -->
        <article class="cart-item">
          <div class="item-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&q=80"
              alt="Часы Minimalist Watch"
              class="item-image"
            />
          </div>

          <div class="item-info">
            <p class="item-category">Аксессуары</p>
            <h2 class="item-name">Minimalist Watch</h2>
            <p class="item-sku">Арт. MW-2024-BLK</p>
          </div>

          <div class="item-controls">
            <div class="qty-control">
              <button class="qty-btn" aria-label="Уменьшить количество">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7H12" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/>
                </svg>
              </button>
              <span class="qty-value">2</span>
              <button class="qty-btn" aria-label="Увеличить количество">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 2V12M2 7H12" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/>
                </svg>
              </button>
            </div>

            <p class="item-price">15 990 ₽</p>

            <button class="item-remove" aria-label="Удалить из корзины">
              <svg width="22" height="22" viewBox="0 0 18 18" fill="none">
                <path d="M3 4.5H15M7.5 4.5V3H10.5V4.5M6 4.5V14.25C6 14.664 6.336 15 6.75 15H11.25C11.664 15 12 14.664 12 14.25V4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </article>

        <div class="item-divider"></div>

        <!-- Товар 2 -->
        <article class="cart-item">
          <div class="item-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=200&q=80"
              alt="Парфюм Woody Noir"
              class="item-image"
            />
          </div>

          <div class="item-info">
            <p class="item-category">Парфюмерия</p>
            <h2 class="item-name">Woody Noir EDP</h2>
            <p class="item-sku">Арт. WN-100ML</p>
          </div>

          <div class="item-controls">
            <div class="qty-control">
              <button class="qty-btn" aria-label="Уменьшить количество">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7H12" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/>
                </svg>
              </button>
              <span class="qty-value">1</span>
              <button class="qty-btn" aria-label="Увеличить количество">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 2V12M2 7H12" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/>
                </svg>
              </button>
            </div>

            <p class="item-price">8 400 ₽</p>

            <button class="item-remove" aria-label="Удалить из корзины">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 4.5H15M7.5 4.5V3H10.5V4.5M6 4.5V14.25C6 14.664 6.336 15 6.75 15H11.25C11.664 15 12 14.664 12 14.25V4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </article>

        <div class="item-divider"></div>

        <!-- Товар 3 -->
        <article class="cart-item">
          <div class="item-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=200&q=80"
              alt="Кроссовки Runner Pro"
              class="item-image"
            />
          </div>

          <div class="item-info">
            <p class="item-category">Обувь</p>
            <h2 class="item-name">Runner Pro X</h2>
            <p class="item-sku">Арт. RPX-42-WHT</p>
          </div>

          <div class="item-controls">
            <div class="qty-control">
              <button class="qty-btn" aria-label="Уменьшить количество">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7H12" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/>
                </svg>
              </button>
              <span class="qty-value">3</span>
              <button class="qty-btn" aria-label="Увеличить количество">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 2V12M2 7H12" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/>
                </svg>
              </button>
            </div>

            <p class="item-price">42 450 ₽</p>

            <button class="item-remove" aria-label="Удалить из корзины">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 4.5H15M7.5 4.5V3H10.5V4.5M6 4.5V14.25C6 14.664 6.336 15 6.75 15H11.25C11.664 15 12 14.664 12 14.25V4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </article>

      </section>

      <!-- Сводка заказа -->
      <aside class="cart-summary">
        <h3 class="summary-title">Итого</h3>

        <ul class="summary-lines">
          <li class="summary-line">
            <span class="summary-label">Товаров</span>
            <span class="summary-value">6 шт.</span>
          </li>
          <li class="summary-line">
            <span class="summary-label">Стоимость товаров</span>
            <span class="summary-value">66 840 ₽</span>
          </li>
          <li class="summary-line">
            <span class="summary-label">Скидка</span>
            <span class="summary-value summary-value--discount">−3 342 ₽</span>
          </li>
          <li class="summary-line">
            <span class="summary-label">Доставка</span>
            <span class="summary-value summary-value--free">Бесплатно</span>
          </li>
        </ul>

        <div class="summary-total">
          <span class="summary-total-label">К оплате</span>
          <span class="summary-total-price">63 498 ₽</span>
        </div>

        <button class="checkout-btn">
          Оформить заказ
        </button>
      </aside>

    </div>

    <!-- ─── Пустая корзина (скрыта при наличии товаров) ── -->
    <div class="cart-empty" style="display: none;">
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 8H12L20 44H48L56 20H16" stroke="#C4C4C4" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="24" cy="52" r="3" stroke="#C4C4C4" stroke-width="2.5"/>
        <circle cx="44" cy="52" r="3" stroke="#C4C4C4" stroke-width="2.5"/>
      </svg>
      <p class="cart-empty-text">Корзина пуста</p>
      <a href="/catalog" class="cart-empty-link">Перейти в каталог</a>
    </div>

  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.cart-page {
  min-height: 100vh;
  background: #f7f7f5;
  font-family: 'Inter', sans-serif;
  color: #1a1a18;
  font-size: 15px;
  line-height: 1.6;
  padding: 0 0 60px;
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
  transition: background 0.15s, color 0.15s;
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
  transition: background 0.15s, color 0.15s;
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
  transition: background 0.15s, transform 0.1s;
  margin-bottom: 12px;
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
