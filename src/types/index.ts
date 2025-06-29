export interface SignUpForm {
  email: string
  password: string
  firstName: string
  lastName: string
  phone: string
  role: 'contractor' | 'supplier' | 'homeowner'
}

export interface LoginForm {
  email: string
  password: string
}

export interface Profile {
  id: string
  user_id?: string
  firstName: string
  lastName: string
  phone: string
  role: string
}

export interface Blocks {
  id: string
  name: string
  image: string
  price: number
  description: string
  use: string
  size: string
  category: string
}
