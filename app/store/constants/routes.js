import SearchMovies from './../../containers/SearchMovies';

const routes = [
  {
    title: 'search',
    Component: SearchMovies,
    icon: require('assets/images/icons/search.png'),
    iconSelected: require('assets/images/icons/search-selected.png')
  },
  {
    title: 'trending',
    Component: SearchMovies,
    icon: require('assets/images/icons/star.png'),
    iconSelected: require('assets/images/icons/star-selected.png')
  },
  {
    title: 'watchlist',
    Component: SearchMovies,
    icon: require('assets/images/icons/preview.png'),
    iconSelected: require('assets/images/icons/preview-selected.png')
  }
]

export default routes;