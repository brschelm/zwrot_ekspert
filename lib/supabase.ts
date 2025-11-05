import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Supabase jest opcjonalny - nie rzucamy błędu podczas buildu
let supabase: SupabaseClient | null = null

if (supabaseUrl && supabaseKey) {
  try {
    supabase = createClient(supabaseUrl, supabaseKey)
  } catch (error) {
    console.warn('⚠️ Nie można utworzyć klienta Supabase:', error)
    supabase = null
  }
} else {
  console.warn('⚠️ Supabase nie jest skonfigurowany - zmienne środowiskowe nie są ustawione')
}

export { supabase }

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
