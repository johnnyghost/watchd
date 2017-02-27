import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import debounce from 'lodash/debounce';
import { moviesActionCreators }  from 'store/actions/';
import { getMovies } from 'store/selectors/movies';
import { TextInput, Screen } from 'components';
import MovieList from './components/MovieList';

/**
 * Search movies container type
 * @type {Object}
 */
type SearchMoviesContainerType = {
  moviesActions: Object,
  isLoading: bool,
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
  isLoading,
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
    <Screen>
      <TextInput 
        placeholder="Search for a movie"
        onChangeText={debounce(onSearchHandler.bind(this), 500)}
      />
      <View style={styles.movieListWrapper}>
        <MovieList
          movies={movies}
          isLoading={isLoading}
          onSelectedMovie={onSelectedMovieHandler}
        />
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  movieListWrapper: {
    flex: 1,
    marginTop: 10
  }
})

/**
 * Will subscribe to Redux store updates
 *
 * @method
 *
 * @param  {Object} state Store’s state
 * @return {Object} and returns an object to be passed as props
 */
const mapStateToProps = (state:Object):Object => ({
  movies: getMovies(state),
  isLoading: state.movies.isLoading
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
