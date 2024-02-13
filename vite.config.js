import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://github.com/AYAZ-KHAN-02024/ToDo_by_ayaz",
  plugins: [react()],
})
