import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Tags, Poster } from 'components'

type MovieListType = {
  movie: Object,
  onSelectedItem: Function
}

/**
 * <MovieListItem />
 * 
 * @method MovieListItem
 * @param  {Object} movie The movie object
 * @return {JSXElement}
 */
const MovieListItem = ({
  movie,
  onSelectedItem
}:MovieListType) => {
  
  return (
    <TouchableOpacity onPress={onSelectedItem}>
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
          {movie.vote_average > 6 ? 
            <Image style={styles.likedIcon} source={require('assets/images/icons/heart-fill.png')} />
            : null
          }
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    marginLeft: 15, 
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
  },
  likedIcon: {
    height: 10, 
    width:10, marginTop:4 
  }
});

export default MovieListItem