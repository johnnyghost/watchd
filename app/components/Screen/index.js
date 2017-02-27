import React from 'react'
import { View, StyleSheet } from 'react-native';

const Screen = ({
  children
}) => {
  return (
    <View style={styles.wrapper}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    margin: 20
  }
})
export default Screen
