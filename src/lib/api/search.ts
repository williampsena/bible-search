import { getApiClient } from './api'

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

  if (!version) throw new Error('Version is required.')
  if (!content) throw new Error('Book is required.')

  const response = await axios.get(`version=${version}&query=${content}`)

  return response.data
}
