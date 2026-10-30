import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { getProducts } from '@/api/api';
import { useSearch } from './search.js'

// Основная логика, где происходят расчёты и какие товары надо вывести

export const useFilters = defineStore('dataFilers', () => {
  //Все товары
  const dataProducts = ref([]);
  // Текущее название категории
  const currencyCategory = ref('Все');
  // Значения Range в фильтре цены
  const valueRange = ref(0);
  // Значение метки
  const selectedMarks = ref([]);
  // Матерал
  const materialList = ref([]);
  const material = ref([]);
  // Все названия категорий
  const titles = ref([]);
  // Цвет
  const colorList = ref([]);
  const currentColor = ref([]);
  // Стиль
  const styleList = ref([]);
  const currentStyle = ref([]);

  const error = ref(null);
  const isLoading = ref(false);

  // Поиск
  const search = useSearch();

  // Данные
  async function fetchProducts() {
    isLoading.value = true;
    try {
      const data = await getProducts();
      dataProducts.value = data.products;
      titles.value = data.categories;
      valueRange.value = maxPrice.value;
      materialList.value = data.filters.material;
      colorList.value = data.filters.color;
      styleList.value = data.filters.style;
    } catch (e) {
      error.value = e.message;
    } finally {
      isLoading.value = false;
    }
  }

  // Фильтрация
  const filteredProducts = computed(() => {
    let result = dataProducts.value;

    // Категории
    if (currencyCategory.value !== 'Все') {
      result = result.filter((product) => product.title === currencyCategory.value);
    }

    // Поиск инпута
    const query = search.input.trim().toLowerCase();
    if (query) {
      result =  result.filter((word) => {
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

    return result
  });

  // Границы фильтра цен
const minPrice = computed(() => {
  return Math.min(...dataProducts.value.map((p) => p.price));
});

const maxPrice = computed(() => {
  return Math.max(...dataProducts.value.map((p) => p.price));
});

  return {
    fetchProducts,
    dataProducts,
    currencyCategory,
    valueRange,
    selectedMarks,
    materialList,
    material,
    titles,
    colorList,
    currentColor,
    styleList,
    currentStyle,
    filteredProducts,
    minPrice,
    maxPrice,
    error,
    isLoading
  };
});
