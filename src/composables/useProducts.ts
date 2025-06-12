import httpClient from '@/libs/httpClients'
import type { Blocks } from '@/types'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
export const userProducts = () => {
  const allBlocks = ref<Blocks[]>([])

  const solidBlocks = ref<Blocks[]>([])

  const hollowBlocks = ref<Blocks[]>([])

  const blockById = ref<Blocks[]>([])

  const route = useRoute()

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

  const fetchBlockById = async () => {
    try {
      const id = route.params.id
      const response = await httpClient.get(`/products/getProduct/${id}`)
      // console.log(response.data.productId)
      blockById.value = response.data

      return blockById.value
    } catch (error) {
      console.log('Error Getting Id', error)
    }
  }

  const initializeData = async () => {
    await Promise.all([
      fetchAllProducts(),
      fetchSolidBlocks(),
      fetchHollowBlocks(),
      fetchBlockById(),
    ])
  }

  return {
    allBlocks,
    solidBlocks,
    blockById,

    fetchAllProducts,
    fetchSolidBlocks,
    fetchHollowBlocks,
    fetchBlockById,
    initializeData,
  }
}
