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

<style lang="scss" scoped>
.filters-panel {
  background: #fff;
  border: 1px solid #e4e4df;
  border-radius: 12px;
  padding: 20px;
  position: sticky;
  top: 88px;
  max-height: calc(100vh - 112px);
  overflow-y: auto;
}

.filters-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 12px;
  border-bottom: 1px solid #eee;
  margin-bottom: 4px;
}

.filters-head h3 {
  font-family: 'Raleway', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: #1a1a18;
}

.range {
  margin: 12px 0 8px;
}

.range-input {
  width: 100%;
  height: 4px;
  appearance: none;
  -webkit-appearance: none;
  background: #e5e0d8;
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  accent-color: #2d6a4f;

  &::-webkit-slider-thumb {
    appearance: none;
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    background: #fff;
    border: 2px solid #2d6a4f;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
    transition: transform 0.1s;
  }

  &::-webkit-slider-thumb:hover {
    transform: scale(1.15);
  }

  &::-moz-range-thumb {
    width: 16px;
    height: 16px;
    background: #fff;
    border: 2px solid #2d6a4f;
    border-radius: 50%;
    cursor: pointer;
  }
}

.reset-btn {
  background: transparent;
  border: none;
  color: #2d6a4f;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  padding: 4px 6px;
  border-radius: 6px;
  transition: background 0.15s;
  font-family: 'Inter', sans-serif;
}

.reset-btn:hover {
  background: #eef5f0;
}

.price-labels {
  display: flex;
  justify-content: space-between;
  color: #898989;
}
</style>
