import React, { Component } from 'react';
import axios from 'axios';
import classes from './FullPost.scss';

class FullPost extends Component {
  state = {
    loadedPost: null,
  };

  componentDidMount() {
    if (this.props.match.params.id) {
      if (
        !this.state.loadedPost ||
        (this.state.loadedPost &&
          this.state.loadedPost.id !== this.props.match.params.id)
      ) {
        axios
          .get('/posts/' + this.props.match.params.id)
          .then(response => {
            console.log(response.data.id);
            this.setState({ loadedPost: response.data });
          })
          .catch(err => console.log(err));
      }
    }
  }

  handleDeleteFullPost = () => {
    axios.delete('/posts/' + this.props.match.params.id).then(response => {
      const deleted = response.data.id;
      console.log('DELETE', deleted);
      // this.setState({ loadedPost: response.data.id });
    });
  };

  render() {
    const { idPost, autor } = this.props;
    let postDetalle;
    if (idPost) postDetalle = <h3>Loading....</h3>;
    if (this.state.loadedPost) {
      postDetalle = (
        <>
          <h6>Full Post</h6>
          <div className={classes.FullPost}>
            <button
              onClick={() =>
                this.handleDeleteFullPost(this.state.loadedPost.id)
              }
              className={classes.btnDelete}
            >
              X
            </button>
            <h3>{this.state.loadedPost.title}</h3>
            <p>{this.state.loadedPost.body}</p>
            <p className={classes.Autor}>{autor}</p>
          </div>
        </>
      );
    }
    return <>{postDetalle}</>;
  }
}
export default FullPost;
