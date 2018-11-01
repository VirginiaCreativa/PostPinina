import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Layout from '../hoc/Layout/Layout';
import Blog from './Blog';

class App extends Component {
  state = {};

  render() {
    return (
      <Layout>
        <Blog />
      </Layout>
    );
  }
}

export default hot(module)(App);
