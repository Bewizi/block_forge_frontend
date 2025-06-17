<script setup lang="ts">
import AppContainer from '@/components/AppContainer.vue'
import AppLink from '@/components/AppLink.vue'
import Card_UI from '@/components/ui/Card_UI.vue'
import httpClient from '@/libs/httpClients'
import type { Blocks } from '@/types'
import { Icon } from '@iconify/vue'
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
    <section class="flex justify-center flex-wrap lg:flex-row gap-8 items-center">
      <div v-for="solid in solidBlocks" :key="solid.id" class="text-center">
        <Card_UI>
          <AppLink :to="`/block/${solid.id}`">
            <div class="flex justify-center mb-5">
              <img
                :src="solid.image"
                :alt="solid.name"
                class="object-cover w-[200px] h-[200px] block rounded-2xl"
              />
            </div>
          </AppLink>
          <h1 class="mb-5 font-saira font-semibold text-2xl">{{ solid.name }}</h1>
          <span class="flex items-center justify-center gap-2 font-roboto_mono">
            <Icon icon="tabler:currency-naira" width="24" height="24" class="text-[#000000]" />
            {{ solid.price.toFixed(2) }}</span
          >
          <p class="text-lg font-roboto_mono mt-5">{{ solid.description }}</p>
          <!-- <p>{{ solid.price }}</p> -->
        </Card_UI>
      </div>
    </section>
  </AppContainer>
</template>

<style scoped></style>
