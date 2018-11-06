import React, { Component } from 'react';
import Posts from '../components/Posts/Posts';

class Blog extends Component {
  state = {};

  handleSelectPost = id => {
    this.props.history.push('/posts/' + id);
  };

  render() {
    console.log(this.props);
    return (
      <>
        <section>
          <Posts onSelect={this.handleSelectPost} />
        </section>
      </>
    );
  }
}
export default Blog;
