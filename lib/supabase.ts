import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl) {
  throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL environment variable')
}

if (!supabaseKey) {
  throw new Error('Missing NEXT_PUBLIC_SUPABASE_ANON_KEY environment variable')
}

export const supabase = createClient(supabaseUrl, supabaseKey)

export interface ContactSubmission {
  id?: string
  name: string
  email: string
  phone: string
  service?: string
  message: string
  consent: boolean
  newsletter: boolean
  created_at?: string
  ip_address?: string
  user_agent?: string
  status?: 'new' | 'contacted' | 'completed' | 'spam'
}
