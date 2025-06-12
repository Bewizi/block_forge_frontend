<script setup lang="ts">
import { userProducts } from '@/composables/useProducts'

import { onMounted } from 'vue'
// import { Blocks } from '../types'

const { initializeData, blockById } = userProducts()

onMounted(() => {
  initializeData()
})
</script>

<template>
  <div>
    <div v-for="items in blockById" :key="items.id" class="flex flex-col lg:flex-row">
      <div>
        <h1>{{ items.name }}</h1>

        <img :src="items.image" :alt="items.name" class="w-[200px]" />

        <p>{{ items.description }}</p>
      </div>

      <div>
        <p>{{ items.description }}</p>
        <p>{{ items.price }}</p>
        <p>{{ items.category }}</p>
        <p>{{ items.use }}</p>
        <p>{{ items.size }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
