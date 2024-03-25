import type { groupsApi } from '@/lib/api/groupsApi'

export const useGroups = (): ReturnType<typeof groupsApi> => {
  const { $api } = useNuxtApp()

  return {
    getGroups: $api.groups.getGroups,
    createGroup: $api.groups.createGroup
  }
}
