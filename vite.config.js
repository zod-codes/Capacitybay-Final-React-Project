import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Capacitybay-Final-Rect-Project/",
  plugins: [react()],
})
