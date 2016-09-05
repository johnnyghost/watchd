import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

/**
 *
 */
class Trending extends Component {
  render () {
    return (
      <View style={ styles.container }>
        <Text style={ styles.text }>Trending</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#191C21'

  },
  text: {
    color: 'white',
    fontSize: 40
  }
});

export default Trending;
