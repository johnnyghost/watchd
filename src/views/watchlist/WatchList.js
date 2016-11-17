import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

/**
 * 
 */
class WatchList extends Component {
  render () {
    return (
      <View style={ styles.container }>
        <Text style={ styles.text }>WatchList</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191C21'

  },
  text: {
    color: 'white'
  }
});

export default WatchList;
