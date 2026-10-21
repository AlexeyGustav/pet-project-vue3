pet-project-vue3
Интернет-магазин товаров для дома и уюта на Vue 3 + Vite.

📋 О проекте
Каталог товаров с фильтрацией по категориям, поиском и фильтром по цене. Данные загружаются из public/items.json через слой API.

Что уже работает:

Загрузка товаров и категорий из JSON

Фильтрация по категории (табы)

Поиск по описанию товара

Фильтр по цене (слайдер)

Скрытие навигации при фокусе на поиске

Счётчик найденных товаров

Адаптивная вёрстка

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

📦 Работа с данными
Все запросы — через src/api/api.js:

js
import { getProducts } from '@/api/api.js';

const data = await getProducts();
// → { products: [...], categories: [...] }