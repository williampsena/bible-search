import util from 'util';
import request from 'request';
import Q from 'q';
var promise = Q.Promise;

/**
 * Bible Api resource class.
 * @class
 * @borrows passage as BibleApiResource
 */
export default class BibleApiResource {
  /**
   * Creates a new Bible Api Resource instance.
   * @constructs BibleApiResource.
   * @param {string} apiKey - The Bible Api Resource API Key.
   * @param {string} baseUrl - The base url (Default: https://pt-br.bibles.org/v2/).
   */
  constructor(apiKey, baseUrl) {
    /**
     * The Bible Api Resource API Key.
     * @member BibleApiResource#apiKey.
     */
    this.apiKey = apiKey;
    /**
     * The Bible Api Resource Base URL.
     * @member BibleApiResource#baseUrl.
     */
    this.baseUrl = baseUrl;
  }
  /**
   * Validate arguments
   * @param {Object} args - Arguments
   * @param {Array} requiredArgs - Required arguments
   */
  validate(args, requiredArgs) {
    requiredArgs = requiredArgs || [];

    requiredArgs.forEach((arg) => {
      if (typeof args[arg] === 'undefined'){
        throw new Error(util.format('Argument %s not defined.', arg));
      }
    });
  }
  /**
   * Get url to consume bible api resource.
   * @param {Object} args - The url arguments.
   * @param {string} args.baseUrl - The base url (Default: https://pt-br.bibles.org/v2/).
   * @param {string} args.resource - The url resource (passages, version).
   * @param {string} args.query - The query string of resource.
   * @returns {string}
   */
  getUrl(args) {
    args.query = args.query || '';
    return util.format('%s%s.js%s', args.baseUrl, args.resource, args.query !== '' ? ('?' + args.query) : '');
  }
  /**
   * Using format JSON to consume the Bible API Resource (Using promises).
   * @param {string} url - The url.
   * @returns {Promise}
   */
  getJson(url) {
    var options = {
      url: url,
      json: true,
      auth: {
        user: this.apiKey,
        sendImmediately: false
      }
    };

    return promise(function (resolve, reject) {
      return request(options, function (error, response, body) {
        if (error) {
          return reject(new Error(error));
        }

        return resolve(body);
      });
    });
  }
}
