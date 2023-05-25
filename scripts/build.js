import {build, defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import cleanPlugin from 'vite-plugin-clean';
import UnoCSS from 'unocss/vite'

const config = defineConfig({
  plugins: [
    cleanPlugin(),
    UnoCSS(),
    vue()
  ],
  build: {
    lib: {
      entry: '../src/index.js',
      fileName: '[name]',
      formats: ['cjs', 'es']
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        dir: '../dist'
      },
    },
  },
})


build(config)