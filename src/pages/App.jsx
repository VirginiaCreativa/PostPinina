import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Layout from '../hoc/Layout/Layout';
import Blog from './Blog';
import NewBlog from '../components/NewPost/NewPost';

class App extends Component {
  state = {};

  render() {
    return (
      <Layout>
        <div className="container">
          <div className="row">
            <div className="col-8">
              <Blog />
            </div>
            <div className="col-4">
              <NewBlog />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default hot(module)(App);
