import axios from 'axios'
import { Configs } from './config'

export function getApiClient(apiKey: string) {
  if (!apiKey) throw new Error('Api Key is required')

  return axios.create({
    baseURL: Configs.baseUrl,
    timeout: 3000,
    headers: {
      auth: {
        user: apiKey,
      },
    },
  })
}
