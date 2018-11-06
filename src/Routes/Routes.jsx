import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Blog from '../pages/Blog';
import About from '../pages/About';
import NewPost from '../pages/NewPost';
import NotFound from '../pages/NotFound';
import FullPost from '../components/FullPost/FullPost';

class Routes extends Component {
  state = {};

  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Blog} />
          <Route path="/about" component={About} />
          <Route path="/newpost" component={NewPost} />
          <Route path="/posts/:id" component={FullPost} />
          <Route path="/notfound" component={NotFound} />
          <Redirect from="/*" to="/notfound" />
        </Switch>
      </>
    );
  }
}

export default Routes;
