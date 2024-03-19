import { resolve } from 'node:path'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@hebilicious/authjs-nuxt'],
  alias: {
    cookie: resolve(__dirname, 'node_modules/cookie')
  },
  runtimeConfig: {
    authJs: {
      secret: process.env.NUXT_NEXTAUTH_SECRET // You can generate one with `openssl rand -base64 32`
    },
    public: {
      authJs: {
        baseUrl: process.env.NUXT_NEXTAUTH_URL, // The URL of your deployed app (used for origin Check in production)
        verifyClientOnEveryRequest: true // whether to hit the /auth/session endpoint on every client request
      }
    }
  }
})
