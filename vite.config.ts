import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // 只在开发环境加载 miaodaDevPlugin
  const miaodaDevPlugin = mode === 'development' 
    ? require('miaoda-sc-plugin').miaodaDevPlugin 
    : undefined;

  return {
    // 适配 GitHub Pages 子路径
    base: mode === 'production' ? '/truelove/' : '/',

    plugins: [
      react(),
      svgr({
        svgrOptions: {
          icon: true,
          exportType: 'named',
          namedExport: 'ReactComponent',
        },
      }),
      // 如果插件存在才加入数组
      ...(miaodaDevPlugin ? [miaodaDevPlugin()] : [])
    ],

    resolve: {
      alias: {
        '@': path.resolve(path.dirname(new URL(import.meta.url).pathname), './src'),
      },
    },
  };
});