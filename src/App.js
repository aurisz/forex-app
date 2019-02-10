import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import './App.css';
import ForexContainer from './containers/ForexContainer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <ForexContainer />
      </div>
    );
  }
}

export default App;
