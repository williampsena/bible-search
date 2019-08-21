import { getApiClient } from './api'

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

  if (!version) throw new Error('Version is required.')
  if (!book) throw new Error('Book is required.')
  if (!chapter) throw new Error('Chapter is required.')
  if (!start) throw new Error('Start is required.')
  if (!end) throw new Error('End is required.')

  const passage = end ? `${start}-${end}` : start
  const query = `version=${version}&q[]=${book}+${chapter}:${passage}`
  const response = await axios.get(`passages?${query}`)

  return response.data
}
