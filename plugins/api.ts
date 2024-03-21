import createApi from '~/lib/api/createApi'

const api = createApi()
export default defineNuxtPlugin(() => {
  return {
    provide: {
      api,
    },
  }
})
