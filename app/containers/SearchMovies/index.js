import React from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { moviesActionCreators }  from 'store/actions/';
import { getMovies } from 'store/selectors/movies';
import { TextInput } from 'components';
import MovieList from './components/MovieList';

/**
 * Search movies container type
 * @type {Object}
 */
type SearchMoviesContainerType = {
  moviesActions: Object,
  movies: Array<Object>,
  push: Function
};

/**
 * <SearchMoviesContainer />
 *
 * @return {Object} the sideBar container
 */
const SearchMoviesContainer = ({
  movies,
  moviesActions,
  push
}:SearchMoviesContainerType):Object => {
  
  /**
   * On Search handler
   * @param {String} movie The movie to search for
   */
  const onSearchHandler = (movie:string) => {
    moviesActions.searchMovie(movie);
  }
  
  /**
   * On Select movie.
   * 
   * @method onSelectedMovieHandler
   */
  const onSelectedMovieHandler = () => {
    push('movieDetails')
  }
  
  return (
    <ScrollView>
      <TextInput 
        placeholder="Search for a movie"
        onChangeText={onSearchHandler.bind(this)}
      />
    <MovieList 
      movies={movies} 
      onSelectedMovie={onSelectedMovieHandler}
    />
    </ScrollView>
  )
}

/**
 * Will subscribe to Redux store updates
 *
 * @method
 *
 * @param  {Object} state Store’s state
 * @return {Object} and returns an object to be passed as props
 */
const mapStateToProps = (state:Object):Object => ({
  movies: getMovies(state)
});

/**
 * Bound to the store.
 * Will be merged into the component’s props.
 *
 * @method
 *
 * @param {Function} dispatch Dispatch function
 * @return {Object}
 */
const mapDispatchToProps = (dispatch:Function):Object => ({
  moviesActions : bindActionCreators(moviesActionCreators, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchMoviesContainer);
