import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Post from './Post/Post';

class Posts extends Component {
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

  handleSelectPostId = id => {
    console.log(id);
  };

  render() {
    return (
      <>
        <div className="row">
          {this.state.posts.map(item => (
            <div className="col-4" key={item.id}>
              <Link to={'/' + item.id}>
                <Post
                  clicked={() => this.handleSelectPostId(item.id)}
                  {...item}
                />
              </Link>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Posts;
