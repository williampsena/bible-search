import axios from 'axios'
import { AppConfig } from '../utils/config'

/**
 * Get api client
 * @method
 * @param apiKey - Authorization key
 * @returns Api Client -> Axios Instance
 */
export function getApiClient(apiKey: string) {
  if (!apiKey) throw new Error('Api Key is required')

  return axios.create({
    baseURL: AppConfig.baseUrl,
    timeout: 3000,
    headers: {
      'api-key': apiKey,
    },
  })
}
