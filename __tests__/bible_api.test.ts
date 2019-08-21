import BibleApi from '@/bible_api'

const API_KEY = process.env.API_KEY

console.log(API_KEY)

describe('Bible Api Tests', () => {
  describe('Api consume', () => {
    it('Getting passage', async () => {
      const bibleApi = new BibleApi(API_KEY)
      const passage = await bibleApi.passage.getPassage('rev', 21, 4)

      expect(passage).toBeTruthy()
    })

    it('Getting books', async () => {
      const bibleApi = new BibleApi(API_KEY)
      const books = await bibleApi.book.getBooks()

      expect(books).toBeTruthy()
    })

    it('Getting book chapters', async () => {
      const bibleApi = new BibleApi(API_KEY)
      const chapters = await bibleApi.book.getChapters('rev')

      expect(chapters).toBeTruthy()
    })

    it('Getting book verses', async () => {
      const bibleApi = new BibleApi(API_KEY)
      const verses = await bibleApi.book.getVerses('rev', 21)

      expect(verses).toBeTruthy()
    })

    it('Searching content', async () => {
      const bibleApi = new BibleApi(API_KEY)
      const verses = await bibleApi.search.find('Pai nosso')

      expect(verses).toBeTruthy()
    })
  })
})
