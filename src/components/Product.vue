<template>
  <article class="product-card">
    <div class="card-image">
      <img :key="product.id" :src="product.img" :alt="product.description" loading="lazy" />
      <span v-if="product.additional" class="card-badge">
        {{ product.additional }}
      </span>
    </div>
    <div class="card-body">
      <span class="card-category">{{ product.title }}</span>
      <h3 class="card-title">{{ product.description }}</h3>
      <p class="card-desc">{{ product.text }}</p>
      <div class="card-footer">
        <div class="price-wrap">
          <span v-if="product.oldPrice" class="card-price-old">
            {{ product.oldPrice }}
          </span>
          <span class="card-price">{{ product.newPrice }}</span>
        </div>
        <button  class="add-btn" type="button"  @click="$emit('update:modelValue', product)">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          В корзину
        </button>

        <!-- <div v-else class="quantity-control">
        <button
          class="quantity-btn"
          type="button"
          @click="$emit('decrease', product)"
        >
          −
        </button>

        <span class="quantity-value">5</span>

        <button
          class="quantity-btn"
          type="button"
          @click="$emit('increase', product)"
        >
          +
        </button>
      </div> -->
      </div>
    </div>
  </article>
</template>

<script setup>
defineProps(['product', 'quantity']);
defineEmits(['update:modelValue', 'increase', 'decrease']);
</script>

<style scoped>
.quantity-control {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-top: 8px;
  padding: 4px;
  border: 1px solid #e4e4df;
  border-radius: 8px;
  background: #f7f7f5;
}

.quantity-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 6px;
  background: #fff;
  color: #2d6a4f;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.15s, color 0.15s, transform 0.1s;
  flex-shrink: 0;
  line-height: 1;
}

.quantity-btn:hover {
  background: #2d6a4f;
  color: #fff;
}

.quantity-btn:active {
  transform: scale(0.95);
}

.quantity-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.quantity-value {
  flex: 1;
  text-align: center;
  font-family: 'Raleway', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: #1a1a18;
  font-variant-numeric: tabular-nums;
  user-select: none;
}
</style>
