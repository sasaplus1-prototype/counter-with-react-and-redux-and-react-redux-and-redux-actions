import { handleActions } from 'redux-actions';

import {
  decrement,
  increment,
} from './countActionCreator';

export default handleActions({
  [decrement](state, action) {
    return Object.assign({}, state, {
      count: state.count + action.payload,
    });
  },
  [increment](state, action) {
    return Object.assign({}, state, {
      count: state.count + action.payload,
    });
  },
}, { count: 0 });
