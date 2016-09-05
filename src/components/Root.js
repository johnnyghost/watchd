import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import { TabBar } from 'components';

/**
 * Root Component
 */
class Root extends Component {

  /**
   *  Render
   *  @return {Element}
   */
  render():Object {
    return (
      <View style={ styles.container }>
        <TabBar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Root;
