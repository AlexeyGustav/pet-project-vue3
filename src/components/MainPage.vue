<template>
  <Header/>
  <div class="main-content">
    <div class="layout">
      <AllFilters
        :min="filters.minPrice"
        :max="filters.maxPrice"
        v-model:valueRange="filters.valueRange"
        v-model:selectedMarks="filters.selectedMarks"
        v-model:selectedMaterial="filters.material"
        v-model:materialList="filters.materialList"
        :colorList="filters.colorList"
        v-model:currentColor="filters.currentColor"
        :styleList="filters.styleList"
        v-model:currentStyle="filters.currentStyle"
        @clear="clearFilters"
      />
      <section class="catalog">
        <div v-if="!search.isFocused" class="tabs">
          <Navigation
            v-for="category in filters.titles"
            :key="category"
            :category="category"
            :active="filters.currencyCategory === category"
            @activeTab="filters.currencyCategory = $event"
          />
        </div>
        <!-- <ToolBar :sum="filters.filteredProducts.length" /> -->
        <div class="product-grid">
          <Product
            v-for="product in filters.filteredProducts"
            :key="product.id"
            :product="product"
            @update:model-value="basket.addBasket($event)"
            :basket="basket.items"
            @decrease="basket.minusCounter($event)"
            @increase="basket.plusCounter($event)"
          />
        </div>
      </section>
    </div>
  </div>
  <Footer/>
</template>

<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import { ref, onMounted } from 'vue';
import { useBasket } from '../stores/basket.js';
import { useSearch } from '../stores/search.js';
import { useFilters } from '../stores/filtersProducts.js';
import AllFilters from '../components/AllFilters.vue';
import Navigation from '../components/Navigation.vue';
import ToolBar from '../components/ToolBar.vue';
import Product from '../components/Product.vue';

// Работа с Pinia
// Корзина
const basket = useBasket();
// Поиск
const search = useSearch();
// Товары
const filters = useFilters();

// Кнопка сбросить
function clearFilters() {
  search.input = '';
  filters.valueRange = filters.maxPrice;
  filters.selectedMarks = [];
  filters.material = [];
  filters.currentColor = [];
  filters.currentStyle = [];
}

// Компонет смонторован
onMounted(() => filters.fetchProducts());

</script>
