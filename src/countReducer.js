import { handleActions } from 'redux-actions';

import {
  decrement,
  increment,
} from './countActionCreator';

export default handleActions({
  [decrement](state, action) {
    return Object.assign({}, state, {
      count: state.count - 1
    });
  },
  [increment](state, action) {
    return Object.assign({}, state, {
      count: state.count + 1
    });
  },
}, { count: 0 });
