<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue'
</script>

<template>
  <section>
    <!-- <AppContainer>
      <main class="h-screen">
        <section class="flex flex-col lg:flex-row items-center justify-between gap-5">

          <div>
            <h1
              class="text-4xl md:text-6xl font-bold text-primary-heading mb-4 leading-tight font-saira"
            >
              Construct with Confidence
            </h1>
            <p
              class="text-lg md:text-xl text-secondary-text mb-8 max-w-2xl mx-auto font-roboto_mono"
            >
              Our robust concrete blocks are designed for lasting strength and exceptional results
              in any construction endeavor.
            </p>


            <div class="flex gap-5">
              <button
                class="bg-accent_btn text-white px-8 py-3 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 font-roboto_mono"
              >
                Explore Our Products
              </button>
              <button
                class="bg-primary-heading text-primary-bg border border-primary-heading px-8 py-3 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 font-roboto_mono"
              >
                Get a Quote
              </button>
            </div>
          </div>


          <div class="">
            <img
              src="/images/Road_Construction.jpg"
              alt="Road Construction"
              class="block object-cover max-w-full w-[600px] h-[600px] rounded-md"
            />
          </div>
        </section>
      </main>
    </AppContainer> -->

    <HeroSection />
  </section>
</template>
