import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default defineConfig({
  plugins: [react()],
  root: './src/renderer',
  base: './',
  build: {
    outDir: '../../dist/renderer',
    emptyOutDir: true,
    rollupOptions: {
      plugins: [commonjs(), nodeResolve()],
    },
  },
  resolve: {
    alias: {
      'redux-saga/effects': require.resolve('redux-saga/effects'),
      'redux-saga': require.resolve('redux-saga'),
    },
  },
  server: {
    port: 3000,
  },
});
