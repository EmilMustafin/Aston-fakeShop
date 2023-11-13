import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    base: '/',
    plugins: [react()],
  };

  if (command !== 'serve') {
    config.base = '/Aston-fakeShop/';
  }

  return config;
});
