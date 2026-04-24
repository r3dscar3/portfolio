import { defineConfig } from 'vite';
import devtoolsJson from 'vite-plugin-devtools-json';
import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), devtoolsJson()],
  resolve: {
    tsconfigPaths: true,
  },
  server: {
    port: 3000,
  },
});
