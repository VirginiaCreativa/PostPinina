import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../pages/Home';
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
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/newpost" component={NewPost} />
          <Route path="/blog/" component={Blog} />
          <Route path="/notfound" component={NotFound} />
          <Redirect from="/*" to="/notfound" />
        </Switch>
      </>
    );
  }
}

export default Routes;
