import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport, { VantResolve } from 'vite-plugin-style-import';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    styleImport({
      resolves: [VantResolve()],
    }),
  ],
  server:{
    port:8080,
    open:true, //默认打开浏览器
    proxy:{
      
    }
  }
})
