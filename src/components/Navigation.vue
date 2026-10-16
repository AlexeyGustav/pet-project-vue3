<template>
  <div class="tabs">
    <button
      v-for="cat in categories"
      :key="cat"
      class="tab"
      :class="{ active: currencyCategory === cat }"
      type="button"
      @click="currencyCategory = cat"
    >
      {{ cat }}
    </button>
  </div>
</template>

<script setup>
  import categories from '../mocks/categories.js'
</script>
