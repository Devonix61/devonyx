
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Define environment variables that should be available in the client
  define: {
    // This ensures that import.meta.env.VITE_* variables are properly passed to the client
    'import.meta.env.VITE_SUPABASE_URL': JSON.stringify(process.env.VITE_SUPABASE_URL || 'https://bbslsywszzbtmprpnuge.supabase.co'),
    'import.meta.env.VITE_SUPABASE_ANON_KEY': JSON.stringify(process.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJic2xzeXdzenpidG1wcnBudWdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU2NTExOTcsImV4cCI6MjA2MTIyNzE5N30.C0wU1niXiVEuLO18YgJCDdbEg3hq4roHtkR_V21g8NQ'),
  },
}));
