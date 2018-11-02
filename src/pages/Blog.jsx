import React, { Component } from 'react';
import axios from 'axios';
import FullPost from '../components/FullPost/FullPost';
import ListPost from '../components/ListPost/ListPost';
import NewPost from '../components/NewPost/NewPost';

const baseURL = 'https://jsonplaceholder.typicode.com/posts/';
class Blog extends Component {
  state = {
    posts: [],
    selectPostId: null,
    loadedPost: null,
  };

  componentDidMount() {
    axios
      .get(baseURL)
      .then(response => {
        const posts = response.data.slice(0, 8);
        const updatedPost = posts.map(post => ({ ...post, autor: 'Virginia' }));
        this.setState({ posts: updatedPost });
      })
      .catch(err => console.log(err));
  }

  handleSelectPostId = id => {
    this.setState({ selectPostId: id });
  };

  handleDeleteFullPost = () => {
    this.setState({ selectPostId: false });
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-8">
              <section>
                <h6>Lists Posts</h6>
                <ListPost
                  listItem={this.state.posts}
                  onClicked={this.handleSelectPostId}
                />
              </section>
              <section>
                <FullPost
                  idPost={this.state.selectPostId}
                  onDeleted={this.handleDeleteFullPost}
                  loadedPost={this.state.loadedPost}
                />
              </section>
            </div>
            <div className="col-4">
              <NewPost />
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Blog;
