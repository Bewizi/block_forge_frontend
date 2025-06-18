<script setup lang="ts">
import AppContainer from '@/components/AppContainer.vue'
import AppLink from '@/components/AppLink.vue'
import Card_UI from '@/components/ui/Card_UI.vue'
import httpClient from '@/libs/httpClients'
import type { Blocks } from '@/types'
import { Icon } from '@iconify/vue'
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
    <section class="flex justify-center flex-wrap lg:flex-row gap-8">
      <div v-for="hollow in hollowBlocks" :key="hollow.id">
        <Card_UI class-name="text-center h-[600px]">
          <AppLink :to="`/block/${hollow.id}`">
            <div class="flex justify-center">
              <img
                :src="hollow.image"
                :alt="hollow.name"
                class="object-cover w-[200px] h-[200px] block rounded-2xl"
              />
            </div>
          </AppLink>
          <h1 class="mb-5 font-saira font-semibold text-2xl mt-5">{{ hollow.name }}</h1>
          <span class="flex items-center gap-2 font-roboto_mono justify-center">
            <Icon icon="tabler:currency-naira" width="24" height="24" class="text-[#000000]" />
            {{ hollow.price.toFixed(2) }}</span
          >
          <p class="text-lg font-roboto_mono mt-5">{{ hollow.description }}</p>
          <!-- <p>{{ solid.price }}</p> -->

          <!-- view more -->
          <!-- link with a button -->
          <!-- <div class="mt-5">
            <AppLink to="/hollow">
              <button>View More</button>
            </AppLink>
          </div> -->
          <!-- view more -->
        </Card_UI>
      </div>
    </section>
  </AppContainer>
</template>

<style scoped></style>
