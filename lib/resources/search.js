import util from 'util';
import BibleApiResource from './base';
var inherits = util._extend;

/**
 * Bible Api Search class.
 * @class
 */
export default class BibleApiSearch extends BibleApiResource {
  /**
   * Creates a new Bible Api Search instance.
   * @constructs BibleApiSearch.
   * @param {string} apiKey - The Bible Search API Key.
   * @param {string} baseUrl - The base url (Default: https://pt-br.bibles.org/v2/).
   */
  constructor(apiKey, baseUrl) {
    super(apiKey, baseUrl);
  }
  /**
   * Search content
   * @method
   * @param {Object} args - The url arguments.
   * @param {string} args.baseUrl - The base url (Default: https://pt-br.bibles.org/v2/).
   * @param {string} args.version - Bible version (Default: por-NTLH).
   * @param {string} args.content - Search content
   * @returns {Array} verses
   */
  find(args) {
    args = args || {};

    let defaults = {
      baseUrl: 'https://pt-br.bibles.org/v2/',
      version: 'por-NTLH'
    };

    args = inherits(args, defaults);

    this.validate(args, ['version', 'query']);

    var url = this.getUrl({
      baseUrl: args.baseUrl,
      resource: 'search',
      query: util.format('version=%s&query=%s', args.version, args.query)
    });

    return this.getJson.bind(this, url)();
  }
}
