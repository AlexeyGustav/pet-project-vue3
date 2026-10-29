<template>
  <aside class="filters-panel">
    <div class="filters-head">
      <h3>Фильтры</h3>
      <button @click="$emit('clear', $event)" class="reset-btn" type="button">Сбросить</button>
    </div>

    <div class="filter-group">
      <h4 class="filter-title">Цена</h4>
      <div class="range">
        <input
          class="range-input"
          type="range"
          :min="min"
          :max="max"
          step="10"
          @input="$emit('update:valueRange', Number($event.target.value))"
          :value="valueRange"
        />
      </div>
      <p>
        {{ valueRange }}
      </p>

      <div class="price-labels">
        <span>От {{ min }} ₽</span>
        <span>До {{ max }} ₽</span>
      </div>
    </div>

    <MarkFilter v-model:selectedMarks="selectedMarks" />

    <MaterialFilter v-model:selectedMaterial="selectedMaterial" :materialList="materialList" />

    <ColorFilter v-model:currentColor="currentColor" :colorList="colorList" />

    <StyleFilter :styleList="styleList" v-model:currentStyle="currentStyle" />
  </aside>
</template>

<script setup>
import MarkFilter from './MarkFilter.vue';
import MaterialFilter from './MaterialFilter.vue';
import ColorFilter from './ColorFilter.vue';
import StyleFilter from './StyleFilter.vue';


defineProps(['min', 'max', 'valueRange', 'materialList', 'colorList', 'styleList']);
defineEmits(['update:valueRange', 'clear']);
const selectedMarks = defineModel('selectedMarks');
const selectedMaterial = defineModel('selectedMaterial');
const currentColor = defineModel('currentColor');
const currentStyle = defineModel('currentStyle');
</script>

<style lang="scss" scoped></style>
