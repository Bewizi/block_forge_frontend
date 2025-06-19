import httpClient from '@/libs/httpClients'
import type { Blocks } from '@/types'
import axios from 'axios'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
export const userProducts = () => {
  const allBlocks = ref<Blocks[]>([])

  const solidBlocks = ref<Blocks[]>([])

  const hollowBlocks = ref<Blocks[]>([])

  const blockById = ref<Blocks[]>([])

  const route = useRoute()

  const error = ref('')
  const isLoading = ref<boolean>(false)

  const handleError = (err: unknown, source: string) => {
    if (axios.isAxiosError(err)) {
      error.value = err.response?.data?.message || err.message
      console.error(`Axios error fetching ${source}:`, error.value)
    } else if (err instanceof Error) {
      error.value = err.message
      console.error(`Generic error fetching ${source}:`, error.value)
    } else {
      error.value = `An unknown error occurred while fetching ${source}.`
      console.error(`Unknown error fetching ${source}:`, err)
    }
  }

  const fetchAllProducts = async () => {
    isLoading.value = true
    try {
      const response = await httpClient.get('/products/allProducts')
      // console.log(response.data)
      allBlocks.value = response.data.products || []
      error.value = ''
    } catch (err: unknown) {
      handleError(err, 'Error fetching products')
    } finally {
      isLoading.value = false
    }
  }

  const fetchSolidBlocks = async () => {
    try {
      const response = await httpClient.get(`/products/category/solid`)
      // console.log(response.data)
      solidBlocks.value = response.data.products || []
    } catch (err: unknown) {
      handleError(err, 'Solid Blocks')
    }
  }

  const fetchHollowBlocks = async () => {
    try {
      const response = await httpClient.get(`/products/category/hollow`)
      // console.log(response.data)
      hollowBlocks.value = response.data.products || []
    } catch (err) {
      handleError(err, 'Error fetching Hollow Blocks')
    }
  }

  const fetchBlockById = async () => {
    const id = route.params.id

    if (!id) {
      console.warn('No product ID found in route params')
      return
    }
    try {
      const response = await httpClient.get(`/products/getProduct/${id}`)
      // console.log(response.data.productId)
      blockById.value = [response.data.productId]

      return blockById.value
    } catch (err) {
      handleError(err, 'Error fetching block id')
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
    error,
    isLoading,

    fetchAllProducts,
    fetchSolidBlocks,
    fetchHollowBlocks,
    fetchBlockById,
    initializeData,
  }
}
