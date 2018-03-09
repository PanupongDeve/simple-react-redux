import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk';

import reducers from './redux/reducer';

import App                      from './App';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default Root;
