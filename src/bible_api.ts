import { getPassage, getBooks, getChapters, getVerses, search, AppConfig } from './lib/api'

/**
 * Bible API class.
 * @class
 * @borrows passage as BibleApiPassage
 * @borrows book as BibleApiBook
 * @borrows chapter as BibleApiChapter
 * @borrows search as BibleApiSearch
 */
export default class BibleApi {
  /**
   * Creates a new Bible API instance.
   * @constructs BibleApi.
   * @param apiKey - The Bible Search API Key.
   * @param version - The Bible Search Version
   */
  constructor(private apiKey: string, private version: string = AppConfig.version) {}

  passage = {
    getPassage: (book: string, chapter: number, start: number, end?: number) =>
      getPassage(this.apiKey, this.version, book, chapter, start, end),
  }

  book = {
    getBooks: () => getBooks(this.apiKey, this.version),
    getChapters: (book: string) => getChapters(this.apiKey, this.version, book),
    getVerses: (book: string, chapter: number) =>
      getVerses(this.apiKey, this.version, book, chapter),
  }

  search = {
    find: (content: string) => search(this.apiKey, this.version, content),
  }
}
