import NAVIGATOR_CONSTANTS from 'store/constants/navigator';

type ActionType = {
  type: string;
  payload?: ?any;
}

/**
 * Dispatch an action to request the search movies.
 *
 * @method selectTab
 * @public
 *
 * @param {String} tab Selected tab
 * @return {Object}
 */
export const selectTab = (tab: string):ActionType => ({
  type: NAVIGATOR_CONSTANTS.SELECT_TAB,
  payload: tab
})

/**
 * Dispatch an action to push.
 *
 * @method push
 * @public
 *
 * @param {String} key The key to navigate for
 * @return {Object}
 */
export const push = (key:string):ActionType => ({
  type: NAVIGATOR_CONSTANTS.PUSH,
  payload: key
});

/**
 * Dispatch an action to pop.
 *
 * @method pop
 * @public
 *
 * @return {Object}
 */
export const pop = ():ActionType => ({
  type: NAVIGATOR_CONSTANTS.POP
});