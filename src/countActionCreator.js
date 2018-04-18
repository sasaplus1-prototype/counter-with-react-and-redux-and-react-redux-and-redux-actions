import { createActions } from 'redux-actions';

export const {
  decrement,
  increment,
} = createActions({
  DECREMENT(value = -1) {
    return value;
  },
  INCREMENT(value = 1) {
    return value;
  },
});
