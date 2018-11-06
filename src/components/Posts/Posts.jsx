import React, { Component } from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import axios from 'axios';
import Post from './Post/Post';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    axios
      .get('/posts')
      .then(response => {
        const posts = response.data.slice(0, this.props.sliceCant);
        const updatedPost = posts.map(post => ({ ...post, autor: 'Virginia' }));
        this.setState({ posts: updatedPost });
      })
      .catch(err => console.log(err));
  }

  handleSelectPostId = id => {
    this.props.history.push('/posts/', id);
  };

  render() {
    console.log(this.props);
    return (
      <>
        <Route path="/posts/:id" component={FullPost} />
        <div className="row">
          {this.state.posts.map(item => (
            <div className="col-4" key={item.id}>
              <Link to={'/posts/' + item.id}>
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

export default withRouter(Posts);
