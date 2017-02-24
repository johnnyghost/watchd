import React from 'react';
import tabs from 'store/constants/tabs';
import TabNavigator from 'react-native-tab-navigator';
import { Image, View, Text, NavigationExperimental, StyleSheet } from 'react-native';

const { CardStack, Header } = NavigationExperimental;

type NavigatorType = {
  selected: string,
  selectTab: Function,
  navigator:Object,
  push: Function,
  pop: Function
}

/**
 * <WtNavigator />
 *
 * @return {JSXElement}
 */
const WtNavigator = ({
  navigator,
  selected,
  selectTab,
  push,
  pop
}:NavigatorType) => {

  /**
   * On Press Handler
   * 
   * @method onPressHandler
   * @param {String} title The title of the selected tab
   */
  const onPressHandler = (title:string) => {
    selectTab(title);
  }
  
  /**
   * Render Navigation bar.
   * 
   * @method renderNavigationBar
   *
   * @param  {Object} sceneProps The scene props
   * @return {JSXElement}
   */
  const renderNavigationBar = (sceneProps:Object) => {

    const renderTitle = () => {
      return (
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitleText}>
            {sceneProps.scene.route.showNavBar && sceneProps.scene.route.title.toUpperCase()}
          </Text>
        </View>
      )
    }
    
    return (
     <Header
       onNavigateBack={pop}
       style={styles.navigationBar}
       renderTitleComponent={renderTitle}
       {...sceneProps}
     />
    );
  }

  /**
   * Render scene.
   * 
   * @method renderScene
   * @param  {[type]}    sceneProps [description]
   * @return {[type]}               [description]
   */
  const renderScene = (sceneProps:Object) => {
    const route = sceneProps.scene.route;
    return (
      <View style={styles.scene}>
        <route.component
          push={push}
          pop={pop}
          {...route.props}
        /> 
      </View>
    );
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
        <CardStack
         onNavigateBack={pop}
         navigationState={navigator}
         renderScene={renderScene}
         renderHeader={renderNavigationBar}
        />
      </TabNavigator.Item>
    )
  }
  return (
    <TabNavigator >
      {Object.keys(tabs).map((tab) => renderItem(tabs[tab]))}
    </TabNavigator>
  )
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#FAFAFA',
  },
  title: {
    fontFamily: 'Avenir', 
    color: '#36434D'
  },
  titleSelected: {
    color: '#B284FF'
  },
  navigationBar: {
    backgroundColor: '#FAFAFA'
  },
  headerTitleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerTitleText: {
    color: '#B284FF',
    fontFamily: 'Avenir-Black'
  }
})

export default WtNavigator
