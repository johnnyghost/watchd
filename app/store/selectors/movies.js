import { createSelector } from 'reselect';
import genres from 'store/constants/genres';

/**
 * Get the list of movies
 *
 * @param {Object} state The current state
 * @return {Array} of movies
 */
const getMoviesList = (state:Object):?Array => state.movies.list || [];

/**
 * Map the genresIds to genres object
 * 
 * @method mapGenres
 * @param  {Array<Number>} genresIds The genres ids
 * @return {Array<Object>} Array of genres
 */
const mapGenres = (genresIds) => genresIds.map(id => genres[id] || {});

/**
 * Map movies name.
 *
 * @param {Array<Object>} movies Array of movies
 * @return {Array} of the moviesitories names
 */
const mapMovies = (movies:?Array<Object>):?string[] => movies.map((movie:Object):string => {
  return Object.assign(movie, {
    genres: mapGenres(movie.genre_ids)
  });
  
});

export const getMovies = createSelector(getMoviesList, mapMovies);