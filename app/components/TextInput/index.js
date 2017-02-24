import React from 'react'
import { TextInput, StyleSheet } from 'react-native';

/**
 * <TextInput />
 * 
 * @param  {Function} onChangeText The on change callback
 */
const WtTextInput = ({
  onChangeText,
  ...props
}) => {
  return (
    <TextInput
      style={styles.textInput}
      onChangeText={onChangeText}
      {...props}
    />
  )
}

const styles = StyleSheet.create({
  textInput: {
    height: 40, 
    backgroundColor: 'white',  
    paddingLeft: 15,
    fontFamily: 'Avenir-Light'
  }
});

export default WtTextInput;
