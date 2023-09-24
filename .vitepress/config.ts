import { whyframe } from '@whyframe/core'
import { whyframeVue } from '@whyframe/vue'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitepress'
import { hmrFix } from './plugins/hmrFix.js'

export default defineConfig({
  cleanUrls: true,
  appearance: { listenToStorageChanges: false }, // handling this in Story.vue itself to avoid flickering

  title: 'Cool UI',
  themeConfig: {
    aside: false,
    outline: false // enable these once you've got enough content
  },

  rewrites: {
    'src/components/:comp/index.md': 'components/:comp.md',
    'docs/:splat*': ':splat*'
  },

  vite: {
    plugins: [
      whyframe({ defaultSrc: '/_frame', components: [{ name: 'Story' }] }),
      whyframeVue({ include: /\.(vue|md)$/ }),
      hmrFix()
    ],

    resolve: {
      alias: { '@': fileURLToPath(new URL('../src', import.meta.url)) }
    },

    // not needed, just there to prevent reload on cold start
    optimizeDeps: { include: ['@vueuse/core', 'lucide-vue-next'] }
  }
})
