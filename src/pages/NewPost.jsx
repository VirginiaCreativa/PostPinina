import React, { Component } from 'react';
import NewPostForm from '../components/NewPost/NewPost';

class About extends Component {
  state = {};

  render() {
    return (
      <>
        <h2>New Post</h2>
        <NewPostForm />
      </>
    );
  }
}
export default About;
