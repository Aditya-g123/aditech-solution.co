import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://facfafeyonflkxmkjalj.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZhY2ZhZmV5b25mbGt4bWtqYWxqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU4NDEwOTYsImV4cCI6MjA2MTQxNzA5Nn0.qwHyOqGs89cTstWXAYgsd26FLE6zsPARh2zBv_FRrGQ'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
  realtime: {
    params: {
      eventsPerSecond: 10,
    },
  },
  global: {
    headers: {
      'x-my-custom-header': 'aaditech-solution',
    },
  },
})

// Alternative client without realtime for basic operations
export const supabaseClient = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
  realtime: {
    disabled: true, // Disable realtime to avoid isows dependency
  },
})
