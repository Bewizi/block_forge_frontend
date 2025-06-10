<script setup lang="ts">
defineProps<{
  variant?: 'primary' | 'secondary'
}>()

const buttonClass = {
  primary: 'bg-[#e67e22] py-2 px-8 text-white',
  secondary: 'border-2 border-[#e67e22] py-2 px-8 text-[#2c3e50]',
}
</script>

<template>
  <button :class="buttonClass[variant || 'primary']">
    <slot></slot>
  </button>
</template>

<style scoped></style>
