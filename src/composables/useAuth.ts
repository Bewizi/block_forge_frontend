import { supabase } from '@/libs/supabaseClients'
import type { LoginForm, SignUpForm } from '@/types'

export const useAuth = () => {
  const register = async (form: SignUpForm) => {
    const { data: authUser, error: authError } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
    })

    if (authError) throw authError

    console.log('Auth user:', authUser.user?.id)

    // if (!authError) {
    //   throw new Error('User creation failed')
    // }

    const { error: profileError } = await supabase.from('profile').insert({
      // id: authUser.user?.id,
      user_id: authUser.user?.id,
      firstName: form.firstName,
      lastName: form.lastName,
      phone: form.phone,
      role: form.role,
    })

    console.log('Profile insert result:', { data: authUser, profileError })

    if (profileError) throw profileError
  }

  const login = async (form: LoginForm) => {
    const { data: authUser, error: authError } = await supabase.auth.signInWithPassword({
      email: form.email,
      password: form.password,
    })

    if (authError) throw authError

    console.log('Login successful:', authUser.user?.id)
    // alert('Login successful:')
    return authUser
  }

  const logout = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  }

  return {
    register,
    login,
    logout,
  }
}
