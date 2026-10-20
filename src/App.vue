<template>
  <Header
    @focusedEmit="isSearchFocused = $event"
    :textVisible="search"
    @update:textVisible="search = $event"
    :headerBasket="headerBasket"
  />
  <div class="main-content">
    <div class="layout">
      <AllFilters
        :min="minPrice"
        :max="maxPrice"
        v-model:valueRange="valueRange"
        v-model:selectedMarks="selectedMarks"
        v-model:selectedMaterial="material"
        :materialList="materialList"
        :colorList="colorList"
        v-model:currentColor="currentColor"
        :styleList="styleList"
        v-model:currentStyle="currentStyle"
        @clear="clearFilters"
      />
      <section class="catalog">
        <div v-if="!isSearchFocused" class="tabs">
          <Navigation
            v-for="category in titles"
            :key="category"
            :category="category"
            :active="currencyCategory === category"
            @activeTab="currencyCategory = $event"
          />
        </div>
        <ToolBar :sum="filteredProducts.length" />
        <div class="product-grid">
          <Product
            v-for="product in filteredProducts"
            :key="product.id"
            :product="product"
            @update:model-value="addBasket($event)"
          />
        </div>
      </section>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import AllFilters from './components/AllFilters.vue';
import Navigation from './components/Navigation.vue';
import ToolBar from './components/ToolBar.vue';
import Product from './components/Product.vue';
import { getProducts } from '@/api/api.js';

// Состояния
// Текущее название категории
const currencyCategory = ref('Все');
//Все товары
const dataProducts = ref([]);
// Все названия категорий
const titles = ref([]);
// Состояние ошибки
const error = ref(null);
// Поиск
const search = ref('');
// Фокус инпута (Для скрытия/показа навигации)
const isSearchFocused = ref(false);
// Значения Range в фильтре цены
const valueRange = ref(0);
// Значение метки
const selectedMarks = ref([]);
// Матерал
const materialList = ref([]);
const material = ref([]);
// Цвет
const colorList = ref([]);
const currentColor = ref([]);
// Стиль
const styleList = ref([]);
const currentStyle = ref([]);
// Корзина
const basketRef = ref([]);
const basketHead = ref('');

// Кнопка сбросить
function clearFilters() {
  search.value = '';
  valueRange.value = maxPrice.value;
  selectedMarks.value = [];
  material.value = [];
  currentColor.value = [];
  currentStyle.value = [];
}

// Добавить товар в корзину
function addBasket(item) {
  const existing = basketRef.value.find((p) => p.id === item.id);

  if (existing) {
    existing.quantity += 1;
  } else {
    basketRef.value.push({ ...item, quantity: 1 });
  }
}

// Корзина в хедере
const headerBasket = computed(() => {
  if (basketHead.value === '') {
    return (basketHead.value = 0);
  }
  basketHead.value = basketRef.value.length;
  return basketHead.value;
});

// Границы фильтра цен
const minPrice = computed(() => {
  return Math.min(...dataProducts.value.map((p) => p.price));
});

const maxPrice = computed(() => {
  return Math.max(...dataProducts.value.map((p) => p.price));
});

// Компонет смонторован
onMounted(() => {
  getProducts()
    .then((data) => {
      dataProducts.value = data.products;
      titles.value = data.categories;
      valueRange.value = maxPrice.value;
      materialList.value = data.filters.material;
      colorList.value = data.filters.color;
      styleList.value = data.filters.style;
    })
    .catch((event) => {
      error.value = event.message;
      console.error('Ошибка загрузки товаров:', event);
    });
});
// Основная логика, где происходят расчёты и какие товары надо вывести
const filteredProducts = computed(() => {
  let result = dataProducts.value;

  // Категории
  if (currencyCategory.value !== 'Все') {
    result = result.filter((product) => product.title === currencyCategory.value);
  }

  // Поиск инпута
  const query = search.value.trim().toLowerCase();
  if (query) {
    result = result.filter((word) => {
      return word.description.toLowerCase().includes(query);
    });
  }

  // Цена
  if (valueRange.value > 0 && valueRange.value < maxPrice.value) {
    result = result.filter((price) => {
      return price.price <= valueRange.value;
    });
  }

  //Метка
  if (selectedMarks.value.length) {
    result = result.filter((mark) => selectedMarks.value.includes(mark.additional));
  }

  // Материал
  if (material.value.length) {
    result = result.filter((p) => p.material.some((m) => material.value.includes(m)));
  }

  // Цвет
  if (currentColor.value.length) {
    result = result.filter((p) => p.color.some((m) => currentColor.value.includes(m)));
  }

  // Стиль
  if (currentStyle.value.length) {
    result = result.filter((p) => p.style.some((m) => currentStyle.value.includes(m)));
  }

  return result;
});
</script>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  height: 100%;
  background: #f7f7f5;
  color: #1a1a18;
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  line-height: 1.6;
}

