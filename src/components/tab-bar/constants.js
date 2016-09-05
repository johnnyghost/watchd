import Trending from 'views/trending/Trending';
import WatchList from 'views/watch-list/WatchList';
import Profile from 'views/profile/Profile';

/**
 * [DEFAULT_TAB_SELECTED description]
 * @type {String}
 */
export const DEFAULT_TAB_SELECTED = 'trending';

/**
 * [COLORS description]
 * @type {Object}
 */
export const COLORS = {
  tintColor:'#EF1A51',
  barTintColor:'#191C21'
}

/**
 * [TAB_BAR_ITEMS description]
 * @type {Array}
 */
export const TAB_BAR_ITEMS = [{
  tabId: 'trending',
  navigatorTitle: 'Trending',
  icon: require('image!trending'),
  selectedIcon: require('image!trending-selected'),
  component: Trending
}, {
  tabId: 'watchlist',
  navigatorTitle: 'WatchList',
  icon: require('image!watchlist'),
  selectedIcon: require('image!watchlist-selected'),
  component: WatchList
}, {
  tabId: 'profile',
  navigatorTitle: 'Profile',
  icon: require('image!profile'),
  selectedIcon: require('image!profile-selected'),
  component: Profile
}]
