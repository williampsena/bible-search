
import BibleApi from '../lib';
import colors from 'colors';
import should from 'should';
import fs from 'fs';

/** @test {BibleApi} */
describe('Bible Api', () => {
  var bibleApiSettings;
  var outputLog = false;
  var log = (d) => {
    if (outputLog){
      console.log(d);
    }
  };
  //
  // Run for all tests
  //
  before('Before all tests', (done) => {
    if (process.env.RunTests){
      bibleApiSettings = {
        bibleApiKey: process.env.BibleApiKey
      };
      done();
    } else {
      fs.readFile('config-auth.json', 'utf8', (err, data) => {
        should.not.exist(err);
        bibleApiSettings = JSON.parse(data);
        done();
      });
    }
  });
  //
  // Testing defined type
  //
  /** @test {BibleApi} */
  it('Testing defined type!', () => {
    should(BibleApi).be.ok();
  });
  //
  // Testing validate argument
  //
  /** @test {BibleApi} */
  it('Testing validation!', (done) => {
    var bibleApi = new BibleApi(bibleApiSettings.bibleApiKey);

    try {
      bibleApi.validate({ a: 1, b: 2, c: 3 }, ['a', 'b', 'c', 'd']);
    } catch (e) {
      return done();
    }

    throw new Error('Validation not working!');
  });
  //
  // Testing consume get passage
  //
  /** @test {BibleApiPassage} */
  it('Testing consume > get passage!', (done) => {
    var bibleApi = new BibleApi(bibleApiSettings.bibleApiKey);

    bibleApi.passage.getPassage({
      book: 'rev',
      chapter: 21,
      start: 4
    }).then((data) => {
      log(colors.yellow(JSON.stringify(data.response.search.result.passages[0].text, null, 4)));
      should(data).be.ok();
      done();
    }).catch((err) => {
      should.not.exist(err);
      throw err;
    });
  });
  //
  // Testing consume get book
  //
  /** @test {BibleApiBook} */
  it('Testing consume > get books!', (done) => {
    var bibleApi = new BibleApi(bibleApiSettings.bibleApiKey);

    bibleApi.book.getBooks().then((data) => {
      log(colors.yellow(JSON.stringify(data.response.books, null, 4)));
      should(data).be.ok();
      done();
    }).catch((err) => {
      should.not.exist(err);
      throw err;
    });
  });
  //
  // Testing consume get book chapters
  //
  /** @test {BibleApiBook} */
  it('Testing consume > get book chapters!', (done) => {
    var bibleApi = new BibleApi(bibleApiSettings.bibleApiKey);

    bibleApi.book.getChapters({
      book: 'rev'
    }).then((data) => {
      log(colors.yellow(JSON.stringify(data.response.chapters, null, 4)));
      should(data).be.ok();
      done();
    }).catch((err) => {
      should.not.exist(err);
      throw err;
    });
  });
  //
  // Testing consume get book verses
  //
  /** @test {BibleApiBook} */
  it('Testing consume > get book verses!', (done) => {
    var bibleApi = new BibleApi(bibleApiSettings.bibleApiKey);

    bibleApi.book.getVerses({
      book: 'rev',
      chapter: 21
    }).then((data) => {
      log(colors.yellow(JSON.stringify(data.response.verses, null, 4)));
      should(data).be.ok();
      done();
    }).catch((err) => {
      should.not.exist(err);
      throw err;
    });
  });
  //
  // Testing consume search
  //
  /** @test {BibleApiSearch} */
  it('Testing consume > search!', (done) => {
    var bibleApi = new BibleApi(bibleApiSettings.bibleApiKey);

    bibleApi.search.find({
      query: 'Pai nosso'
    }).then((data) => {
      log(colors.yellow(JSON.stringify(data.response.search.result.verses, null, 4)));
      should(data).be.ok();
      done();
    }).catch((err) => {
      should.not.exist(err);
      throw err;
    });
  });
});
