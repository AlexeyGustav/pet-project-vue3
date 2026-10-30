<template>
  <div class="checkout-page">
    <!-- ─── Шапка ─────────────────────────────────────── -->
    <HeaderPayment />

    <div class="checkout-body">
      <!-- Левая часть: выбор способа и форма -->
      <main class="checkout-main">
        <h1 class="checkout-title">Способ оплаты</h1>

        <!-- Табы выбора способа -->
        <SelectionTabs/>

        <!-- ─── Панель: Банковская карта ─────────────── -->
        <div v-if="pay.typePay === 'Банковская карта'" class="pay-panel" role="tabpanel">
          <!-- Визуальная карта -->
          <div class="card-preview">
            <div class="card-preview-chip">
              <svg width="32" height="24" viewBox="0 0 32 24" fill="none">
                <rect
                  x="0.5"
                  y="0.5"
                  width="31"
                  height="23"
                  rx="3.5"
                  fill="#d4a843"
                  stroke="#c49730"
                />
                <rect
                  x="10"
                  y="6"
                  width="12"
                  height="12"
                  rx="1"
                  stroke="#8a6a1a"
                  stroke-width="1.2"
                  fill="none"
                />
                <line x1="16" y1="6" x2="16" y2="18" stroke="#8a6a1a" stroke-width="1.2" />
                <line x1="10" y1="12" x2="22" y2="12" stroke="#8a6a1a" stroke-width="1.2" />
              </svg>
            </div>
            <div class="card-preview-number">
              {{ pay.numberCard ? formatCardNumber(pay.numberCard) : '•••• •••• •••• ••••' }}
            </div>
            <div class="card-preview-meta">
              <span class="card-preview-label">Держатель</span>
              <span class="card-preview-label">Срок действия</span>
            </div>
            <div class="card-preview-meta">
              <span class="card-preview-value">ИМЯ ФАМИЛИЯ</span>
              <span class="card-preview-value">MM / YY</span>
            </div>
            <div class="card-preview-logo">
              <svg width="48" height="30" viewBox="0 0 48 30" fill="none">
                <circle cx="18" cy="15" r="14" fill="rgba(255,255,255,0.35)" />
                <circle cx="30" cy="15" r="14" fill="rgba(255,255,255,0.18)" />
              </svg>
            </div>
          </div>
          <!-- Форма карты -->
          <form class="card-form" autocomplete="off" @submit.prevent="submitOrder" novalidate>
            <!-- Номер карты -->
            <div class="field field--full">
              <label class="field-label" for="card-number">Номер карты</label>
              <div class="field-input-wrap">
                <input
                  id="card-number"
                  class="field-input"
                  type="text"
                  inputmode="numeric"
                  maxlength="16"
                  placeholder="0000 0000 0000 0000"
                  autocomplete="cc-number"
                  autofocus
                  tabindex="1"
                  v-model="pay.numberCard"
                  @input="clearError('card')"
                />
                <span class="field-icon">
                  <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
                    <rect
                      x="0.75"
                      y="0.75"
                      width="20.5"
                      height="14.5"
                      rx="2.25"
                      stroke="#c9c9c2"
                      stroke-width="1.5"
                    />
                    <path d="M0.75 5H21.25" stroke="#c9c9c2" stroke-width="1.5" />
                  </svg>
                </span>
              </div>
            </div>
            <p class="error" v-if="errors.card">{{ errors.card }}</p>

            <!-- Имя держателя -->
            <div class="field field--full">
              <label class="field-label" for="card-name">Имя держателя</label>
              <input
                id="card-name"
                class="field-input"
                type="text"
                placeholder="IVAN IVANOV"
                autocomplete="cc-name"
                tabindex="2"
                v-model="pay.name"
                @input="clearError('name')"
              />
              <p class="error" v-if="errors.name">{{ errors.name }}</p>
            </div>

            <!-- Срок + CVV -->
            <div class="field-row">
              <div class="field">
                <label class="field-label" for="card-expiry">Срок действия</label>
                <input
                  id="card-expiry"
                  class="field-input"
                  type="text"
                  inputmode="numeric"
                  maxlength="7"
                  placeholder="MM / YY"
                  autocomplete="cc-exp"
                  tabindex="3"
                  :value="pay.validityPeriod"
                  @input="onExpiryInput"
                />
                <p class="error" v-if="errors.validityPeriod">{{ errors.validityPeriod }}</p>
              </div>
              <div class="field">
                <label class="field-label" for="card-cvv">
                  CVV / CVC
                  <button type="button" class="cvv-hint" aria-label="Что такое CVV?">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <circle cx="7" cy="7" r="6" stroke="#c9c9c2" stroke-width="1.2" />
                      <path
                        d="M7 9.5V7M7 5V4.5"
                        stroke="#c9c9c2"
                        stroke-width="1.2"
                        stroke-linecap="round"
                      />
                    </svg>
                  </button>
                </label>
                <input
                  id="card-cvv"
                  class="field-input"
                  type="password"
                  inputmode="numeric"
                  maxlength="3"
                  placeholder="•••"
                  autocomplete="cc-csc"
                  tabindex="4"
                  v-model="pay.cvc"
                  @input="clearError('cvc')"
                />
                <p class="error" v-if="errors.cvc">{{ errors.cvc }}</p>
              </div>
            </div>

            <!-- Сохранить карту -->
            <label class="save-card">
              <span class="save-card-checkbox">
                <input type="checkbox" tabindex="5" />
                <span class="save-card-box"></span>
              </span>
              <span class="save-card-text">Сохранить карту для будущих платежей</span>
            </label>

            <button type="submit" :disabled="!activeBtn" class="submit-btn">Оплатить</button>

            <p class="form-secure">
              <svg width="13" height="15" viewBox="0 0 13 15" fill="none">
                <rect
                  x="0.75"
                  y="6.25"
                  width="11.5"
                  height="8"
                  rx="1.75"
                  stroke="#2d6a4f"
                  stroke-width="1.3"
                />
                <path
                  d="M3 6V4.5a3.5 3.5 0 0 1 7 0V6"
                  stroke="#2d6a4f"
                  stroke-width="1.3"
                  stroke-linecap="round"
                />
              </svg>
              Платёж защищён по протоколу TLS 1.3
            </p>
          </form>
        </div>

        <!-- ─── Панель: Наличными при получении (скрыта) ─ -->
        <div v-if="pay.typePay === 'Наличными при получении'" class="pay-panel" role="tabpanel">
          <div class="cash-block">
            <!-- Иллюстрация -->
            <div class="cash-illustration">
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                <circle cx="28" cy="28" r="28" fill="#f0faf5" />
                <rect
                  x="12"
                  y="20"
                  width="32"
                  height="20"
                  rx="3"
                  stroke="#2d6a4f"
                  stroke-width="1.8"
                />
                <rect
                  x="18"
                  y="26"
                  width="20"
                  height="8"
                  rx="2"
                  stroke="#2d6a4f"
                  stroke-width="1.5"
                />
                <circle cx="28" cy="30" r="3" stroke="#2d6a4f" stroke-width="1.5" />
                <path
                  d="M12 25h4M40 25h4"
                  stroke="#2d6a4f"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </div>

            <!-- Описание -->
            <div class="cash-info">
              <h3 class="cash-title">Оплата наличными курьеру</h3>
              <p class="cash-subtitle">Подготовьте точную сумму — курьер не всегда имеет сдачу</p>
            </div>

            <!-- Сумма -->
            <div class="cash-amount-wrap">
              <span class="cash-amount-label">Сумма к оплате</span>
              <span class="cash-amount">{{ basket.totalSum.toLocaleString('RU', 'ru') }} ₽</span>
            </div>

            <!-- Инфо-блоки -->
            <div class="cash-notes">
              <div class="cash-note">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="7" stroke="#2d6a4f" stroke-width="1.4" />
                  <path
                    d="M9 8V12M9 6.5V6"
                    stroke="#2d6a4f"
                    stroke-width="1.4"
                    stroke-linecap="round"
                  />
                </svg>
                <span>Оплата производится в момент получения заказа</span>
              </div>
              <div class="cash-note">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="7" stroke="#2d6a4f" stroke-width="1.4" />
                  <path
                    d="M9 8V12M9 6.5V6"
                    stroke="#2d6a4f"
                    stroke-width="1.4"
                    stroke-linecap="round"
                  />
                </svg>
                <span>Курьер выдаст чек и подтвердит заказ</span>
              </div>
            </div>

            <router-link @click="basket.clearBasket" :to="{ name: 'sucess' }" class="submit-btn">
              Подтвердить заказ
            </router-link>
          </div>
        </div>
      </main>

      <!-- Правая часть: сводка заказа -->
      <OrderSummary/>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useBasket } from '../stores/basket.js';
