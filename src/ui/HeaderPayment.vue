<template>
  <div class="checkout-header">
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
  </div>
</template>
