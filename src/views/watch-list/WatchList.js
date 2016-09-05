import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class WatchList extends Component {
  render ():Object {
    console.log(1);
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#191C21'
  },
  text: {
    color: 'white',
    fontSize: 40
  }
});

export default WatchList;
