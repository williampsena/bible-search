import { getApiClient } from './api'

/**
 * Get bible books
 * @method
 * @param {string} apiKey - Authorization key
 * @param {string} version - Bible version (Default: por-NTLH).
 * @returns {Array} books
 */
export async function getBooks(apiKey: string, version: string) {
  if (!version) throw new Error('Version is required.')

  const axios = getApiClient(apiKey)
  const response = await axios.get(`versions/${version}/books`)

  return response.data
}
/**
 * Get bible book chapters
 * @method
 * @param {string} apiKey - Authorization key
 * @param {string} book - Book title.
 * @param {string} version - Bible version (Default: por-NTLH).
 * @returns {Array} chapters
 */
export async function getChapters(apiKey: string, version: string, book: string) {
  if (!version) throw new Error('Version is required.')
  if (!book) throw new Error('Book is required.')

  const axios = getApiClient(apiKey)
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
  if (!version) throw new Error('Version is required.')
  if (!book) throw new Error('Book is required.')
  if (!chapter) throw new Error('Chapter is required.')

  const axios = getApiClient(apiKey)
  const response = await axios.get(`books/${version}:${book}.${chapter}/verses`)

  return response.data
}
