import BibleApi from '@/bible_api'

const API_KEY = process.env.API_KEY

describe('Bible Api Versions Test', () => {
  describe('Api consume', () => {
    it('Getting versions', async () => {
      const bibleApi = new BibleApi(API_KEY)
      const versions = await bibleApi.bible.getVersions()

      expect(versions).toBeTruthy()
      expect(versions.data).toBeTruthy()
    })
  })
})
