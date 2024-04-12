import { defineConfig } from 'vite'
import { resolve } from 'path'

import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

server: {
host: true,
strictPort: true,
port: 8000,
},

  resolve: {
    alias: [{
      find: "src", replacement: resolve(__dirname, "src")
    }]
  },
  build: {
		minify: 'esbuild',
		target: "esnext"
	},
  define: {
    'process.env': {}
  }
})
