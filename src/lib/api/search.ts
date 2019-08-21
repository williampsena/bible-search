import { getApiClient } from './api'
import { checkRequired } from '../utils/validation'

/**
 * Search content
 * @method
 * @param apiKey - Authorization key
 * @param version - Bible version (Default: por-NTLH).
 * @param content - Search content
 * @returns verses
 */
export async function search(apiKey: string, version: string, content: string) {
  const axios = getApiClient(apiKey)

  checkRequired({ version, content }, ['version', 'content'])

  const response = await axios.get(`version=${version}&query=${content}`)

  return response.data
}
