import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Layout from '../hoc/Layout/Layout';
import Blog from './Blog';
// import About from './About';
// import NewPost from './NewPost';
// import PostDetalle from './PostDetalle';

class App extends Component {
  state = {};

  render() {
    return (
      <Layout>
        <Blog />
        {/* <About /> */}
        {/* <PostDetalle /> */}
      </Layout>
    );
  }
}

export default hot(module)(App);
