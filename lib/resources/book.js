import util from 'util';
import BibleApiResource from './base';
var inherits = util._extend;

/**
 * Bible  Book class.
 * @class
 */
export default class BibleApiBook extends BibleApiResource {
  /**
   * Creates a new Bible Api Book instance.
   * @constructs BibleApiBook.
   * @param {string} apiKey - The Bible Search API Key.
   * @param {string} baseUrl - The base url (Default: https://pt-br.bibles.org/v2/).
   */
  constructor(apiKey, baseUrl) {
    super(apiKey, baseUrl);
  }
  /**
   * Get bible books
   * @method
   * @param {Object} args - The url arguments.
   * @param {string} args.baseUrl - The base url (Default: https://pt-br.bibles.org/v2/).
   * @param {string} args.version - Bible version (Default: por-NTLH).
   * @returns {Array} books
   */
  getBooks(args) {
    args = args || {};

    let defaults = {
      baseUrl: 'https://pt-br.bibles.org/v2/',
      version: 'por-NTLH'
    };

    args = inherits(args, defaults);

    this.validate(args, ['version']);

    var url = this.getUrl({
      baseUrl: args.baseUrl,
      resource: util.format('versions/%s/books', args.version)
    });

    return this.getJson.bind(this, url)();
  }
  /**
   * Get bible book chapters
   * @method
   * @param {Object} args - The url arguments.
   * @param {string} args.baseUrl - The base url (Default: https://pt-br.bibles.org/v2/).
   * @param {string} args.book - Book title.
   * @param {string} args.version - Bible version (Default: por-NTLH).
   * @returns {Array} chapters
   */
  getChapters(args) {
    args = args || {};

    let defaults = {
      baseUrl: 'https://pt-br.bibles.org/v2/',
      version: 'por-NTLH'
    };

    args = inherits(args, defaults);

    this.validate(args, ['version', 'book']);

    var url = this.getUrl({
      baseUrl: args.baseUrl,
      resource: util.format('books/%s:%s/chapters', args.version, args.book)
    });

    return this.getJson.bind(this, url)();
  }
  /**
   * Get bible book verses
   * @method
   * @param {Object} args - The url arguments.
   * @param {string} args.baseUrl - The base url (Default: https://pt-br.bibles.org/v2/).
   * @param {string} args.book - Book title.
   * @param {string} args.chapter - Book chapter.
   * @param {string} args.version - Bible version (Default: por-NTLH).
   * @returns {Array} verses
   */
  getVerses(args) {
    args = args || {};

    let defaults = {
      baseUrl: 'https://pt-br.bibles.org/v2/',
      version: 'por-NTLH'
    };

    args = inherits(args, defaults);

    this.validate(args, ['version', 'book', 'chapter']);

    var url = this.getUrl({
      baseUrl: args.baseUrl,
      resource: util.format('chapters/%s:%s.%s/verses', args.version, args.book, args.chapter)
    });

    return this.getJson.bind(this, url)();
  }
}
