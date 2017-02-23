import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'store/configureStore';

import { Navigator } from 'containers';

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
      <Navigator />
    </Provider>
  )
}

export default Root;