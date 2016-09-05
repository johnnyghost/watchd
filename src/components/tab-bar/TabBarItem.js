import React from 'react';
import { TabBarIOS } from 'react-native';

type TabBarItemType = {
  title: string,
  icon: ?Object,
  selectedIcon: ?Object,
  isSelected: ?bool,
  children: ?Object,
  onChangeTab: ?Function
}

/**
 * Tab bar item.
 *
 * @return {Object} the tab bar item
 */
const TabBarItem = ({
  title,
  icon,
  selectedIcon,
  isSelected,
  children,
  onChangeTab
}:TabBarItemType):Object => {

  return (
    <TabBarIOS.Item
      title={ title }
      icon={ icon }
      selectedIcon={ selectedIcon }
      selected={ isSelected }
      renderAsOriginal={ true }
      onPress={ onChangeTab(title) }
    >
     { children }
    </TabBarIOS.Item>
  )
}

export default TabBarItem;
