import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key'

export const supabase = createClient(supabaseUrl, supabaseKey)

export interface ContactFormData {
  name: string
  email: string
  phone: string
  service?: string
  message: string
  ip_address?: string
  user_agent?: string
  status?: 'new' | 'contacted' | 'completed' | 'spam'
}
