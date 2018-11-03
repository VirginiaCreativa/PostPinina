import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Layout from '../hoc/Layout/Layout';
import Blog from './Blog';
// import About from './About';

class App extends Component {
  state = {};

  render() {
    return (
      <Layout>
        <Blog />
        {/* <About /> */}
      </Layout>
    );
  }
}

export default hot(module)(App);
