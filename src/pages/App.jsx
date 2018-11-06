import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import Layout from '../hoc/Layout/Layout';
import Routes from '../Routes/Routes';

class App extends Component {
  state = {};

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Routes />
        </Layout>
      </BrowserRouter>
    );
  }
}

export default hot(module)(App);
