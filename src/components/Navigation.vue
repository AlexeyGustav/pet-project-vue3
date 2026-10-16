<template>
  <div class="tabs">
    <button
      v-for="cat in titles"
      :key="cat"
      class="tab"
      type="button"
      :class="{ active: currencyCategory === cat }"
    >
      {{ cat }}
    </button>
  </div>
</template>

<!-- @click="currencyCategory = cat" -->

<script setup>
import { ref } from 'vue'
import { getProducts } from '@/api/api.js'

const titles = ref([])
const error = ref(null)
const currencyCategory = ref('Все')

// Запрос категорий
getProducts()
  .then((data) => {
    titles.value = data.categories
  })
  .catch((event) => {
    error.value = event.message
    console.error('Ошибка загрузки товаров:', event)
  })


</script>
