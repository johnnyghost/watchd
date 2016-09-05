import React from 'react';
import { NavigatorIOS, StyleSheet } from 'react-native';

type NavigatorType = {
  title: string,
  component: Object
}

/**
 * Navigator.
 *
 * @return {Object} The <Navigator/> component
 */
const Navigator = ({
  title,
  component
}:NavigatorType):Object => {

  return (
    <NavigatorIOS
      style={ styles.nav }
      barTintColor="#191C21"
      titleTextColor="#EF1A51"
      translucent={ false }
      initialRoute={{ title: title, component: component }}
    />
  )
}

const styles = StyleSheet.create({
  nav: {
    flex: 1
  }
})

export default Navigator;
