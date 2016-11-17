import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

/**
 * <Profile />
 *
 * @return {JSXElement}
 */
class Profile extends Component {

  /**
   * Render.
   *
   * @return {JSXElement}
   */
  render () {
    return (
      <View style={ styles.container }>
        <Text style={ styles.text }>Profile</Text>
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

export default Profile;
