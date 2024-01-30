import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react({ plugins: [["@swc/plugin-styled-components", {}]] }),
    legacy(),
  ],
  define: {
    'process.env.NODE_ENV': `'${mode || 'production'}'`,
    'SC_DISABLE_SPEEDY': "true",
  }
}))
