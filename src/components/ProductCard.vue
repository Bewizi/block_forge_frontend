<script setup lang="ts">
import AppLink from './AppLink.vue'

defineProps<{
  hollow: {
    id: string
    name: string
    image: string
    category: string
  }
}>()
</script>

<template>
  <div>
    <AppLink :to="hollow.id">
      <div>
        <img :src="hollow.image" :alt="hollow.name" />
        <h1>{{ hollow.name }}</h1>
        <span>{{ hollow.category }}</span>
      </div>
    </AppLink>
  </div>
</template>

<style scoped></style>
