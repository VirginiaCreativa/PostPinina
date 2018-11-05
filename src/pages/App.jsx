import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Layout from '../hoc/Layout/Layout';
import Routes from '../config/Routes';

class App extends Component {
  state = {};

  render() {
    return (
      <Layout>
        <Routes />
      </Layout>
    );
  }
}

export default hot(module)(App);
