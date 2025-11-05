import { createClient, SupabaseClient } from '@supabase/supabase-js'

// Supabase jest opcjonalny - funkcja tworząca klienta tylko gdy zmienne są dostępne
// Używamy funkcji zamiast stałej, żeby uniknąć problemów podczas buildu
export function getSupabaseClient(): SupabaseClient | null {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseKey) {
    return null
  }

  try {
    return createClient(supabaseUrl, supabaseKey)
  } catch (error) {
    console.warn('⚠️ Nie można utworzyć klienta Supabase:', error)
    return null
  }
}

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
