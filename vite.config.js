import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',  // Adjust if needed for sub-paths
  server: {
    fs: {
      allow: ['.'], // Allows all files in the root project to be served
    },
    hmr: {
      overlay: false,  // Disable HMR overlay for better debugging
    },
  },
});
