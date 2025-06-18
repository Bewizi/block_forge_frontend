<script setup lang="ts">
import ProductCard from './ProductCard.vue'

import { userProducts } from '@/composables/useProducts'
import { onMounted } from 'vue'
import AppContainer from './AppContainer.vue'

const { allBlocks, initializeData } = userProducts()

onMounted(async () => {
  await initializeData()
})
</script>

<template>
  <AppContainer class="py-16 mt-32">
    <div>
      <h1 id="products" class="text-4xl text-center lg:text-6xl lg:text-start font-saira mb-8">
        All Block
      </h1>
      <div
        class="grid grid-cols-1 place-items-center md:grid-cols-2 items-center lg:grid-cols-3 gap-4"
      >
        <ProductCard v-for="blocks in allBlocks" :key="blocks.id" :block="blocks" />
      </div>
    </div>
  </AppContainer>
</template>

<style scoped></style>
