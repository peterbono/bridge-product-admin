import { defineConfig } from 'vite';

// A product on the Bridge design system: the library comes from npm (@bridge-ds/react, @bridge-ds/tokens), like in
// any product repository. The Bridge toolbar (@bridge-ds/toolbar) is mounted in src/App.tsx.
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  esbuild: { jsx: 'automatic' },
  resolve: {
    alias: [
      // The data generator imports the full faker build (every locale, about 2 MB). English is enough.
      { find: /^@faker-js\/faker$/, replacement: '@faker-js/faker/locale/en' },
    ],
    dedupe: ['react', 'react-dom'],
  },
  server: { port: 5180 },
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 900,
    rollupOptions: {
      output: {
        manualChunks: {
          ra: ['ra-core', 'react-hook-form', '@tanstack/react-query', 'react-router', 'react-router-dom'],
          data: ['data-generator-retail', 'ra-data-fakerest'],
          charts: ['recharts'],
        },
      },
    },
  },
});
