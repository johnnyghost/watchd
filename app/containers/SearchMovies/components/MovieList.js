import React, { Component } from 'react'
import { ListView } from 'react-native';
import MovieListItem from './MovieListItem';

type MovieListType = {
  movies: Object,
  onSelectedMovie: Function
}

class MovieList extends Component {
  
  props: MovieListType;
  
  /**
   * Constructor.
   * 
   * @param {Object} props The props.
   */
  constructor(props) {
    super(props);
    
    this.renderRow = this.renderRow.bind(this);
    this.ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1.original_title !== row2.original_title
    });
    
    this.state = {
      dataSource: this.ds.cloneWithRows([])
    };
  }
  
  /**
   * componentWillReceiveProps
   *
   * @param {Object} props The props.
   */
  componentWillReceiveProps(props) {
    this.setState({
      dataSource: this.ds.cloneWithRows(props.movies)
    })
  }
  
  /**
   * Render Movies.
   * 
   * @method renderRow
   * @param {Object} rowData The row data 
   * @return {Object}
   */
  renderRow (rowData:Object, ...rest) {
    const index = parseInt(rest[1], 10);
    return (
       <MovieListItem
         index={index}
         movie={rowData}
         onSelectedItem={this.props.onSelectedMovie}
       /> 
    );
  }
  
  /**
   * Render.
   * @return {JSXElement}
   */
  render ():Object {
    return (
      <ListView
       enableEmptySections
       keyboardShouldPersistTaps="always"
       dataSource={this.state.dataSource}
       renderRow={this.renderRow}
      />
    );
  }
}

export default MovieList;
