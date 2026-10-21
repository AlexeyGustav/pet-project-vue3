<template>
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-grid">
        <div class="footer-brand">
          <a class="logo" href="#">
            <svg class="logo-icon" width="22" height="22" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 2C8 6 4 9 4 14a8 8 0 0 0 16 0c0-5-4-8-8-12z" />
              <path d="M12 22V12" />
            </svg>
            <span class="logo-text"><b>ДОМ</b>&УЮТ</span>
          </a>
          <p>Товары для дома и уюта.<br />Работаем с 2019 года.</p>
        </div>

        <nav class="footer-nav" aria-label="Меню футера">
          <a href="#">Каталог</a>
          <a href="#">Доставка</a>
          <a href="#">О нас</a>
          <a href="#">Контакты</a>
        </nav>
      </div>

      <div class="footer-bottom">
        <p>© 2026 ДОМ&УЮТ</p>
        <div class="footer-socials">
          <a href="#" class="social-btn" aria-label="VK">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14C20.67 22 22 20.67 22 15.07V8.93C22 3.33 20.67 2 15.07 2zm3.08 13.5h-1.6c-.6 0-.79-.48-1.87-1.57-1-.94-1.43-.94-1.43.11v1.46c0 .43-.14.57-1.29.57-1.71 0-3.6-1.03-4.93-2.97-2-2.8-2.54-4.9-2.54-5.33 0-.21.08-.4.43-.4h1.6c.32 0 .44.14.56.51.62 1.78 1.65 3.35 2.08 3.35.16 0 .24-.08.24-.51V8.84c-.05-.9-.52-1-.52-1.31 0-.16.13-.32.33-.32h2.51c.27 0 .37.14.37.46v2.48c0 .27.12.37.19.37.16 0 .3-.1.6-.4 1.43-1.6 2.45-3.1 2.45-3.1.09-.16.27-.3.54-.3h1.6c.48 0 .59.25.48.54-.82 1.81-1.79 3.13-1.79 3.13-.14.23-.19.32 0 .57.14.19.59.57.89.9.56.57 1.03 1.06 1.15 1.38.14.32-.04.48-.36.48z"
              />
            </svg>
          </a>
          <a href="#" class="social-btn" aria-label="Telegram">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8l-1.69 7.97c-.13.59-.47.73-.95.46l-2.63-1.94-1.27 1.22c-.14.14-.26.26-.53.26l.19-2.69 4.84-4.37c.21-.19-.05-.29-.32-.1L7.9 14.49l-2.55-.8c-.56-.17-.57-.56.12-.83l9.99-3.85c.46-.17.86.11.18.79z"
              />
            </svg>
          </a>
          <a href="#" class="social-btn" aria-label="Instagram">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
.site-footer {
  background: #fff;
  border-top: 1px solid #ececE7;
  margin-top: 64px;
}

.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 56px 24px 28px;
}

.footer-grid {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 48px;
  margin-bottom: 48px;
}

.footer-brand {
  .logo {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    color: #1a1a18;
    font-family: 'Raleway', sans-serif;
    font-size: 1.05rem;
    font-weight: 700;
    letter-spacing: -0.2px;
  }

  .logo-icon {
    color: #2d6a4f;
  }

  .logo-text b {
    color: #2d6a4f;
    font-weight: 700;
  }

  p {
    margin-top: 14px;
    color: #8a8a82;
    font-size: 0.85rem;
    line-height: 1.6;
    max-width: 220px;
  }
}

.footer-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
}

.footer-nav a {
  color: #4a4a44;
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.15s;
}

.footer-nav a:hover {
  color: #2d6a4f;
}

.footer-bottom {
  border-top: 1px solid #f0f0ec;
  padding-top: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}

.footer-bottom p {
  color: #b0b0a8;
  font-size: 0.78rem;
  letter-spacing: 0.02em;
}

.footer-socials {
  display: flex;
  gap: 4px;
}

.social-btn {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  color: #b0b0a8;
  cursor: pointer;
  text-decoration: none;
  border-radius: 8px;
  transition: color 0.15s, background 0.15s;
}

.social-btn:hover {
  color: #2d6a4f;
  background: #f0f5f1;
}

/* ---------- АДАПТИВ ---------- */
@media (max-width: 640px) {
  .footer-inner {
    padding: 40px 20px 24px;
  }

  .footer-grid {
    flex-direction: column;
    gap: 28px;
    margin-bottom: 32px;
  }

  .footer-nav {
    gap: 20px;
  }

  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>