import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

import {ViteToml} from 'vite-plugin-toml';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact(), ViteToml()],
})
