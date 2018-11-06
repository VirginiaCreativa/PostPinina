import React, { Component } from 'react';
import Posts from '../components/Posts/Posts';

class Blog extends Component {
  state = {};

  render() {
    return (
      <>
        <Posts sliceCant="10" />
      </>
    );
  }
}
export default Blog;
