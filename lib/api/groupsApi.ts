import type { AsyncData } from '#app'
import { useApi } from '@/composables/useApi'

export const groupsApi = () => ({
  getGroups () {
    return useApi('/api/groups')
  },
  createGroup (payload: GroupOption) {
    return $api('/api/groups', {
      method: 'POST',
      body: payload
    })
  }
})
