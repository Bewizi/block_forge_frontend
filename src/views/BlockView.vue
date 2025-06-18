<script setup lang="ts">
import AppContainer from '@/components/AppContainer.vue'

import { userProducts } from '@/composables/useProducts'
import { Icon } from '@iconify/vue'

import { onMounted } from 'vue'
// import { Blocks } from '../types'

const { initializeData, blockById } = userProducts()

onMounted(() => {
  initializeData()
})
</script>

<template>
  <AppContainer>
    <div
      v-for="items in blockById"
      :key="items.id"
      class="flex flex-col gap-20 justify-between lg:flex-row"
    >
      <section class="mb-10 lg:mb-0 shadow bg-white p-5 rounded-md">
        <h1 class="font-saira text-4xl font-semibold mb-10">{{ items.name }}</h1>

        <div>
          <img :src="items.image" :alt="items.name" class="w-full mb-5" />
        </div>
      </section>

      <div class="shadow bg-white p-5 rounded-md">
        <span class="block font-bold text-2xl font-saira mb-2">Description:</span>
        <p class="font-roboto_mono mb-5 flex items-center gap-2">
          {{ items.description }}
        </p>

        <span class="block font-bold text-2xl font-saira mb-2">Price:</span>
        <p class="font-roboto_mono mb-5 flex items-center gap-2">
          <Icon icon="tabler:currency-naira" width="24" height="24" class="text-[#000000]" />
          {{ items.price }} per block
        </p>

        <span class="block font-bold text-2xl font-saira mb-2">Category:</span>
        <p class="font-roboto_mono mb-5 first-letter:uppercase">
          {{ items.category }}
        </p>

        <span class="block font-bold text-2xl font-saira mb-2">Use:</span>
        <p class="font-roboto_mono mb-5">
          {{ items.use }}
        </p>

        <span class="block font-bold text-2xl font-saira mb-2">Size:</span>
        <p class="font-roboto_mono mb-5">
          {{ items.size }}
        </p>
      </div>
    </div>
  </AppContainer>
</template>

<style scoped></style>
