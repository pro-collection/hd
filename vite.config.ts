import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const path = require('path');

const env = process.env.ENV;

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [react()],
  css: {
    modules: {
      scopeBehaviour: 'local',
    },
  },
  base: env !== 'dev' ? 'https://cdn.jsdelivr.net/gh/pro-collection/hd/dist/' : '',
});
