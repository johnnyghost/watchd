import React from 'react'
import { View } from 'react-native';
import MovieListItem from './MovieListItem';

type ListViewType = {
  movies: Object,
  onSelectedMovie: Function
}

const ListView = ({
  movies,
  onSelectedMovie
}:ListViewType) => {
  
  /**
   * Render Movies.
   * 
   * @method renderMovies
   * @return {Object}
   */
  const renderMovies = () => {  
    if(!movies.length) {
      return null;
    }
    
    return movies.map((data:Object):Object => {
      return <MovieListItem 
        key={data.id}
        movie={data}
        onSelectedItem={onSelectedMovie}
      />
    })
  }
  
  return (
    <View>{renderMovies()}</View>
  );
}

export default ListView;
