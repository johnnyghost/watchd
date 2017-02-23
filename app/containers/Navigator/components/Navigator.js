import React from 'react'
import TabNavigator from 'react-native-tab-navigator';
import { Image } from 'react-native';

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
        renderIcon={() => <Image style={{width: 30, height: 30}} source={require('assets/images/icons/diamond.png')} />}
        selectedTitleStyle={{fontFamily: 'Avenir'}}
        selectedTitleStyle={{color: '#B284FF'}}
        {...route}
      >
        <Component />
      </TabNavigator.Item>
    )
  }
  return (
    <TabNavigator 
      tabBarStyle={{backgroundColor: '#f1f1f1'}}
      sceneStyle={{backgroundColor: '#FAFAFA', paddingTop: 40}}
    >
      {routes.map((route) => renderItem(route))}
    </TabNavigator>
  )
}

export default Navigator
