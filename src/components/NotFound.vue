<template>
  <div class="not-found">
    <header class="nf-header">
      <div class="header-inner">
        <a class="logo" href="/">
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
            <path d="M8 14c0-4 3-6 4-8" />
            <path d="M16 14c0-4-2-5-4-8" />
            <path d="M12 6c1-2 3-2 3-2s0 2-1.5 3" fill="currentColor" stroke="none" opacity="0.5" />
            <path d="M12 6c1-2 3-2 3-2s0 2-1.5 3" />
            <circle cx="8" cy="17" r="3" fill="currentColor" stroke="none" />
            <circle cx="16" cy="17" r="3" fill="currentColor" stroke="none" />
            <circle cx="7" cy="16" r="0.9" fill="white" stroke="none" opacity="0.5" />
            <circle cx="15" cy="16" r="0.9" fill="white" stroke="none" opacity="0.5" />
          </svg>
          <span class="logo-text"><b>ДОМАШНИЙ</b>&nbsp;САД</span>
        </a>
      </div>
    </header>

    <!-- Основной блок -->
    <main class="nf-main">
      <!-- Иллюстрация -->
      <div class="nf-illustration" aria-hidden="true">
        <svg width="220" height="200" viewBox="0 0 220 200" fill="none">
          <!-- Земля -->
          <ellipse cx="110" cy="178" rx="90" ry="12" fill="#e8f5ec" />

          <!-- Горшок -->
          <path d="M78 155 L82 178 L138 178 L142 155 Z" fill="#c8a97a" />
          <rect x="74" y="148" width="72" height="10" rx="4" fill="#b8925a" />
          <ellipse cx="110" cy="158" rx="28" ry="4" fill="#a07840" opacity="0.3" />

          <!-- Стебель -->
          <path
            d="M110 148 C110 130 110 115 110 95"
            stroke="#52b788"
            stroke-width="3.5"
            stroke-linecap="round"
          />

          <!-- Ветки -->
          <path
            d="M110 120 C100 112 88 112 82 106"
            stroke="#52b788"
            stroke-width="2.5"
            stroke-linecap="round"
          />
          <path
            d="M110 108 C120 100 132 100 138 94"
            stroke="#52b788"
            stroke-width="2.5"
            stroke-linecap="round"
          />
          <path
            d="M110 132 C118 126 126 128 130 122"
            stroke="#52b788"
            stroke-width="2"
            stroke-linecap="round"
          />

          <!-- Листья -->
          <ellipse cx="80" cy="103" rx="10" ry="6" fill="#52b788" transform="rotate(-30 80 103)" />
          <ellipse cx="140" cy="91" rx="10" ry="6" fill="#40916c" transform="rotate(20 140 91)" />
          <ellipse cx="131" cy="120" rx="8" ry="5" fill="#52b788" transform="rotate(15 131 120)" />

          <!-- Вишни -->
          <!-- пара 1 -->
          <path
            d="M82 106 C82 100 86 96 86 92"
            stroke="#52b788"
            stroke-width="1.8"
            stroke-linecap="round"
          />
          <path
            d="M82 106 C78 100 74 98 73 94"
            stroke="#52b788"
            stroke-width="1.8"
            stroke-linecap="round"
          />
          <circle cx="86" cy="89" r="7" fill="#e63946" />
          <circle cx="73" cy="91" r="7" fill="#c1121f" />
          <circle cx="84" cy="87" r="2.2" fill="white" opacity="0.4" />
          <circle cx="71" cy="89" r="2.2" fill="white" opacity="0.4" />

          <!-- пара 2 -->
          <path
            d="M138 94 C138 88 142 84 142 80"
            stroke="#52b788"
            stroke-width="1.8"
            stroke-linecap="round"
          />
          <path
            d="M138 94 C134 88 130 87 129 83"
            stroke="#52b788"
            stroke-width="1.8"
            stroke-linecap="round"
          />
          <circle cx="142" cy="77" r="7" fill="#e63946" />
          <circle cx="129" cy="80" r="7" fill="#c1121f" />
          <circle cx="140" cy="75" r="2.2" fill="white" opacity="0.4" />
          <circle cx="127" cy="78" r="2.2" fill="white" opacity="0.4" />

          <!-- Цифры 404 на горшке -->
          <text
            x="110"
            y="167"
            font-family="'Raleway', sans-serif"
            font-size="15"
            font-weight="800"
            fill="#8a6030"
            text-anchor="middle"
            letter-spacing="2"
          >
            404
          </text>
        </svg>
      </div>

      <!-- Текст -->
      <h1 class="nf-title">Страница не найдена</h1>
      <p class="nf-subtitle">
        Похоже, эта страница уже отцвела и не плодоносит.<br />
        Но у нас ещё много всего вкусного!
      </p>

      <!-- Кнопки -->
      <div class="nf-actions">
        <router-link :to="{ name: 'main' }" class="btn btn--ghost"> На главную </router-link>
      </div>
    </main>
  </div>
</template>

<script setup></script>