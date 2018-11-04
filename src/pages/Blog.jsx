import React, { Component } from 'react';
import Posts from '../components/Posts/Posts';

class Blog extends Component {
  state = {};

  render() {
    return (
      <>
        <section>
          <Posts />
        </section>
      </>
    );
  }
}
export default Blog;
