export const useUnits = () => {
  const { $api } = useNuxtApp()

  return {
    getUnits: $api.units.getUnits,
    createUnit: $api.units.createUnit,
  }
}
