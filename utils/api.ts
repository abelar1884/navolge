export const $api = $fetch.create({
  onRequest ({ options }) {
    options.baseURL = useRuntimeConfig().public.apiBaseUrl || '/api'

    const accessToken = useCookie('accessToken').value
    if (accessToken) {
      options.headers = {
        ...options.headers,
        Authorization: `Bearer ${accessToken}`
      }
    }
  }
})
