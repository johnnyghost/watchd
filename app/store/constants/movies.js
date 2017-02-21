import { createConstants } from 'store/utils';

const githubConstants = createConstants(
  'SEARCH_MOVIES_REQUEST',
  'SEARCH_MOVIES_SUCCESS',
  'ERROR'
);

export default githubConstants;