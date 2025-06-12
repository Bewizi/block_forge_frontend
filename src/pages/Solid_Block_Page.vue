<script setup lang="ts">
import AppContainer from '@/components/AppContainer.vue'
import AppLink from '@/components/AppLink.vue'
import httpClient from '@/libs/httpClients'
import type { Blocks } from '@/types'
import { onMounted, ref } from 'vue'

const solidBlocks = ref<Blocks[]>([])

onMounted(async () => {
  try {
    const response = await httpClient.get(`/products/category/solid`)
    console.log(response.data)
    solidBlocks.value = response.data.products || []
  } catch (error) {
    console.error(`Error fetching solid block:`, error)
  }
})
</script>

<template>
  <AppContainer>
    <!-- solid blocks -->
    <div>
      <div v-for="solid in solidBlocks" :key="solid.id">
        <h1 class="mt-32 first-letter:uppercase">{{ solid.category }} Block</h1>
        <AppLink :to="`/block/${solid.id}`">
          <img :src="solid.image" :alt="solid.name" />
        </AppLink>
        <h1>{{ solid.name }}</h1>
        <span>{{ solid.price.toFixed(2) }}</span>
        <p>{{ solid.description }}</p>
        <!-- <p>{{ solid.price }}</p> -->
      </div>

      <!-- view more -->
      <!-- link with a button -->
      <div class="mt-5">
        <AppLink to="/solid">
          <button>View More</button>
        </AppLink>
      </div>
      <!-- view more -->
    </div>
  </AppContainer>
</template>

<style scoped></style>
