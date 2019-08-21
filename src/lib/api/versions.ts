import { getApiClient } from './api'

/**
 * Get bible books
 * @method
 * @param apiKey - Authorization key
 * @param version - Bible version (Default: por-NTLH).
 * @returns books
 */
export async function getVersions(apiKey: string) {
  const axios = getApiClient(apiKey)

  const response = await axios.get(`bibles`)

  return response.data
}