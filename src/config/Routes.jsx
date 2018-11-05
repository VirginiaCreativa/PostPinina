import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Blog from '../pages/Blog';
import About from '../pages/About';
import NewPost from '../pages/NewPost';
import NotFound from '../pages/NotFound';

class Routes extends Component {
  state = {};

  render() {
    return (
      <>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/newpost" component={NewPost} />
          <Route path="/notfound" component={NotFound} />
          <Route path="/" exact component={Blog} />
          <Redirect from="*" to="/notfound" />
        </Switch>
      </>
    );
  }
}

export default Routes;
