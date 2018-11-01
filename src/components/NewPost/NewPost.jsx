import React, { Component } from 'react';
import classes from './NewPost.scss';

class newPost extends Component {
  state = {};

  render() {
    return (
      <>
        <div className={classes.NewPost}>
          <h4>Create Post</h4>
          <form>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Title" />
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                placeholder="Contenidor"
                rows="4"
              />
            </div>
            <div className="form-group">
              <i className="fas fa-angle-down" />
              <select className="form-control">
                <option>Virginia</option>
                <option>Carolina</option>
                <option>Diego</option>
                <option>Ximena</option>
              </select>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default newPost;
