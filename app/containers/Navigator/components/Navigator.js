import React from 'react'
import TabNavigator from 'react-native-tab-navigator';
import { Image, StyleSheet } from 'react-native';

type NavigatorType = {
  routes: Array<Object>,
  selected: string,
  selectTab: Function
}
/**
 * <Navigator />
 *
 * @return {JSXElement}
 */
const Navigator = ({
  routes,
  selected,
  selectTab
}:NavigatorType) => {

  /**
   * On Press Handler
   * 
   * @method onPressHandler
   * @param {String} title The title of the selected tab
   */
  const onPressHandler = (title) => {
    selectTab(title);
  }
  
  /**
   * Render item.
   * 
   * @method renderItem
   * @param {Object} route The route object
   * 
   * @return {JSXElement}
   */
  const renderItem = (route:Object) => {
    const {
      Component
    } = route;
    
    return (
      <TabNavigator.Item
        key={route.title}
        selected={selected === route.title}
        onPress={onPressHandler.bind(null, route.title)}
        renderIcon={() => <Image source={route.icon} />}
        renderSelectedIcon={() => <Image source={route.iconSelected} />}
        titleStyle={styles.title}
        selectedTitleStyle={styles.titleSelected}
        {...route}
      >
        <Component />
      </TabNavigator.Item>
    )
  }
  return (
    <TabNavigator 
      tabBarStyle={styles.tabBar}
      sceneStyle={styles.scene}
    >
      {routes.map((route) => renderItem(route))}
    </TabNavigator>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#f1f1f1'
  },
  scene: {
    backgroundColor: '#FAFAFA', 
    paddingTop: 40
  },
  title: {
    fontFamily: 'Avenir', 
    color: '#36434D'
  },
  titleSelected: {
    color: '#B284FF'
  }
})
export default Navigator
