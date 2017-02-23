import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';
import { Tags, Poster } from 'components'



/**
 * <MovieListItem />
 * 
 * @method MovieListItem
 * @param  {Object} movie The movie object
 * @return {JSXElement}
 */
const MovieListItem = ({
  movie
}) => {
  
  return (
    <View style={styles.wrapper}>
      <Poster path={movie.poster_path} />
      <View style={styles.detailsWrapper}>
        <Text style={styles.title}>
          {movie.original_title}
        </Text>
        <Tags tags={movie.genres}/>
        <Text style={styles.rating}>
          {movie.vote_average}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    marginLeft: 20, 
    marginRight: 20, 
    flex:1, 
    flexDirection: 'row', 
    height: 120, 
    alignItems: 'center', 
    borderBottomWidth: 1, 
    borderColor: '#F1F1F1'
  },
  detailsWrapper: {
    paddingLeft: 20, 
    flex: 1
  },
  title: {
    fontFamily: 'Avenir', 
    color:'#4e5860', 
    fontWeight: '700'
  },
  rating: {
    fontWeight: 'bold',
    color: '#8d9aa6',
    fontFamily: 'Avenir'
  }
});

export default MovieListItem