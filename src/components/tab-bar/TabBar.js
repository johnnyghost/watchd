import React, { Component } from 'react';
import { TabBarIOS } from 'react-native';

import { TAB_BAR_ITEMS, DEFAULT_TAB_SELECTED, COLORS } from './constants';

import TabBarItem from './TabBarItem';
import { Navigator } from 'components';

/**
 * Tab bar component.
 *
 */
class TabBar extends Component {

  state = {
    selectedTab: DEFAULT_TAB_SELECTED
  }

  /**
   * On Change Tab handler.
   *
   * @method
   * @private
   *
   * @param {String} tabId The tab identifier
   * @return {Function} event handler
   */
  onChangeTab(tabId:string):Function {
    return () => {
      this.setState({
        selectedTab: tabId
      })
    }
  }

  /**
   * Render each item of the
   * tab bar menu.
   *
   * @param {Object} item Tab bar item
   * @param {Object} index The index
   * @return {Object} the tab bar element
   */
  renderTabBarItem(item:Object, index:number):?Object {

    return (
      <TabBarItem
        key={ index }
        title={ item.tabId }
        icon={ item.icon }
        selectedIcon={ item.selectedIcon }
        isSelected={ this.state.selectedTab === item.tabId }
        onChangeTab={ ::this.onChangeTab }
      >
        <Navigator
          title={ item.navigatorTitle }
          component={ item.component }
        />
      </TabBarItem>
      )
  }

  /**
   *
   * @return a JSX Element
   */
  render():Object {

    return (
      <TabBarIOS
        tintColor={ COLORS.tintColor }
        barTintColor={ COLORS.barTintColor }
      >
        { TAB_BAR_ITEMS.map((item:Object, index:number):?Object => this.renderTabBarItem(item, index)) }
      </TabBarIOS>
    )
  }
}

export default TabBar;
