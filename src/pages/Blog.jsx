import React, { Component } from 'react';
import FullPost from '../components/FullPost/FullPost';
import ListPost from '../components/ListPost/ListPost';

class Blog extends Component {
  render() {
    return (
      <>
        <section>
          <FullPost />
        </section>
        <section>
          <ListPost />
          <ListPost />
          <ListPost />
        </section>
      </>
    );
  }
}
export default Blog;
