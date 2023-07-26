import { UserConfigExport, defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  hmr: false,
} as UserConfigExport);
