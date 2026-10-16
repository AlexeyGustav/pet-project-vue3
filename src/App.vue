<script setup>
import { ref, computed } from "vue";
import categories from "./mocks/categories.js";
import mockProducts from "./mocks/products.js";

const currencyCategory = ref("Все");

const filterCategores = computed(() => {

  if(currencyCategory.value == "Все"){
    return mockProducts
  }
  else {
    return mockProducts.filter(product => product.title === currencyCategory.value);
  }
});
</script>

<template>
 <header class="site-header">
  <div class="header-inner">
    <a class="logo" href="#"><span>green</span>shop</a>

    <nav>
      <a href="#" class="nav-link active">Главная</a>
      <a href="#" class="nav-link">Каталог</a>
      <a href="#" class="nav-link">Акции</a>
      <a href="#" class="nav-link">О нас</a>
      <a href="#" class="nav-link">Контакты</a>
    </nav>

    <button class="cart-btn">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="9" cy="21" r="1"/>
        <circle cx="20" cy="21" r="1"/>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
      </svg>
      Корзина
      <span class="cart-count">0</span>
    </button>
  </div>
</header>

<main class="main-content" id="catalog">
  <h2 class="section-title">Популярные товары</h2>
  <p class="section-sub">Выбор покупателей этой недели</p>

  <div class="filters">
    <button
    :key="category"
    v-for="category in categories"
    @click="currencyCategory = category"
    class="filter-btn"
    :class="{ active: currencyCategory === category }"
    >{{ category }}</button>
  </div>

  <div class="product-grid">

    <article v-for="product in filterCategores" class="product-card">
      <div :key="product.id" class="card-image">
        <img :src="product.img" :alt="product.description" loading="lazy">
        <span v-if="product.additional" class="card-badge">{{ product.additional }}</span>
      </div>
      <div class="card-body">
        <span class="card-category">{{ product.title }}</span>
        <h3 class="card-title">{{ product.description }}</h3>
        <p class="card-desc">{{ product.text }}</p>
        <div class="card-footer">
          <div class="price-wrap">
            <span v-if="product.oldPrice" class="card-price-old">{{ product.oldPrice }}</span>
            <span class="card-price">{{ product.newPrice }}</span>
          </div>
          <button class="add-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"/>
              <line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
            В корзину
          </button>
        </div>
      </div>
    </article>

  </div>
</main>

<footer class="site-footer">
  <div class="footer-inner">
    <div class="footer-grid">

      <div class="footer-brand">
        <a class="logo" href="#"><span>green</span>shop</a>
        <p>Интернет-магазин товаров для дома и уюта. Работаем с 2019 года.</p>
      </div>

      <div class="footer-col">
        <h4>Каталог</h4>
        <ul class="footer-links">
          <li><a href="#">Новинки</a></li>
          <li><a href="#">Освещение</a></li>
          <li><a href="#">Текстиль</a></li>
          <li><a href="#">Декор</a></li>
          <li><a href="#">Мебель</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Покупателям</h4>
        <ul class="footer-links">
          <li><a href="#">Доставка</a></li>
          <li><a href="#">Оплата</a></li>
          <li><a href="#">Возврат</a></li>
          <li><a href="#">Гарантия</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Компания</h4>
        <ul class="footer-links">
          <li><a href="#">О нас</a></li>
          <li><a href="#">Блог</a></li>
          <li><a href="#">Вакансии</a></li>
          <li><a href="#">Контакты</a></li>
        </ul>
      </div>

    </div>

    <div class="footer-bottom">
      <p>© 2026 greenShop. Все права защищены.</p>
      <div class="footer-socials">
        <a href="#" class="social-btn" aria-label="VK">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14C20.67 22 22 20.67 22 15.07V8.93C22 3.33 20.67 2 15.07 2zm3.08 13.5h-1.6c-.6 0-.79-.48-1.87-1.57-1-.94-1.43-.94-1.43.11v1.46c0 .43-.14.57-1.29.57-1.71 0-3.6-1.03-4.93-2.97-2-2.8-2.54-4.9-2.54-5.33 0-.21.08-.4.43-.4h1.6c.32 0 .44.14.56.51.62 1.78 1.65 3.35 2.08 3.35.16 0 .24-.08.24-.51V8.84c-.05-.9-.52-1-.52-1.31 0-.16.13-.32.33-.32h2.51c.27 0 .37.14.37.46v2.48c0 .27.12.37.19.37.16 0 .3-.1.6-.4 1.43-1.6 2.45-3.1 2.45-3.1.09-.16.27-.3.54-.3h1.6c.48 0 .59.25.48.54-.82 1.81-1.79 3.13-1.79 3.13-.14.23-.19.32 0 .57.14.19.59.57.89.9.56.57 1.03 1.06 1.15 1.38.14.32-.04.48-.36.48z"/></svg>
        </a>
        <a href="#" class="social-btn" aria-label="Telegram">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8l-1.69 7.97c-.13.59-.47.73-.95.46l-2.63-1.94-1.27 1.22c-.14.14-.26.26-.53.26l.19-2.69 4.84-4.37c.21-.19-.05-.29-.32-.1L7.9 14.49l-2.55-.8c-.56-.17-.57-.56.12-.83l9.99-3.85c.46-.17.86.11.18.79z"/></svg>
        </a>
        <a href="#" class="social-btn" aria-label="Instagram">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
        </a>
      </div>
    </div>
  </div>
