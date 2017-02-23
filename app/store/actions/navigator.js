import NAVIGATOR_CONSTANTS from 'store/constants/navigator';

type ActionType = {
  type: string;
  payload?: ?any;
}

/**
 * Dispatch an action to request the search movies.
 *
 * @method searchMoviesRequest
 * @public
 *
 * @param {String} tab Selected tab
 * @return {Object}
 */
export const selectTab = (tab: string):ActionType => ({
  type: NAVIGATOR_CONSTANTS.SELECT_TAB,
  payload: {
    tab
  }
})