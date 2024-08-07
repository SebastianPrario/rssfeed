import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@views',
        replacement: path.resolve(path.join(__dirname, '/src/views'))
      },
      {
        find: '@component',
        replacement: path.resolve(path.join(__dirname, '/src/component'))
      },
      {
        find: '@fire',
        replacement: path.resolve(path.join(__dirname, '/src/fireConfig'))
      }
    ]
  }
})
