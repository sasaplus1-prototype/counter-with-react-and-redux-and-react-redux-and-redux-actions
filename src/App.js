import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  decrement,
  increment,
} from './countActionCreator';

function mapStateToProps(state) {
  const {
    countReducer,
  } = state;

  return {
    count: countReducer.count,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    clickDecrement() {
      dispatch(decrement());
    },
    clickIncrement() {
      dispatch(increment());
    },
  };
}

@connect(mapStateToProps, mapDispatchToProps)
class App extends React.Component {
  render() {
    const {
      clickDecrement,
      clickIncrement,
      count,
    } = this.props;

    return (
      <div>
        <span>{count}</span>
        <br />
        <input type="button" value="inc" onClick={clickIncrement} />
        <input type="button" value="dec" onClick={clickDecrement} />
      </div>
    );
  }
}

App.propTypes = {
  clickDecrement: PropTypes.func,
  clickIncrement: PropTypes.func,
  count: PropTypes.number,
};

export default App;