import { usePayment } from '../stores/payment.js';
import { useRouter } from 'vue-router';
import HeaderPayment from '../ui/HeaderPayment.vue'
import SelectionTabs from '@/ui/SelectionTabs.vue';
import OrderSummary from './OrderSummary.vue';
const router = useRouter();

const basket = useBasket();
const pay = usePayment();

const errors = ref({});

const activeBtn = computed(() =>
  Boolean(pay.numberCard && pay.name && pay.validityPeriod && pay.cvc),
);

function isLuhnValid(digits) {
  let sum = 0;
  let shouldDouble = false; // правая цифра карты НЕ удваивается — начинаем с false

  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = parseInt(digits.charAt(i), 10);
    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    sum += digit;
    shouldDouble = !shouldDouble;
  }
  return sum % 10 === 0;
}

// Форматирование номера карты
function formatCardNumber(value) {
  const digits = value.replace(/\D/g, '').slice(0, 16);
  return digits.replace(/(\d{4})(?=\d)/g, '$1 ');
}

// Форматирование даты
function formatCardExpiry(value) {
  const digits = value.replace(/\D/g, '').slice(0, 4);
  if (digits.length <= 2) return digits;
  return digits.slice(0, 2) + ' / ' + digits.slice(2);
}

function submitOrder() {
  const freshErrors = {};

  const digits = pay.numberCard.replace(/\D/g, '').slice(0, 16);
  if (digits.length !== 16) {
    freshErrors.card = 'Номер карты — 16 цифр';
  } else if (!isLuhnValid(digits)) {
    freshErrors.card = 'Номер карты некорректный';
  }

  const isEYearValid = /^(0[1-9]|1[0-2])\/\d{2}$/.test(pay.validityPeriod.replace(/\s/g, ''));
  if (!isEYearValid) {
    freshErrors.validityPeriod = 'Дата указана не верно';
  }

  const isCvcValid = /^\d{3}$/.test(pay.cvc);
  if (!isCvcValid) {
    freshErrors.cvc = 'CVC указан не верно';
  }

  const isNameValid = /^[A-Za-zА-Яа-яЁё][A-Za-zА-Яа-яЁё\s'-]{1,39}$/.test(pay.name.trim());
  if (!isNameValid) {
    freshErrors.name = 'Укажите имя держателя';
  }

  errors.value = freshErrors;

  if (!Object.keys(freshErrors).length) {
    pay.numberCard = '';
    pay.name = '';
    pay.validityPeriod = '';
    pay.cvc = '';

    basket.clearBasket();
    router.push({ name: 'sucess' });
  }
}

// Отчистка поля от ошибки
function clearError(key) {
  delete errors.value[key];
}

function onExpiryInput(event) {
  pay.validityPeriod = formatCardExpiry(event.target.value);
  clearError('validityPeriod');
}
</script>

<style lang="scss">
.error {
  font-size: 13px;
  color: #b3261e;
  font-weight: 700;
}
.checkout-page {
  min-height: 100vh;
  background: #f7f7f5;
  font-family: 'Inter', sans-serif;
  color: #1a1a18;
  font-size: 15px;
  line-height: 1.6;
  padding: 0 0 60px;
}

/* ─── Шапка ─────────────────────────────────────────── */
.checkout-header {
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

.header-steps {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  margin-left: auto;
}

.step {
  color: #c9c9c2;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 4px;
}

.step--done {
  color: #2d6a4f;
}
.step--active {
  color: #1a1a18;
  font-weight: 700;
}

.step-divider {
  width: 28px;
  height: 1px;
  background: #e4e4df;
  flex-shrink: 0;
}

/* ─── Тело ──────────────────────────────────────────── */
.checkout-body {
  max-width: 1120px;
  margin: 40px auto 0;
  padding: 0 40px;
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 32px;
  align-items: start;
}

.checkout-title {
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.3px;
  margin-bottom: 24px;
  color: #1a1a18;
}

/* ─── Табы ──────────────────────────────────────────── */
.pay-tabs {
  display: flex;
  gap: 10px;
  margin-bottom: 28px;
}

.pay-tab {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 10px;
  border: 1.5px solid #e4e4df;
  background: #fff;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #6b6b65;
  cursor: pointer;
  transition:
    border-color 0.15s,
    color 0.15s,
    background 0.15s;

  &:hover {
    border-color: #2d6a4f;
    color: #2d6a4f;
  }

  &.pay-tab--active {
    border-color: #2d6a4f;
    background: #f0faf5;
    color: #2d6a4f;
    font-weight: 600;
  }
}

.pay-tab-icon {
  display: flex;
  align-items: center;
}

.submit-btn {
  transition:
    background 0.15s,
    transform 0.1s;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
  &:not(:disabled):hover {
    background: #1b4332;
  }
  &:not(:disabled):active {
    transform: scale(0.98);
  }
}

/* ─── Панель ────────────────────────────────────────── */
.pay-panel {
  background: #fff;
  border-radius: 12px;
  border: 1px solid #e4e4df;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.07);
  padding: 28px;
}

/* ─── Визуальная карта ──────────────────────────────── */
.card-preview {
  background: linear-gradient(135deg, #1b4332 0%, #2d6a4f 60%, #40916c 100%);
  border-radius: 14px;
  padding: 22px 24px 20px;
  color: #fff;
  position: relative;
  overflow: hidden;
  margin-bottom: 28px;
  min-height: 160px;

  &::before {
    content: '';
    position: absolute;
    top: -40px;
    right: -40px;
    width: 160px;
    height: 160px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.06);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -60px;
    right: 40px;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.04);
  }
}

.card-preview-chip {
  margin-bottom: 20px;
}

.card-preview-number {
  font-size: 19px;
  font-weight: 600;
  letter-spacing: 2.5px;
  margin-bottom: 16px;
  font-variant-numeric: tabular-nums;
}

.card-preview-meta {
  display: flex;
  gap: 48px;
  margin-bottom: 2px;
}

.card-preview-label {
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: rgba(255, 255, 255, 0.6);
}

.card-preview-value {
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.card-preview-logo {
  position: absolute;
  bottom: 18px;
  right: 22px;
}

/* ─── Форма карты ───────────────────────────────────── */
.card-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
}

.field--full {
  width: 100%;
}

.field-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

.field-label {
  font-size: 13px;
  font-weight: 600;
  color: #3a3a36;
  display: flex;
  align-items: center;
  gap: 4px;
}

.field-input-wrap {
  position: relative;
  .field-input {
    padding-right: 44px;
  }
}

.field-icon {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  pointer-events: none;
}

.field-input {
  width: 100%;
  padding: 11px 14px;
  border: 1.5px solid #e4e4df;
  border-radius: 8px;
  background: #fff;
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  color: #1a1a18;
  outline: none;
  transition:
    border-color 0.15s,
    box-shadow 0.15s;

  &::placeholder {
    color: #c9c9c2;
  }

  &:focus {
    border-color: #2d6a4f;
    box-shadow: 0 0 0 3px rgba(45, 106, 79, 0.12);
  }
}

.cvv-hint {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: inline-flex;
  align-items: center;
  line-height: 1;
}

.save-card {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  &:hover .save-card-box {
    border-color: #2d6a4f;
  }
}

.save-card-checkbox {
  position: relative;
  display: inline-flex;
  flex-shrink: 0;

  input[type='checkbox'] {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }

  input:checked + .save-card-box {
    background: #2d6a4f;
    border-color: #2d6a4f;
  }

  input:checked + .save-card-box::after {
    content: '';
    display: block;
    width: 5px;
    height: 9px;
    border: solid #fff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg) translateY(-1px);
  }
}

.save-card-box {
  width: 18px;
  height: 18px;
  border: 1.5px solid #c9c9c2;
  border-radius: 4px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s;
  flex-shrink: 0;
}

.save-card-text {
  font-size: 14px;
  color: #3a3a36;
}

/* ─── Кнопка оплаты ─────────────────────────────────── */
.submit-btn {
  display: block;
  text-align: center;
  width: 100%;
  padding: 14px 0;
  background: #2d6a4f;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition:
    background 0.15s,
    transform 0.1s;
  margin-top: 4px;

  &:hover {
    background: #1b4332;
  }
  &:active {
    transform: scale(0.98);
  }
}

/* ─── Безопасность ──────────────────────────────────── */
.form-secure {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: 12px;
  color: #6b6b65;
}

/* ─── Наличными при получении ───────────────────────── */
.cash-block {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.cash-illustration {
  display: flex;
  justify-content: center;
  padding: 8px 0 4px;
}

.cash-info {
  text-align: center;
}

.cash-title {
  font-size: 17px;
  font-weight: 700;
  color: #1a1a18;
  margin-bottom: 6px;
}

.cash-subtitle {
  font-size: 14px;
  color: #6b6b65;
  line-height: 1.5;
}

.cash-amount-wrap {
  background: #f0faf5;
  border: 1.5px solid #b7e4c7;
  border-radius: 10px;
  padding: 16px 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cash-amount-label {
  font-size: 14px;
  color: #3a3a36;
  font-weight: 500;
}

.cash-amount {
  font-size: 22px;
  font-weight: 800;
  color: #2d6a4f;
  letter-spacing: -0.5px;
  font-variant-numeric: tabular-nums;
}

.cash-notes {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px 18px;
  background: #f7f7f5;
  border-radius: 8px;
}

.cash-note {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 14px;
  color: #3a3a36;
  line-height: 1.5;

  svg {
    flex-shrink: 0;
    margin-top: 1px;
  }
}

/* ─── Правая колонка: сводка ────────────────────────── */
.checkout-summary {
  background: #fff;
  border: 1px solid #e4e4df;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.07);
  padding: 24px;
  position: sticky;
  top: 80px;
}

.summary-title {
  font-size: 17px;
  font-weight: 700;
  color: #1a1a18;
  margin-bottom: 18px;
}

.summary-items {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 18px;
}

.summary-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.summary-item-img-wrap {
  width: 48px;
  height: 48px;
  border-radius: 6px;
  overflow: hidden;
  background: #f7f7f5;
  flex-shrink: 0;
}

.summary-item-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.summary-item-info {
  flex: 1;
  min-width: 0;
}

.summary-item-name {
  font-size: 13px;
  font-weight: 600;
  color: #1a1a18;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.summary-item-qty {
  font-size: 12px;
  color: #6b6b65;
}

.summary-item-price {
  font-size: 13px;
  font-weight: 600;
  color: #1a1a18;
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
}

.summary-divider {
  height: 1px;
  background: #f0f0ec;
  margin-bottom: 16px;
}

.summary-lines {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 16px;
  border-bottom: 1px solid #f0f0ec;
  margin-bottom: 16px;
}

.summary-line {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
}

.summary-label {
  color: #6b6b65;
}

.summary-value {
  font-weight: 500;
  color: #1a1a18;
}

.summary-value--green {
  color: #2d6a4f;
}

.summary-total {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.summary-total-label {
  font-size: 15px;
  font-weight: 600;
  color: #1a1a18;
}

.summary-total-price {
  font-size: 22px;
  font-weight: 800;
  color: #1a1a18;
  letter-spacing: -0.5px;
  font-variant-numeric: tabular-nums;
}

/* ─── Адаптив ───────────────────────────────────────── */
@media (max-width: 960px) {
  .checkout-body {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }

  .checkout-summary {
    position: static;
    order: -1;
  }

  .header-steps {
    display: none;
  }
}

@media (max-width: 640px) {
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

  .pay-tabs {
    flex-direction: column;
  }

  .field-row {
    grid-template-columns: 1fr 1fr;
  }

  .card-preview-number {
    font-size: 15px;
    letter-spacing: 1.5px;
  }
}

@media (max-width: 400px) {
  .pay-panel {
    padding: 18px 16px;
  }
  .field-row {
    grid-template-columns: 1fr;
  }
}
</style>
