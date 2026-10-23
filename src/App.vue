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
            :basket="basketRef"
            @decrease="minusItemProduct($event)"
            @increase="increaseQuantity($event)"
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

// Кнопка сбросить
function clearFilters() {
  search.value = '';
  valueRange.value = maxPrice.value;
  selectedMarks.value = [];
  material.value = [];
  currentColor.value = [];
  currentStyle.value = [];
}

// Добавить/убавить товар в корзину
function addBasket(item) {
  const existing = basketRef.value.find((p) => p.id === item.id);

  if (existing) {
    existing.quantity += 1;
  } else {
    basketRef.value.push({ ...item, quantity: 1 });
  }
}

// Убавить товар
function minusItemProduct(product) {
  const existing = basketRef.value.find((p) => p.id === product.id);
  if (!existing) return;
  if (existing.quantity > 1) {
    existing.quantity -= 1;
  } else {
    basketRef.value = basketRef.value.filter((p) => p.id !== product.id);
  }
}

// Добавить товар
function increaseQuantity(product) {
  const existing = basketRef.value.find((p) => p.id === product.id);
  if (existing) existing.quantity += 1;
}

// Корзина в хедере
const headerBasket = computed(() => basketRef.value.length);

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


