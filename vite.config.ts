import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// @ts-ignore
export default defineConfig((env) => {
  const isDev = env.mode === 'development';
  const isProd = env.mode === 'production';
  const port = process.env.PORT || 3469;
  const webcompname = process.env.WEBCOMPNAME || null;

  console.log({
    isDev,
    isProd,
    port,
    webcompname,
  });
  if (!webcompname && isProd) {
    console.error('WEBCOMPNAME is required in production mode');
    return process.exit(0);
  }
  return {
    define: {
      'process.env': {},
    },
    plugins: [react()],
    build: {
      outDir: 'dist',
      emptyOutDir: true,
      lib: {
        entry: `src/${webcompname}/index.tsx`,
        formats: ['iife'],
        name: `${webcompname}.js`,
      },
      rollupOptions: {
        output: {
          format: 'iife',
          entryFileNames: `${webcompname}.js`,
        },
      },
      cssCodeSplit: true,
      minify: true,
    },
    server: {
      host: 'localhost',
      port,
      cors: true,
    },
  };
});
