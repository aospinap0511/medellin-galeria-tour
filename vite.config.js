import { defineConfig } from 'vite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        gallery: resolve(__dirname, 'gallery.html'),
        reviews: resolve(__dirname, 'reviews.html'),
        tourCity: resolve(__dirname, 'tour-city.html'),
        tourCoffee: resolve(__dirname, 'tour-coffee.html'),
        tourComuna13: resolve(__dirname, 'tour-comuna13.html')
      }
    }
  }
});
