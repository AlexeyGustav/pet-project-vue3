# Установка зависимостей
npm install

# Запуск в режиме разработки (с HMR)
npm run dev

# Сборка для продакшена
npm run build

src/
├── api/              # Запросы к серверу
│   ├── client.js     # Базовый HTTP-клиент
│   └── products.js   # Запросы к товарам
├── components/       # Vue-компоненты
│   ├── Header.vue
│   ├── Footer.vue
│   ├── Navigation.vue
│   └── ProductList.vue
├── composables/      # Реактивные обёртки (loading/error/ref)
│   └── useProducts.js
├── mocks/            # Статические данные для разработки
│   └── products.js
├── views/            # Страницы
├── App.vue
└── main.js

🛠 Стек
Vue 3 — Composition API, <script setup>

Vite — сборщик и dev-сервер

SCSS — стили

Vitest — юнит-тесты

Playwright — e2e-тесты

ESLint — линтинг