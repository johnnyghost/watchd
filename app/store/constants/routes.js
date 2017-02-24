import SearchMovies from './../../containers/SearchMovies';
import React from 'react';
import { Text } from 'react-native';

const routes = {
  search: {
    key: 'search',
    title: 'search',
    component: SearchMovies
  },
  trending: {
    key: 'trending',
    title: 'trending',
    component: () => (<Text>trending</Text>)
  },
  watchlist: {
    key: 'watchlist',
    title: 'watchlist',
    component: () => (<Text>watchlist</Text>)
  }
}

export default routes;