import fs from 'fs'
import BibleApi from '@/bible_api'

describe('Bible Api Tests', () => {
  let bibleApiSettings

  beforeEach(() => {
    if (process.env.RunTests) {
      bibleApiSettings = {
        bibleApiKey: process.env.BibleApiKey,
      }
    } else {
      const data = fs.readFileSync('config-auth.json', 'utf8')
      bibleApiSettings = JSON.parse(data)
    }
  })

  describe('Api consume', () => {
    it('Getting passage', async () => {
      const bibleApi = new BibleApi(bibleApiSettings.bibleApiKey)
      const passage = await bibleApi.passage.getPassage('rev', 21, 4)

      expect(passage).toBeTruthy()
    })

    it('Getting books', async () => {
      const bibleApi = new BibleApi(bibleApiSettings.bibleApiKey)
      const books = await bibleApi.book.getBooks()

      expect(books).toBeTruthy()
    })

    it('Getting book chapters', async () => {
      const bibleApi = new BibleApi(bibleApiSettings.bibleApiKey)

      const chapters = await bibleApi.book.getChapters('rev')
      expect(chapters).toBeTruthy()
    })

    it('Getting book verses', async () => {
      const bibleApi = new BibleApi(bibleApiSettings.bibleApiKey)
      const verses = await bibleApi.book.getVerses('rev', 21)

      expect(verses).toBeTruthy()
    })

    it('Searching content', async () => {
      const bibleApi = new BibleApi(bibleApiSettings.bibleApiKey)

      const verses = bibleApi.search.find('Pai nosso')
      expect(verses).toBeTruthy()
    })
  })
})
