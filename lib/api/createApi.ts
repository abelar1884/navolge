import { groupsApi } from './groupsApi'

export interface apiInstance {
  groups: ReturnType<typeof groupsApi>
}

const createApi = () => {
  return {
    groups: groupsApi()
  }
}

export default createApi
