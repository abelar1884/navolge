import { useApi } from '@/composables/useApi'

export const unitsApi = () => ({
  getUnits(): PaginateResponseApi<Unit> {
    return useApi('/api/units')
  },

  // для роутов взаимодействующих с пользователем используем $fetch
  createUnit(payload: PayloadUnit) {
    return $api('/api/units', {
      method: 'POST',
      body: payload,
    })
  },
})
