import { getApiClient } from './api'
import { checkRequired } from '../utils/validation'

/**
 * Get bible books
 * @method
 * @param apiKey - Authorization key
 * @param version - Bible version (Default: por-NTLH).
 * @returns books
 */
export async function getBooks(apiKey: string, version: string) {
  const axios = getApiClient(apiKey)

  checkRequired({ version }, ['version'])

  const response = await axios.get(`versions/${version}/books`)

  return response.data
}
/**
 * Get bible book chapters
 * @method
 * @param apiKey - Authorization key
 * @param book - Book title.
 * @param version - Bible version (Default: por-NTLH).
 * @returns chapters
 */
export async function getChapters(apiKey: string, version: string, book: string) {
  const axios = getApiClient(apiKey)

  checkRequired({ version, book }, ['version', 'book'])

  const response = await axios.get(`books/${version}:${book}/chapters`)

  return response.data
}
/**
 * Get bible book verses
 * @method
 * @param apiKey - Authorization key
 * @param book - Book title.
 * @param chapter - Book chapter.
 * @param version - Bible version (Default: por-NTLH).
 * @returns verses
 */
export async function getVerses(apiKey: string, version: string, book: string, chapter: number) {
  const axios = getApiClient(apiKey)

  checkRequired({ version, book, chapter }, ['version', 'book', 'chapter'])

  const response = await axios.get(`books/${version}:${book}.${chapter}/verses`)

  return response.data
}
