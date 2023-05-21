// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
      },
    ],
  ],
  // @ts-ignore
  imports: {
    dirs: ["stores"],
  },
  // @ts-ignore
  alias: {
    pinia: '/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs',
  },
  routeRules: {
    '/spa': { ssr: false },
    '/static': { static: true },
    '/swr': { swr: true },
  },
})
