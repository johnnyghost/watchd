import React from 'react';
import { Text } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from 'store/configureStore';

import { SearchMovies } from 'containers';

const store = configureStore();

/**
 * <Root />
 * The client entry point component.
 *
 * @return {JSXElement}
 */
const Root = ():Object => {

  return (
    <Provider store={store}>
      <SearchMovies />
    </Provider>
  )
}

export default Root;