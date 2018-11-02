import React, { Component } from 'react';
import axios from 'axios';
import classes from './FullPost.scss';

const baseURL = 'https://jsonplaceholder.typicode.com/posts/';

class FullPost extends Component {
  state = {
    loadedPost: null,
  };

  componentDidUpdate() {
    if (this.props.idPost) {
      axios
        .get(baseURL + this.props.idPost)
        .then(response => {
          this.setState({ loadedPost: response.data });
        })
        .catch(err => console.log(err));
    }
  }

  render() {
    const { onDeleted, idPost, autor } = this.props;

    let postDetalle;
    if (idPost) postDetalle = <h3>Loading....</h3>;
    if (this.state.loadedPost) {
      postDetalle = (
        <>
          <h6>Full Post</h6>
          <div className={classes.FullPost}>
            <button onClick={onDeleted} className={classes.btnDelete}>
              X
            </button>
            <h3>{this.state.loadedPost.title}</h3>
            <p>{this.state.loadedPost.content}</p>
            <p className={classes.Autor}>{autor}</p>
          </div>
        </>
      );
    }
    return <>{postDetalle}</>;
  }
}
export default FullPost;
