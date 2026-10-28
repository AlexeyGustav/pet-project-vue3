<template>
  <div class="checkout-page">
    <!-- ─── Шапка ─────────────────────────────────────── -->
    <header class="checkout-header">
      <div class="header-inner">
        <a class="logo" href="#">
          <svg
            class="logo-icon"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <!-- стебли -->
            <path d="M8 14c0-4 3-6 4-8" />
            <path d="M16 14c0-4-2-5-4-8" />
            <!-- листик -->
            <path d="M12 6c1-2 3-2 3-2s0 2-1.5 3" fill="currentColor" stroke="none" opacity="0.5" />
            <path d="M12 6c1-2 3-2 3-2s0 2-1.5 3" />
            <!-- вишни -->
            <circle cx="8" cy="17" r="3" fill="currentColor" stroke="none" />
            <circle cx="16" cy="17" r="3" fill="currentColor" stroke="none" />
            <!-- блик -->
            <circle cx="7" cy="16" r="0.9" fill="white" stroke="none" opacity="0.5" />
            <circle cx="15" cy="16" r="0.9" fill="white" stroke="none" opacity="0.5" />
          </svg>
          <span class="logo-text"><b>МАМИН</b>&nbsp;САД</span>
        </a>

        <router-link :to="{ name: 'basket' }" class="back-btn" aria-label="Вернуться в корзину">
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
          <span class="back-text">В корзину</span>
        </router-link>

        <nav class="header-steps" aria-label="Шаги оформления">
          <span class="step step--done">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path
                d="M2.5 6.5L5 9L10.5 4"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Корзина
          </span>
          <span class="step-divider"></span>
          <span class="step step--active">Оплата</span>
          <span class="step-divider"></span>
          <span class="step">Подтверждение</span>
        </nav>
      </div>
    </header>

    <div class="checkout-body">
      <!-- Левая часть: выбор способа и форма -->
      <main class="checkout-main">
        <h1 class="checkout-title">Способ оплаты</h1>

        <!-- Табы выбора способа -->
        <div class="pay-tabs" role="tablist">
          <button
            @click="pay.typePay = 'Банковская карта'"
            class="pay-tab pay-tab--active"
            role="tab"
            aria-selected="true"
          >
            <span class="pay-tab-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect
                  x="2"
                  y="4.5"
                  width="16"
                  height="11"
                  rx="2"
                  stroke="currentColor"
                  stroke-width="1.5"
                />
                <path d="M2 8.5H18" stroke="currentColor" stroke-width="1.5" />
                <path
                  d="M5 12.5H7"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M9 12.5H11"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </span>
            Банковская карта
          </button>
          <button
            @click="pay.typePay = 'Наличными при получении'"
            class="pay-tab"
            role="tab"
            aria-selected="false"
          >
            <span class="pay-tab-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect
                  x="2"
                  y="6"
                  width="16"
                  height="10"
                  rx="1.5"
                  stroke="currentColor"
                  stroke-width="1.5"
                />
                <path
                  d="M6 6V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <circle cx="10" cy="11" r="1.5" stroke="currentColor" stroke-width="1.3" />
              </svg>
            </span>
            Наличными при получении
          </button>
        </div>

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
      <aside class="checkout-summary">
        <h3 class="summary-title">Ваш заказ</h3>

        <ul class="summary-items" :key="card.id" v-for="card in basket.items">
          <li class="summary-item">
            <div class="summary-item-img-wrap">
              <img :src="card.img" alt="" class="summary-item-img" />
            </div>
            <div class="summary-item-info">
              <p class="summary-item-name">{{ card.description }}</p>
              <p class="summary-item-qty">{{ card.quantity }} шт.</p>
            </div>
            <p class="summary-item-price">{{ card.newPrice }}</p>
          </li>
        </ul>

        <div class="summary-divider"></div>

        <ul class="summary-lines">
          <li class="summary-line">
            <span class="summary-label">Доставка</span>
            <span class="summary-value summary-value--green">Бесплатно</span>
          </li>
        </ul>

        <div class="summary-total">
          <span class="summary-total-label">К оплате</span>
          <span class="summary-total-price"
            >{{ basket.totalSum.toLocaleString('RU', 'ru') }} ₽</span
          >
        </div>
      </aside>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useBasket } from '../stores/basket.js';
import { usePayment } from '../stores/payment.js';
import { useRouter } from 'vue-router';
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

<style lang="scss" scoped></style>
