<script setup lang="ts">
defineProps<{
  className?: string
}>()
</script>

<template>
  <div :class="[className, 'w-[500px] bg-white shadow p-10 rounded-2xl border border-accent_btn']">
    <slot></slot>
  </div>
</template>

<style scoped></style>
