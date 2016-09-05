import request from 'core/request';
import config from 'config';

/**
 * Base url.
 * @type {String}
 */
const BASE_URL = `${config.CLIENTS.TMDB.baseUrl}/${config.CLIENTS.TMDB.version}`;

/**
 * The TMDB Default values.
 * @type {Object}
 */
const DEFAULTS = {
  data: {
    api_key: config.CLIENTS.TMDB.apiKey
  }
}

/**
 * An Abstraction to the TMDB API
 *
 * @type {Object}
 */
const TMDBClient = {

  /**
   * Search for a movie.
   *
   * @param {String} query The movie to search for
   * @return {Promise} A resolved promise with the movie details
   */
  search(query:string):Promise {

    const options = Object.assign(DEFAULTS, {
      data: Object.assign(DEFAULTS.data, { query })
    })

    return request.get(`${BASE_URL}/search/movie`, options);
  },

  /**
   * Get a movie by id.
   *
   * @param {Number} id The id of the movie
   * @return {Promise} A resolved promise with the movie details
   */
  getMovie(id:number):Promise {
    const options = DEFAULTS;
    return request.get(`${BASE_URL}/movie/${id}`, options);
  }
}

export default TMDBClient;
