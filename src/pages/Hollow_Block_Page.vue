<script setup lang="ts">
import AppContainer from '@/components/AppContainer.vue'
import httpClient from '@/libs/httpClients'
import type { Blocks } from '@/types'
import { onMounted, ref } from 'vue'

const hollowBlocks = ref<Blocks[]>([])

onMounted(async () => {
  try {
    const response = await httpClient.get(`/products/category/hollow`)
    console.log(response.data)
    hollowBlocks.value = response.data.products || []
  } catch (error) {
    console.error(`Error fetching solid block:`, error)
  }
})
</script>

<template>
  <AppContainer>
    <!-- hollow blocks -->
    <div>
      <div v-for="hollow in hollowBlocks" :key="hollow.id">
        <h1 class="mt-32 first-letter:uppercase">{{ hollow.category }} Block</h1>
        <img :src="hollow.image" :alt="hollow.name" />
        <h1>{{ hollow.name }}</h1>
        <span>{{ hollow.price.toFixed(2) }}</span>
        <p>{{ hollow.description }}</p>
        <!-- <p>{{ solid.price }}</p> -->
      </div>

      <!-- view more -->
      <!-- link with a button -->
      <!-- <div class="mt-5">
        <AppLink to="/hollow">
          <button>View More</button>
        </AppLink>
      </div> -->
      <!-- view more -->
    </div>
  </AppContainer>
</template>

<style scoped></style>
