<script setup lang="ts">
import { onMounted, ref } from 'vue'
import ProductCard from './ProductCard.vue'
import type { HolloBlocks } from '@/types'
import httpClient from '@/libs/httpClients'

const hollowProduct = ref<HolloBlocks[]>([])

onMounted(async () => {
  try {
    const response = await httpClient.get('/products/allProducts')
    console.log(response.data)
    hollowProduct.value = response.data.products || []
  } catch (error) {
    console.log('Could not fetch data', error)
  }
})
</script>

<template>
  <div>
    <h1>Hollow Block</h1>
    <ProductCard v-for="blocks in hollowProduct" :key="blocks.id" :hollow="blocks" />
  </div>
</template>

<style scoped></style>