</footer>
</template>

<style lang="scss" scoped>
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body {
  height: 100%;
  background: #F7F7F5;
  color: #1A1A18;
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  line-height: 1.6;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: #fff;
  border-bottom: 1px solid #E4E4DF;
  box-shadow: 0 2px 16px rgba(0,0,0,0.07);
}

.header-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.logo {
  font-family: 'Raleway', sans-serif;
  font-weight: 700;
  font-size: 1.35rem;
  color: #2D6A4F;
  letter-spacing: -0.3px;
  white-space: nowrap;
  text-decoration: none;
}

.logo span {
  color: #1A1A18;
}

nav {
  display: flex;
  align-items: center;
  gap: 4px;
  flex-wrap: wrap;
}

.nav-link {
  font-size: 0.875rem;
  font-weight: 500;
  color: #6B6B65;
  text-decoration: none;
  padding: 6px 12px;
  border-radius: 6px;
  transition: color 0.15s, background 0.15s;
  white-space: nowrap;
}

.nav-link:hover {
  color: #1A1A18;
  background: #E4E4DF;
}

.nav-link.active {
  color: #2D6A4F;
  font-weight: 600;
}

.cart-btn {
  display: flex;
  align-items: center;
  gap: 7px;
  background: #2D6A4F;
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
}

.cart-btn:hover {
  background: #1B4332;
}

.cart-count {
  background: #fff;
  color: #2D6A4F;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0 6px;
  min-width: 20px;
  text-align: center;
}

.main-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 24px;
}

.section-title {
  font-family: 'Raleway', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 8px;
}

.section-sub {
  color: #6B6B65;
  font-size: 0.9rem;
  margin-bottom: 32px;
}

.filters {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 32px;
}

.filter-btn {
  background: #fff;
  border: 1px solid #E4E4DF;
  color: #6B6B65;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;
  font-family: 'Inter', sans-serif;
}

.filter-btn:hover {
  border-color: #2D6A4F;
  color: #2D6A4F;
}

.filter-btn.active {
  background: #2D6A4F;
  color: #fff;
  border-color: #2D6A4F;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 24px;
}

.product-card {
  background: #fff;
  border: 1px solid #E4E4DF;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 16px rgba(0,0,0,0.07);
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.2s, transform 0.2s;
}

.product-card:hover {
  box-shadow: 0 8px 32px rgba(0,0,0,0.13);
  transform: translateY(-3px);
}

.card-image {
  position: relative;
  aspect-ratio: 4/3;
  overflow: hidden;
  background: #F7F7F5;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s;
}

.product-card:hover .card-image img {
  transform: scale(1.04);
}

.card-badge {
  position: absolute;
  top: 10px;
  left: 10px;
  background: #2D6A4F;
  color: #fff;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 3px 8px;
  border-radius: 4px;
}

.card-body {
  padding: 18px 20px 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 8px;
}

.card-category {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #2D6A4F;
}

.card-title {
  font-family: 'Raleway', sans-serif;
  font-size: 1.05rem;
  font-weight: 700;
  line-height: 1.3;
  color: #1A1A18;
}

.card-desc {
  font-size: 0.875rem;
  color: #6B6B65;
  line-height: 1.55;
  flex: 1;
}

.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 4px;
}

.price-wrap {
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.card-price {
  font-family: 'Raleway', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: #1A1A18;
  font-variant-numeric: tabular-nums;
}

.card-price-old {
  font-size: 0.8rem;
  color: #6B6B65;
  text-decoration: line-through;
  font-variant-numeric: tabular-nums;
}

.add-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  background: #2D6A4F;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 9px 16px;
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s, transform 0.1s;
  white-space: nowrap;
  flex-shrink: 0;
}

.add-btn:hover {
  background: #1B4332;
}

.add-btn:active {
  transform: scale(0.97);
}

.site-footer {
  background: #fff;
  border-top: 1px solid #E4E4DF;
  margin-top: 64px;
}

.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 24px 32px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 40px;
  margin-bottom: 40px;
}

.footer-brand .logo {
  font-size: 1.2rem;
}

.footer-brand p {
  color: #6B6B65;
  font-size: 0.875rem;
  margin-top: 10px;
  max-width: 240px;
  line-height: 1.6;
}

.footer-col h4 {
  font-family: 'Raleway', sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #6B6B65;
  margin-bottom: 12px;
}

.footer-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer-links a {
  color: #1A1A18;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.15s;
}

.footer-links a:hover {
  color: #2D6A4F;
}

.footer-bottom {
  border-top: 1px solid #E4E4DF;
  padding-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
}

.footer-bottom p {
  color: #6B6B65;
  font-size: 0.8rem;
}

.footer-socials {
  display: flex;
  gap: 10px;
}

.social-btn {
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #E4E4DF;
  border-radius: 7px;
  color: #6B6B65;
  background: none;
  cursor: pointer;
  transition: border-color 0.15s, color 0.15s;
  text-decoration: none;
}

.social-btn:hover {
  border-color: #2D6A4F;
  color: #2D6A4F;
}

@media (max-width: 860px) {
  nav {
    display: none;
  }
  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 480px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 28px;
  }
}
</style>
