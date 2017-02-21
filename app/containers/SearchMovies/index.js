import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { moviesActionCreators }  from 'store/actions/';
import { ScrollView, View, Text, Image } from 'react-native';
/**
 * Repos list container type
 * @type {Object}
 */
type SearchMoviesContainerType = {
  moviesActions: Object,
  movies: Array<Object>
};

/**
 * <SearchMoviesContainer />
 *
 * @return {Object} the sideBar container
 */
class SearchMoviesContainer extends Component {
  props: SearchMoviesContainerType;

  /**
   * Component will mount
   */
  componentWillMount() {
    this.props.moviesActions.searchMoviesRequest();
  }
  
  renderMovies() {
    if(!this.props.movies.length) {
      return null;
    }
    return this.props.movies.map((data) => {
      console.log(data);
      console.log(`https://image.tmdb.org/t/p/w500/${data.poster_path}`);
      return (
        <View key={data.id}>
          <Image
            style={{height: 400}}
            source={{uri: `https://image.tmdb.org/t/p/w500/${data.poster_path}`}}
          />
        <Text style={{height: 50, fontFamily: 'Avenir'}} >{data.original_title}</Text>
        </View>
      ) 
    })
  }
  /**
   * Render.
   * @return {Object}
   */
  render():Object {
    return (
      <ScrollView>
        {this.renderMovies()}
      </ScrollView>
    )
  }
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
  movies: state.movies.list
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
