import util from 'util';
import BibleApiResource from './base';
var inherits = util._extend;

/**
 * Bible Api Passage class.
 * @class
 */
export default class BibleApiPassage extends BibleApiResource {
  /**
   * Creates a new Bible Passage instance.
   * @constructs BibleApiPassage.
   * @param {string} apiKey - The Bible API Key.
   * @param {string} baseUrl - The base url (Default: https://pt-br.bibles.org/v2/).
   */
  constructor(apiKey, baseUrl) {
    super(apiKey, baseUrl);
  }
  /**
   * Get bible passages
   * @method
   * @param {Object} args - The url arguments.
   * @param {string} args.baseUrl - The base url (Default: https://pt-br.bibles.org/v2/).
   * @param {string} args.chapter - Book chapter
   * @param {string} args.start - Starting verse.
   * @param {string} args.end - Ending verse (If empty use start argument).
   * @param {string} args.version - Bible version (Default: por-NTLH).
   * @returns {Array} passages
   */
  getPassage(args) {
    args = args || {};

    let defaults = {
      baseUrl: 'https://pt-br.bibles.org/v2/',
      version: 'por-NTLH'
    };

    args = inherits(args, defaults);

    this.validate(args, ['version', 'start', 'book', 'chapter']);

    var passage = args.end ? util.format('%s-%s', args.start, args.end) : args.start;

    var url = this.getUrl({
      baseUrl: args.baseUrl,
      resource: 'passages',
      query: util.format('version=%s&q[]=%s+%s:%s', args.version, args.book, args.chapter, passage)
    });

    return this.getJson.bind(this, url)();
  }
}
