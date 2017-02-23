import React from 'react'
import { Image, StyleSheet } from 'react-native';

const POSTER_BASE_URL = 'https://image.tmdb.org/t/p/w150/';

/**
 * <Poster />
 * @method Poster
 * @param  {String} path The path
 * @return {JSXElement}
 */
const Poster = ({
  path
}) => {
  return (
    <Image
      style={styles.poster}
      source={{uri: POSTER_BASE_URL + path}}
    />
  )
}

const styles = StyleSheet.create({
  poster: {
    height: 100,
    width: 60, 
    borderRadius: 4,
    backgroundColor: '#f1f1f1'
  }
})
export default Poster
