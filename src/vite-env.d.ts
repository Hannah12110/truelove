/// <reference types="vite/client" />

declare module 'miaoda-sc-plugin' {
  import { Plugin } from 'vite';
  export const miaodaDevPlugin: () => Plugin;
}

