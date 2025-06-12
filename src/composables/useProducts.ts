import httpClient from '@/libs/httpClients'
import type { Blocks } from '@/types'
import { ref } from 'vue'

export const userProducts = () => {
  const allBlocks = ref<Blocks[]>([])

  const solidBlocks = ref<Blocks[]>([])

  const hollowBlocks = ref<Blocks[]>([])

  const fetchAllProducts = async () => {
    try {
      const response = await httpClient.get('/products/allProducts')
      console.log(response.data)
      allBlocks.value = response.data.products || []
    } catch (error) {
      console.log('Error fetching All Products', error)
    }
  }

  const fetchSolidBlocks = async () => {
    try {
      const response = await httpClient.get(`/products/category/solid`)
      console.log(response.data)
      solidBlocks.value = response.data.products || []
    } catch (error) {
      console.error(`Error fetching solid block:`, error)
    }
  }

  const fetchHollowBlocks = async () => {
    try {
      const response = await httpClient.get(`/products/category/hollow`)
      console.log(response.data)
      hollowBlocks.value = response.data.products || []
    } catch (error) {
      console.error(`Error fetching hollow block:`, error)
    }
  }

  const initializeData = async () => {
    await Promise.all([fetchAllProducts(), fetchSolidBlocks(), fetchHollowBlocks()])
  }

  return {
    allBlocks,
    solidBlocks,

    fetchAllProducts,
    fetchSolidBlocks,
    fetchHollowBlocks,
    initializeData,
  }
}
