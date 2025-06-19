<script setup lang="ts">
import { ref, shallowRef, useTemplateRef } from 'vue'
import AppLink from '../AppLink.vue'
import Button_UI from '../ui/Button_UI.vue'
import { Icon } from '@iconify/vue'
import { useIntersectionObserver } from '@vueuse/core'

const showProducts = ref<boolean | null>(false)
const showNavBarMobile = ref<boolean | null>(false)

const target = useTemplateRef<HTMLDivElement>('target')
const headerRef = useTemplateRef<HTMLElement>('headerRef')
const targetIsVisible = shallowRef(false)

// show other links under products
const toogleProducts = () => {
  showProducts.value = !showProducts.value
}

// show nav on mobile screen
const toogleOpenNavbar = () => {
  showNavBarMobile.value = true
}

// close nav on mobile screen
const toogleCLoseNavbar = () => {
  showNavBarMobile.value = false
}

// observe navbar
useIntersectionObserver(
  target,
  ([entry]) => {
    targetIsVisible.value = entry?.isIntersecting || false
  },
  {
    threshold: 1,
  },
)
</script>

<template>
  <section class="py-10">
    <div ref="target"></div>
    <header
      ref="headerRef"
      :class="[
        'top-0 w-full   z-50 transition-all duration-300 ease-in-out',
        !targetIsVisible ? 'fixed bg-white w-full py-3' : 'relative',
      ]"
    >
      <!-- desktop -->
      <div class="flex justify-between items-center px-5 lg:px-8">
        <!-- logo -->
        <AppLink to="/">
          <div class="w-[80px] h-[80px] bg-slate-100 rounded-full">
            <img
              src="/images/Logo.png"
              alt="Block Forge Logo"
              class="block object-cover max-w-full"
            />
          </div>
        </AppLink>

        <!-- nav -->
        <nav class="hidden lg:flex lg:space-x-8 font-roboto_mono text-secondary_text">
          <!-- home -->
          <AppLink to="/">Home</AppLink>

          <!-- product -->
          <div @click="toogleProducts" class="cursor-pointer">
            <span class="flex items-center gap-2 relative"
              >Produts
              <Icon
                :icon="showProducts ? 'iconamoon:arrow-up-2' : 'iconamoon:arrow-down-2'"
                width="24"
                height="24"
                style="color: #000000"
            /></span>

            <!-- sublinks under products -->
            <Transition>
              <div
                v-show="showProducts"
                class="absolute top-16 px-5 py-2 rounded-md bg-primary_bg w-[100px] space-y-2"
              >
                <AppLink to="/hollow">Hollow</AppLink>
                <AppLink to="/solid" class="block">Solid</AppLink>
              </div>
            </Transition>
          </div>

          <!-- about us -->
          <AppLink to="/about">About Us</AppLink>

          <!-- projects -->
          <AppLink to="/projects">Projects</AppLink>

          <!-- contractor hub -->
          <!-- <AppLink to="/contractor-hub">Contractor Hub</AppLink> -->

          <!-- contact -->
        </nav>

        <div class="lg:flex gap-5 hidden">
          <AppLink to="/contact">
            <Button_UI class="rounded-full font-roboto_mono"> Contact Us </Button_UI>
          </AppLink>
        </div>

        <!-- login and signup button
        <div class="lg:flex gap-5 hidden">

          <AppLink to="/auth/login">
            <Button_UI class="rounded-full font-roboto_mono">Login</Button_UI>
          </AppLink>


          <AppLink to="/auth/register ">
            <Button_UI variant="secondary" class="font-roboto_mono rounded-full"
            >Register</Button_UI
            >
          </AppLink>
        </div>
        -->

        <!-- icons -->
        <div class="flex lg:hidden cursor-pointer">
          <Icon
            v-if="showNavBarMobile"
            @click="toogleCLoseNavbar"
            icon="ic:round-close"
            width="24"
            height="24"
            style="color: #000000"
          />

          <Icon
            v-else
            @click="toogleOpenNavbar"
            icon="fe:bar"
            width="24"
            height="24"
            style="color: #000000"
          />
        </div>
      </div>

      <!-- mobile view nav -->
      <nav v-show="showNavBarMobile" class="flex flex-col lg:hidden space-y-8 px-10 pt-5">
        <AppLink @click="showNavBarMobile = false" to="/">Home</AppLink>
        <!-- product -->
        <div @click="toogleProducts" class="cursor-pointer">
          <span class="flex items-center gap-2 relative"
            >Produts
            <Icon
              :icon="showProducts ? 'iconamoon:arrow-up-2' : 'iconamoon:arrow-down-2'"
              width="24"
              height="24"
              style="color: #000000"
          /></span>

          <!-- sublinks under products -->
          <Transition>
            <div
              v-show="showProducts"
              class="absolute top-20 px-5 py-2 rounded-md bg-primary_bg w-[100px] space-y-2"
            >
              <AppLink to="/hollow" @click="showNavBarMobile = false">Hollow</AppLink>
              <AppLink to="/solid" class="block" @click="showNavBarMobile = false">Solid</AppLink>
            </div>
          </Transition>
        </div>

        <!-- about us -->
        <AppLink to="/about" @click="showNavBarMobile = false">About Us</AppLink>
        <AppLink to="/projects" @click="showNavBarMobile = false">Projects</AppLink>
        <!-- <AppLink to="/">Contractor Hub</AppLink> -->
        <AppLink to="/contact" @click="showNavBarMobile = false">
          <Button_UI class="rounded-full font-roboto_mono"> Contact Us </Button_UI>
        </AppLink>
      </nav>
    </header>
  </section>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
