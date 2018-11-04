import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';

import Layout from '../hoc/Layout/Layout';
import Blog from './Blog';
import About from './About';
import NewPost from './NewPost';

class App extends Component {
  state = {};

  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Blog} />
          <Route path="/about" component={About} />
          <Route path="/newpost" component={NewPost} />
        </Switch>
      </Layout>
    );
  }
}

export default hot(module)(App);
