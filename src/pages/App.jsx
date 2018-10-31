import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

class App extends Component {
  state = {
    name: 'Virginia Velásquez',
  };

  render() {
    return (
      <>
        <h1>{this.state.name}</h1>
      </>
    );
  }
}

export default hot(module)(App);
