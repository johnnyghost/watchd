import React from 'react'
import TabNavigator from 'react-native-tab-navigator';
import { SearchMovies } from 'containers';

/**
 * <Navigator />
 *
 * @return {JSXElement}
 */
const Navigator = () => {
  return (
    <TabNavigator>
      <TabNavigator.Item
        selected={true}
        title="Home"
        badgeText="1"
      >
        <SearchMovies />
      </TabNavigator.Item>
      <TabNavigator.Item
        title="Profile"
      >
        <SearchMovies />
      </TabNavigator.Item>
    </TabNavigator>
  )
}

export default Navigator
