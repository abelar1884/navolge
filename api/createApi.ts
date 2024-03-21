import { unitsApi } from './unitsApi'

export interface apiInstance {
  units: ReturnType<typeof unitsApi>
}

const createApi = () => {
  return {
    units: unitsApi(),
  }
}

export default createApi
