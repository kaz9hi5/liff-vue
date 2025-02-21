import { defineConfig } from 'vite';
//import fs from 'fs';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  server: {
    /*
    https: {
      // cp -p /etc/letsencrypt/live/../*.pem .cert & chown
      cert: fs.readFileSync('.cert/fullchain.pem'), 
      key: fs.readFileSync('.cert/privkey.pem'),
    },
    */
    host: '0.0.0.0',
    port: 3000,
    cors: true
  },
  root: 'src/',
  envDir: '../',
  build: {
    outDir: '../dist',
    emptyOutDir: true
  }
});
