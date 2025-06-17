<script setup lang="ts">
import { ref } from 'vue'

import AppContainer from '@/components/AppContainer.vue'

// import AppLink from '@/components/AppLink.vue'
import Call_to_Action from '@/components/Call_to_Action.vue'

// import { Icon } from '@iconify/vue';

interface BlockType {
  name: string
  description?: string
}

interface Project {
  id: number
  title: string
  type: string
  location: string
  description: string
  blocksUsed: BlockType[]
  imageUrls: string[]
  benefits?: string[]
}

const projects = ref<Project[]>([
  {
    id: 1,
    title: 'Grand View Residential Estate',
    type: 'Residential Development',
    location: 'Lagos Mainland',
    description:
      "A modern housing estate designed for contemporary living, prioritizing durability and aesthetic appeal. Block Forge's blocks were chosen for their robust quality and ease of installation, significantly speeding up construction.",
    blocksUsed: [
      { name: 'Bullnose Concrete Block', description: 'Foundations and perimeter walls' },
      { name: 'Paving Block', description: 'Driveways and pedestrian walkways' },
    ],
    imageUrls: [
      // Use placeholder images for now. Replace with your actual project photos.
      '/images/Grand_View_Residential_Estate.png',
      'https://placehold.co/600x400/D0D0D0/333333?text=Estate+View+2',
      'https://placehold.co/600x400/C0C0C0/333333?text=Estate+Detail',
    ],
    benefits: [
      'Enhanced structural integrity',
      'Faster construction timeline',
      'Attractive and uniform finish',
    ],
  },
  {
    id: 2,
    title: 'Future Scholars School Complex',
    type: 'Educational Building',
    location: 'Ibadan, Oyo State',
    description:
      "Construction of a multi-story school building requiring strong, fire-resistant, and sound-insulating materials. Block Forge's solid and hollow blocks met all stringent safety and performance requirements for an educational environment.",
    blocksUsed: [
      { name: 'Durablock (Solid)', description: 'Exterior and interior load-bearing walls' },
      {
        name: 'Hollow Concrete Block',
        description: 'Partition walls and non-load-bearing structures',
      },
      { name: 'Splitface Block', description: 'Decorative facade elements' },
    ],
    imageUrls: [
      '/images/Educational_Building.png',
      'https://placehold.co/600x400/C0C0C0/444444?text=School+View+2',
      'https://placehold.co/600x400/B0B0B0/444444?text=School+Detail',
    ],
    benefits: [
      'Superior fire resistance for safety',
      'Excellent sound insulation for learning environment',
      'Long-term durability and low maintenance',
    ],
  },
  {
    id: 3,
    title: 'Coastal Road Link Infrastructure',
    type: 'Infrastructure Development',
    location: 'Port Harcourt, Rivers State',
    description:
      'A critical road expansion project requiring robust retaining walls and storm drain structures built to withstand heavy usage and environmental factors. Our specialized blocks offered the necessary strength and resistance.',
    blocksUsed: [
      { name: 'Retaining Wall Block', description: 'Erosion control and embankment stabilization' },
      { name: 'Drainage Block', description: 'Efficient water management systems' },
      { name: 'Pillar Block', description: 'Boundary markers and signage supports' },
    ],
    imageUrls: [
      '/images/A_road_construction.png',
      'https://placehold.co/600x400/B0B0B0/555555?text=Drainage+System',
    ],
    benefits: [
      'High load-bearing capacity for heavy traffic',
      'Resistance to environmental wear and tear',
      'Quick installation for large-scale public works',
    ],
  },
  {
    id: 4,
    title: 'Modern Office Complex',
    type: 'Commercial Building',
    location: 'Abuja, FCT',
    description:
      'Construction of a multi-story commercial office complex focusing on modern aesthetics and efficient construction. Block Forge’s precise blocks ensured a smooth build and contemporary look.',
    blocksUsed: [
      { name: 'Solid Concrete Block', description: 'Structural walls and partitions' },
      { name: 'Pillar Block', description: 'Decorative pillars and boundary walls' },
    ],
    imageUrls: [
      '/images/Modern_Office_Complex.png',
      'https://placehold.co/600x400/909090/666666?text=Office+Detail',
    ],
    benefits: [
      'Clean finish for modern architecture',
      'Fast and efficient construction',
      'Long-term structural integrity',
    ],
  },
])
</script>

<template>
  <AppContainer class="py-16">
    <h1 class="text-4xl font-bold text-primary_heading mb-12 text-center font-saira">
      Our Projects in Action
    </h1>
    <p class="text-lg text-secondary_text mb-16 text-center max-w-3xl mx-auto font-roboto_mono">
      Discover how Block Forge's high-quality concrete blocks are making a difference in
      construction projects across Nigeria. From foundational strength to architectural beauty, our
      products are at the heart of durable and innovative builds.
    </p>

    <!-- Grid layout for project cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      <!-- Loop through each project to display its card -->
      <div
        v-for="project in projects"
        :key="project.id"
        class="bg-white rounded-lg shadow overflow-hidden transition-transform duration-300 hover:scale-[1.02] border border-accent_btn"
      >
        <!-- Project Image -->
        <div class="h-60 overflow-hidden bg-gray-100 flex items-center justify-center">
          <img
            :src="project.imageUrls[0]"
            :alt="project.title"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Project Details -->
        <div class="p-6">
          <h2 class="text-2xl font-semibold text-primary_heading mb-2 font-saira">
            {{ project.title }}
          </h2>
          <p class="text-sm text-gray-500 mb-3 font-roboto_mono">
            {{ project.type }} | {{ project.location }}
          </p>
          <p class="text-secondary_text mb-4 text-sm font-roboto_mono leading-relaxed">
            {{ project.description }}
          </p>

          <!-- Blocks Used Section -->
          <div class="mb-4">
            <h3 class="text-md font-medium text-primary_heading mb-2 font-saira">Blocks Used:</h3>
            <ul class="list-disc list-inside text-gray-600 text-sm font-roboto_mono">
              <li v-for="(block, index) in project.blocksUsed" :key="index" class="mb-1">
                <strong>{{ block.name }}</strong
                ><span v-if="block.description">: {{ block.description }}</span>
              </li>
            </ul>
          </div>

          <!-- Key Benefits Section (Conditionally rendered if benefits exist) -->
          <div v-if="project.benefits && project.benefits.length > 0" class="mb-4">
            <h3 class="text-md font-medium text-primary_heading mb-2 font-saira">Key Benefits:</h3>
            <ul class="list-disc list-inside text-gray-600 text-sm font-roboto_mono">
              <li v-for="(benefit, index) in project.benefits" :key="index" class="mb-1">
                {{ benefit }}
              </li>
            </ul>
          </div>

          <!-- Optional: Link to a detailed project page  -->
          <!-- <AppLink :to="`/projects/${project.id}`" class="inline-block mt-4 text-blue-600 hover:underline font-inter">
            View Details <Icon icon="mdi:arrow-right" class="inline-block ml-1" />
          </AppLink> -->
        </div>
      </div>
    </div>

    <!-- Call to Action Section -->
    <Call_to_Action />
  </AppContainer>
</template>

<style scoped>
/* No specific scoped styles needed if relying heavily on Tailwind CSS */
/* You can add custom styles here if needed, e.g., for specific animations or complex layouts not covered by Tailwind. */
</style>