.main-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 24px;
}

.layout {
  display: grid;
  grid-template-columns: 260px minmax(0, 1fr);
  gap: 32px;
  align-items: start;
}

.filter-group {
  padding: 14px 0;
  border-bottom: 1px solid #f0f0ec;
}
.filter-group:last-of-type {
  border-bottom: none;
}

/* --- Чекбоксы --- */
.filter-check {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.875rem;
  color: #3a3a36;
  padding: 4px 0;
  cursor: pointer;
  transition: color 0.15s;
}
.filter-check:hover {
  color: #2d6a4f;
}

.filter-check input[type='checkbox'] {
  appearance: none;
  width: 16px;
  height: 16px;
  border: 1.5px solid #c9c9c2;
  border-radius: 4px;
  background: #fff;
  cursor: pointer;
  position: relative;
  flex-shrink: 0;
  transition: all 0.15s;
}
.filter-check input[type='checkbox']:hover {
  border-color: #2d6a4f;
}
.filter-check input[type='checkbox']:checked {
  background: #2d6a4f;
  border-color: #2d6a4f;
}
.filter-check input[type='checkbox']:checked::after {
  content: '';
  position: absolute;
  left: 4px;
  top: 1px;
  width: 5px;
  height: 9px;
  border: solid #fff;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

/* ---------- КАТАЛОГ ---------- */
.catalog {
  min-width: 0;
} /* чтобы grid-колонка не растягивалась контентом */

.tabs {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.tab {
  background: #fff;
  border: 1px solid #e4e4df;
  color: #6b6b65;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;
  font-family: 'Inter', sans-serif;
}
.tab:hover {
  border-color: #2d6a4f;
  color: #2d6a4f;
}
.tab.active {
  background: #2d6a4f;
  color: #fff;
  border-color: #2d6a4f;
}

.toolbar {
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  color: #6b6b65;
  margin-bottom: 20px;
}

/* ---------- СЕТКА ТОВАРОВ ---------- */
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;
}

.product-card {
  background: #fff;
  border: 1px solid #e4e4df;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: column;
  transition:
    box-shadow 0.2s,
    transform 0.2s;
}
.product-card:hover {
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.13);
  transform: translateY(-3px);
}

.card-image {
  position: relative;
  aspect-ratio: 4/3;
  overflow: hidden;
  background: #f7f7f5;
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
  background: #2d6a4f;
  color: #fff;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 3px 8px;
  border-radius: 4px;
}

.card-body {
  padding: 16px 18px 18px;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 6px;
}

.card-category {
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #2d6a4f;
}

.card-title {
  font-family: 'Raleway', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.3;
  color: #1a1a18;
}

.card-desc {
  font-size: 0.85rem;
  color: #6b6b65;
  line-height: 1.5;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-top: 6px;
}

.price-wrap {
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.card-price {
  font-family: 'Raleway', sans-serif;
  font-size: 1.15rem;
  font-weight: 700;
  color: #1a1a18;
  font-variant-numeric: tabular-nums;
}

.card-price-old {
  font-size: 0.78rem;
  color: #6b6b65;
  text-decoration: line-through;
  font-variant-numeric: tabular-nums;
}

.add-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  background: #2d6a4f;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 8px 14px;
  font-family: 'Inter', sans-serif;
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  transition:
    background 0.15s,
    transform 0.1s;
  white-space: nowrap;
  flex-shrink: 0;
}
.add-btn:hover {
  background: #1b4332;
}
.add-btn:active {
  transform: scale(0.97);
}

/* ---------- ФУТЕР ---------- */
.site-footer {
  background: #fff;
  border-top: 1px solid #e4e4df;
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
.footer-brand p {
  color: #6b6b65;
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
  color: #6b6b65;
  margin-bottom: 12px;
}
.footer-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.footer-links a {
  color: #1a1a18;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.15s;
}
.footer-links a:hover {
  color: #2d6a4f;
}
.footer-bottom {
  border-top: 1px solid #e4e4df;
  padding-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
}
.footer-bottom p {
  color: #6b6b65;
  font-size: 0.8rem;
}

/* ---------- АДАПТИВ ---------- */
@media (max-width: 960px) {
  .layout {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .filters-panel {
    position: static;
    max-height: none;
  }
}

@media (max-width: 860px) {
  nav {
    display: none;
  }
  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 480px) {
  .main-content {
    padding: 32px 16px;
  }
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 28px;
  }
  .product-grid {
    grid-template-columns: 1fr;
  }
}
</style>
