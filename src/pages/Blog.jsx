import React, { Component } from 'react';
import axios from 'axios';
import ListPost from '../components/ListPost/ListPost';

class Blog extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    axios
      .get('/posts')
      .then(response => {
        const posts = response.data.slice(0, 8);
        const updatedPost = posts.map(post => ({ ...post, autor: 'Virginia' }));
        this.setState({ posts: updatedPost });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <>
        <div className="row">
          <div className="col-12">
            <section>
              <h6>Lists Posts</h6>
              <ListPost
                listItem={this.state.posts}
                onClicked={this.handleSelectPostId}
              />
            </section>
          </div>
        </div>
      </>
    );
  }
}
export default Blog;
