import React from 'react';
import { Text } from 'react-native';
import routes from './routes';

const tabs = {
  search: {
    ...routes.search,
    icon: require('assets/images/icons/search.png'),
    iconSelected: require('assets/images/icons/search-selected.png')
  },
  trending: {
    ...routes.trending,
    icon: require('assets/images/icons/star.png'),
    iconSelected: require('assets/images/icons/star-selected.png')
  },
  watchlist: {
    ...routes.watchlist,
    icon: require('assets/images/icons/preview.png'),
    iconSelected: require('assets/images/icons/preview-selected.png')
  }
}

export default tabs;