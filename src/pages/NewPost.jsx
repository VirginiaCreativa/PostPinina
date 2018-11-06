import React, { Component } from 'react';
import NewPostForm from '../components/NewPostForm/NewPostForm';

class About extends Component {
  state = {};

  render() {
    console.log(this.props);
    return (
      <>
        <h2>New Post</h2>
        <NewPostForm />
      </>
    );
  }
}
export default About;
