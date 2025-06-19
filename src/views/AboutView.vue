<script lang="ts" setup>
import AppContainer from '@/components/AppContainer.vue'
import Call_to_Action from '@/components/Call_to_Action.vue'
import Card_UI from '@/components/ui/Card_UI.vue'
import { Icon } from '@iconify/vue'
import { useIntersectionObserver } from '@vueuse/core'
import { motion } from 'motion-v'
import { ref } from 'vue'
const isVisible = ref<boolean>(false)
const sectionRef = ref<HTMLElement | null>(null)

useIntersectionObserver(
  sectionRef,
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      isVisible.value = true
    }
  },
  {
    threshold: 0.3,
  },
)

const goals = [
  {
    id: 1,
    icons: 'mdi:lightbulb-on-outline',
    heading: 'Our Commitment to Quality & Innovation',
    text: "We understand that the integrity of your project depends on the materials you use. That's why we meticulously craft each block, from our versatile Bullnose Concrete Blocks to our sturdy Durablocks and aesthetically pleasing Desert Sand Splitface options, ensuring they meet rigorous standards for durability and reliability.",
  },
  {
    id: 2,
    icons: 'mdi:view-grid-outline',
    heading: 'Our Diverse Product Portfolio',
    text: "Whether you're embarking on a major commercial development, a residential build, or a specific landscaping project, Block Forge offers a comprehensive range of concrete blocks to suit your needs. Our diverse portfolio includes blocks ideal for foundational work, structural walls, decorative facades, and paving solutions. Each product is crafted to offer both functional excellence and aesthetic appeal, providing the perfect building material for any vision.",
  },
  {
    id: 3,
    icons: 'mdi:account-heart-outline',
    heading: 'Our Customer-Centric Approach',
    text: 'We believe in building strong relationships, just as we build strong structures. Our team of experienced professionals is dedicated to understanding your project requirements and providing personalized support, from product selection guidance to logistics and delivery. We pride ourselves on our responsiveness and flexibility, ensuring a seamless experience that helps you stay on schedule and within budget. Your success is our priority, and we are committed to being a dependable partner every step of the way.',
  },
  {
    id: 4,
    icons: 'mdi:eye-outline',
    heading: 'Our Vision for the Future',
    text: 'Looking ahead, Block Forge aims to continue leading the way in sustainable and efficient concrete block manufacturing. We are invested in research and development to introduce eco-friendlier materials and processes, striving to minimize our environmental footprint while maximizing product performance. We envision a future where construction is not only strong and durable but also responsible and innovative, and we are proud to contribute to that vision.',
  },
]
</script>

<template>
  <AppContainer>
    <div class="about">
      <h1 class="font-saira font-bold text-4xl lg:text-6xl mb-5">About Block Forge</h1>

      <img
        src="/images/A_manufacturing_comp.png"
        alt="Forge Manufacturing Company"
        class="h-screen object-cover w-full block"
      />

      <!-- about block forge -->
      <section>
        <p
          class="first-letter:uppercase first-letter:font-bold first-letter:text-4xl mt-10 leading-loose font-roboto_mono tracking-wide mb-10"
        >
          At Block Forge, we are dedicated to providing the highest quality concrete blocks designed
          to be the foundation of your success. With a commitment to lasting strength and
          exceptional performance, our robust concrete blocks are engineered to deliver outstanding
          results in every construction endeavor, big or small.
        </p>

        <p class="leading-loose font-roboto_mono tracking-wide">
          We understand that the integrity of your project depends on the materials you use. That's
          why we meticulously craft each block, from our versatile Bullnose Concrete Blocks to our
          sturdy Durablocks and aesthetically pleasing Desert Sand Splitface options, ensuring they
          meet rigorous standards for durability and reliability.
        </p>
      </section>
    </div>

    <!-- goals, vision, product -->
    <div>
      <motion.section
        ref="sectionRef"
        v-show="true"
        :initial="{ opacity: 0, y: 20 }"
        :animate="isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }"
        :transition="{ duration: 0.8, ease: 'easeInOut' }"
        class="flex flex-wrap flex-col lg:flex-row gap-5 justify-center mt-20"
      >
        <Card_UI v-for="items in goals" :key="items.id">
          <div class="flex items-center justify-center mb-5">
            <Icon
              :icon="items.icons"
              width="34"
              height="34"
              class="text-white bg-secondary_text rounded-full p-2"
            />
          </div>
          <h3 class="text-center font-saira font-bold text-2xl mb-5">
            {{ items.heading }}
          </h3>
          <p class="font-roboto_mono leading-normal text-sm text-center">
            {{ items.text }}
          </p>
        </Card_UI>
      </motion.section>
    </div>
  </AppContainer>

  <Call_to_Action />
</template>

<style></style>
