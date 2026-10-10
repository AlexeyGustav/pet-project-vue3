<script setup></script>

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

<section class="hero">
  <div class="hero-inner">
    <p class="hero-eyebrow">Новая коллекция 2026</p>
    <h1>Всё для уюта<br>и вашего дома</h1>
    <p>Товары, которые делают жизнь приятнее. Бесплатная доставка от 3 000 ₽.</p>
    <a href="#catalog" class="hero-cta">Смотреть каталог</a>
  </div>
</section>

<main class="main-content" id="catalog">
  <h2 class="section-title">Популярные товары</h2>
  <p class="section-sub">Выбор покупателей этой недели</p>

  <div class="filters">
    <button class="filter-btn active">Все</button>
    <button class="filter-btn">Освещение</button>
    <button class="filter-btn">Текстиль</button>
    <button class="filter-btn">Декор</button>
    <button class="filter-btn">Мебель</button>
  </div>

  <div class="product-grid">

    <article class="product-card">
      <div class="card-image">
        <img src="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&q=80" alt="Настольная лампа Amber" loading="lazy">
        <span class="card-badge">Скидка</span>
      </div>
      <div class="card-body">
        <span class="card-category">Освещение</span>
        <h3 class="card-title">Настольная лампа Amber</h3>
        <p class="card-desc">Тёплый рассеянный свет, регулируемая яркость. Металлическое основание с матовым покрытием.</p>
        <div class="card-footer">
          <div class="price-wrap">
            <span class="card-price-old">4 200 ₽</span>
            <span class="card-price">3 490 ₽</span>
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

    <article class="product-card">
      <div class="card-image">
        <img src="https://images.unsplash.com/photo-1586105449897-20b5efeb3233?w=600&q=80" alt="Плед Soft Wool" loading="lazy">
        <span class="card-badge">Новинка</span>
      </div>
      <div class="card-body">
        <span class="card-category">Текстиль</span>
        <h3 class="card-title">Плед Soft Wool</h3>
        <p class="card-desc">Мягкий плед из смеси шерсти и хлопка. Размер 130×170 см, доступен в 8 цветах.</p>
        <div class="card-footer">
          <div class="price-wrap">
            <span class="card-price">2 190 ₽</span>
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

    <article class="product-card">
      <div class="card-image">
        <img src="https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=600&q=80" alt="Ваза Ceramic Bowl" loading="lazy">
      </div>
      <div class="card-body">
        <span class="card-category">Декор</span>
        <h3 class="card-title">Ваза Ceramic Bowl</h3>
        <p class="card-desc">Ручная работа из белой глины. Идеальна для сухих цветов и как самостоятельный предмет декора.</p>
        <div class="card-footer">
          <div class="price-wrap">
            <span class="card-price">1 890 ₽</span>
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

    <article class="product-card">
      <div class="card-image">
        <img src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&q=80" alt="Кресло Linen Chair" loading="lazy">
        <span class="card-badge">Хит</span>
      </div>
      <div class="card-body">
        <span class="card-category">Мебель</span>
        <h3 class="card-title">Кресло Linen Chair</h3>
        <p class="card-desc">Лёгкое кресло в скандинавском стиле. Льняная обивка, дубовые ножки, съёмный чехол.</p>
        <div class="card-footer">
          <div class="price-wrap">
            <span class="card-price-old">22 000 ₽</span>
            <span class="card-price">18 900 ₽</span>
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

    <article class="product-card">
      <div class="card-image">
        <img src="https://images.unsplash.com/photo-1602028915047-37269d1a73f7?w=600&q=80" alt="Набор свечей Forest" loading="lazy">
      </div>
      <div class="card-body">
        <span class="card-category">Декор</span>
        <h3 class="card-title">Набор свечей Forest</h3>
        <p class="card-desc">Соевые свечи с ароматами кедра, пихты и мха. Горят до 40 часов каждая.</p>
        <div class="card-footer">
          <div class="price-wrap">
            <span class="card-price">1 290 ₽</span>
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

    <article class="product-card">
      <div class="card-image">
        <img src="https://images.unsplash.com/photo-1620264847303-cc0b4a28b75a?w=600&q=80" alt="Полотенце Lux Terry" loading="lazy">
      </div>
      <div class="card-body">
        <span class="card-category">Текстиль</span>
        <h3 class="card-title">Полотенце Lux Terry</h3>
        <p class="card-desc">Махровое полотенце 70×140 см. Плотность 600 г/м², быстро впитывает влагу.</p>
        <div class="card-footer">
          <div class="price-wrap">
            <span class="card-price">890 ₽</span>
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

.hero {
  background: #fff;
  border-bottom: 1px solid #E4E4DF;
  padding: 56px 24px;
  text-align: center;
}

.hero-inner {
  max-width: 640px;
  margin: 0 auto;
}

.hero-eyebrow {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #2D6A4F;
  margin-bottom: 12px;
}

.hero h1 {
  font-family: 'Raleway', sans-serif;
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  line-height: 1.15;
  text-wrap: balance;
  margin-bottom: 16px;
}

.hero p {
  color: #6B6B65;
  font-size: 1.05rem;
  max-width: 480px;
  margin: 0 auto 28px;
}

.hero-cta {
  display: inline-block;
  background: #2D6A4F;
  color: #fff;
  font-size: 0.95rem;
  font-weight: 600;
  padding: 12px 28px;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.15s;
}

.hero-cta:hover {
  background: #1B4332;
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