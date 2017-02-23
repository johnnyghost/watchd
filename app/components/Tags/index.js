import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

/**
 * <Tags />
 * @method Tags
 * @param  {Array<Tag>} tags An object of tags
 * @return {JSXElement}
 */
const Tags = ({
  tags
}) => {
  
  /**
   * Render the tags.
   * 
   * @method renderTags
   * @return {JSXElement}
   */
  const renderTags = () => {
    if(!tags.length) {
      return null;
    }
    
    return tags.map((tag, index) => {
      return <Text key={index} style={styles.tag}>{tag.name}</Text>
    })
  }
  return (
    <View style={styles.wrapper}>
      {renderTags()}
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection:'row', 
    flexWrap:'wrap'
  },
  tag: {
    fontFamily: 'Avenir', 
    color:'#B284FF', 
    fontSize: 12, 
    backgroundColor: '#F1F1F1', 
    padding: 1, 
    marginRight: 5
  }
})
export default Tags;
