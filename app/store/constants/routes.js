import SearchMovies from './../../containers/SearchMovies';
import React from 'react';
import { Text } from 'react-native';

const routes = {
  search: {
    key: 'search',
    title: 'search',
    showNavBar: true,
    component: SearchMovies
  },
  trending: {
    key: 'trending',
    title: 'trending',
    showNavBar: true,
    component: () => (<Text>trending</Text>)
  },
  watchlist: {
    key: 'watchlist',
    title: 'watchlist',
    showNavBar: true,
    component: () => (<Text>watchlist</Text>)
  },
  movieDetails: {
    key: 'movieDetails',
    title: 'movieDetaills',
    showNavBar: false,
    component: () => (<Text>movieDetaills</Text>)
  }
}

export default routes;