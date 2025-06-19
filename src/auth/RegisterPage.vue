<!-- <script setup lang="ts">
import { ref } from 'vue'
import { useAuth } from '@/composables/useAuth'
import type { SignUpForm } from '@/types'
import { useRouter } from 'vue-router'

const router = useRouter()

const form = ref<SignUpForm>({
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  phone: '',
  role: 'homeowner', // Default role
})

const { register } = useAuth()
const error = ref<string | null>(null)

const onSubmit = async () => {
  try {
    await register(form.value)
    // Redirect after signup (handled in router)
    router.push('/')
  } catch (err) {
    console.log(error.value)
    console.log('Error fetching data:', err)
  }
}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <input v-model="form.email" type="email" placeholder="Email" required />
    <input v-model="form.password" type="password" placeholder="Password" required />
    <div>
      <input v-model="form.firstName" placeholder="First Name" required />
      <input v-model="form.lastName" placeholder="Last Name" required />
    </div>
    <input v-model="form.phone" type="tel" placeholder="Phone (+123...)" required />

    <fieldset>
      <legend>Role</legend>
      <label>
        <input v-model="form.role" type="radio" value="contractor" />
        Contractor
      </label>
      <label>
        <input v-model="form.role" type="radio" value="supplier" />
        Supplier
      </label>
      <label>
        <input v-model="form.role" type="radio" value="homeowner" />
        Homeowner
      </label>
    </fieldset>

    <button type="submit">Sign Up</button>
    <p v-if="error" class="error">{{ error }}</p>
  </form>
</template> -->

<script lang="ts" setup></script>

<template>
  <form @submit.prevent="">
    <input type="email" placeholder="Email" required />
    <input type="password" placeholder="Password" required />
    <div>
      <input placeholder="First Name" required />
      <input placeholder="Last Name" required />
    </div>
    <input type="tel" placeholder="Phone (+123...)" required />

    <fieldset>
      <legend>Role</legend>
      <label>
        <input type="radio" value="contractor" />
        Contractor
      </label>
      <label>
        <input type="radio" value="supplier" />
        Supplier
      </label>
      <label>
        <input type="radio" value="homeowner" />
        Homeowner
      </label>
    </fieldset>

    <button type="submit">Sign Up</button>
  </form>
</template>
