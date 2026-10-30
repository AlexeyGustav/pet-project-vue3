<template>
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
          <path d="M5 12.5H7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
          <path d="M9 12.5H11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
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
</template>

<script setup>
import { usePayment } from '../stores/payment.js';
const pay = usePayment();
</script>
