import { getApiClient } from './api'
import { checkRequired } from '../utils/validation'

/**
 * Get bible passages
 * @method
 * @param apiKey - Authorization key
 * @param version - Bible version (Default: por-NTLH).
 * @param book - Bible book
 * @param chapter - Book chapter
 * @param start - Starting verse.
 * @param end - Ending verse (If empty use start argument).
 * @returns Bible passages
 */
export async function getPassage(
  apiKey: string,
  version: string,
  book: string,
  chapter: number,
  start: number,
  end?: number
) {
  const axios = getApiClient(apiKey)

  checkRequired({ version, book, chapter, start }, ['version', 'book', 'chapter', 'start'])

  const passage = end ? `${start}-${end}` : start
  const query = `version=${version}&q[]=${book}+${chapter}:${passage}`
  const response = await axios.get(`passages?${query}`)

  return response.data
}
