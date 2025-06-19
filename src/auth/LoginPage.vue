<!-- <script setup lang="ts">
// import { useAuth } from '@/composables/useAuth'
import httpClient from '@/libs/httpClients'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { toast, type ToastOptions } from 'vue3-toastify'

// const { login } = useAuth()

const router = useRouter()
const form = ref({
  email: '',
  password: '',
})

const handleSubmit = async () => {
  try {
    const response = await httpClient.post('/user/login', form.value)
    response.data = form.value
    console.log('Login Successful', response.data)

    console.log('user data', form.value)
    // await login(form.value)
    toast.success('Login Successful', { autoclose: 3000 } as ToastOptions)
    // alert('Login successful:')

    router.push('/')
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <div>
    <h1>Login Page</h1>
    <p>Welcome to login page</p>

    <form @submit.prevent="handleSubmit">
      <label for="" class="block">Email</label>
      <input type="email" placeholder="Enter email address" v-model="form.email" />

      <label for="" class="block">Password</label>
      <input type="text" placeholder="Enter password" v-model="form.password" />

      <button type="submit">Login</button>
    </form>
  </div>
</template>

<style scoped></style> -->
