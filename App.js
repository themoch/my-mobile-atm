import React, { Component } from 'react';
import { Provider } from 'react-redux';
import MyMobileAtm from './myMobileAtm.js';

import { store } from './store.js';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MyMobileAtm />
      </Provider>
    )
  }
}

export default App;
