
<template>
  <div class="success-page">
    <main class="success-main">

      <!-- Иконка успеха -->
     <SucessIcon/>

      <h1 class="success-title">Заказ оформлен!</h1>
      <p class="success-subtitle">Оплата прошла успешно. Мы уже готовим ваш заказ к отправке.</p>

      <!-- Карточка заказа -->
      <OrderCard/>

      <!-- Действия -->
      <div class="success-actions">
        <router-link :to="{ name: 'main' }" class="btn-primary">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M3 4H4.5L7.5 13H13.5L15.5 6.5H6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="8" cy="15.5" r="1" stroke="currentColor" stroke-width="1.3"/>
            <circle cx="12.5" cy="15.5" r="1" stroke="currentColor" stroke-width="1.3"/>
          </svg>
          Вернуться в каталог
        </router-link>
      </div>

      <!-- Подпись -->
      <p class="success-note">
        Подтверждение отправлено на вашу электронную почту
      </p>

    </main>
  </div>
</template>

<script setup>
import SucessIcon from '@/ui/sucessIcon.vue';
import OrderCard from '@/components/OrderCard.vue';

</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.success-page {
  min-height: 100vh;
  background: #f7f7f5;
  font-family: 'Inter', sans-serif;
  color: #1a1a18;
  font-size: 15px;
  line-height: 1.6;
}

.success-main {
  max-width: 560px;
  margin: 0 auto;
  padding: 52px 24px 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

/* ─── Иконка ────────────────────────────────────────── */
.success-icon-wrap {
  position: relative;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 28px;
}

.success-icon-ring {
  position: absolute;
  border-radius: 50%;
  border: 1.5px solid #2d6a4f;
  animation: pulse-ring 2s ease-out infinite;
}

.success-icon-ring--outer {
  width: 100px;
  height: 100px;
  opacity: 0.15;
}

.success-icon-ring--inner {
  width: 82px;
  height: 82px;
  opacity: 0.25;
  animation-delay: 0.3s;
}

@keyframes pulse-ring {
  0%   { transform: scale(0.88); opacity: 0.3; }
  60%  { transform: scale(1);    opacity: 0.1; }
  100% { transform: scale(0.88); opacity: 0.3; }
}

.success-icon-circle {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: #2d6a4f;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  box-shadow: 0 8px 24px rgba(45, 106, 79, 0.32);
}

/* ─── Заголовок ─────────────────────────────────────── */
.success-title {
  font-size: 28px;
  font-weight: 800;
  letter-spacing: -0.5px;
  color: #1a1a18;
  margin-bottom: 10px;
}

.success-subtitle {
  font-size: 15px;
  color: #6b6b65;
  line-height: 1.6;
  max-width: 380px;
  margin-bottom: 32px;
}

/* ─── Карточка заказа ───────────────────────────────── */
.order-card {
  width: 100%;
  background: #fff;
  border: 1px solid #e4e4df;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.07);
  padding: 0 24px;
  margin-bottom: 28px;
  text-align: left;
}

.order-card-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 0;
  gap: 12px;
}

.order-card-divider {
  height: 1px;
  background: #f0f0ec;
}

.order-card-label {
  font-size: 13px;
  color: #6b6b65;
}

.order-card-value {
  font-size: 14px;
  font-weight: 500;
  color: #1a1a18;
}

.order-card-value--accent {
  color: #2d6a4f;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
}

.order-card-value--bold {
  font-weight: 700;
  font-size: 16px;
  font-variant-numeric: tabular-nums;
}

/* ─── Статус ────────────────────────────────────────── */
.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 600;
  color: #2d6a4f;
  background: #f0faf5;
  border: 1px solid #b7e4c7;
  border-radius: 20px;
  padding: 3px 12px;
}

.status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #2d6a4f;
  animation: blink 1.8s ease-in-out infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.35; }
}

/* ─── Кнопка ────────────────────────────────────────── */
.success-actions {
  width: 100%;
  margin-bottom: 20px;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 14px 0;
  background: #2d6a4f;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.15s, transform 0.1s;
}

.btn-primary:hover  { background: #1b4332; }
.btn-primary:active { transform: scale(0.98); }

/* ─── Подпись ───────────────────────────────────────── */
.success-note {
  font-size: 13px;
  color: #c9c9c2;
}

/* ─── Адаптив ───────────────────────────────────────── */
@media (max-width: 600px) {
  .success-main {
    padding: 36px 16px 60px;
  }

  .success-title {
    font-size: 24px;
  }

  .order-card {
    padding: 0 16px;
  }
}
</style>
