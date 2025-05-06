
import { createClient } from '@supabase/supabase-js'

// Use Vite's import.meta.env instead of process.env
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://bbslsywszzbtmprpnuge.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJic2xzeXdzenpidG1wcnBudWdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU2NTExOTcsImV4cCI6MjA2MTIyNzE5N30.C0wU1niXiVEuLO18YgJCDdbEg3hq4roHtkR_V21g8NQ'

export const supabase = createClient(supabaseUrl, supabaseKey)
