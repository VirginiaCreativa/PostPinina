import React, { Component } from 'react';
import classes from './NewPost.scss';

class newPost extends Component {
  state = {
    title: '',
    content: '',
    autor: 'Virginia',
  };

  render() {
    return (
      <>
        <div className={classes.NewPost}>
          <h4>Create Post</h4>
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Title"
                value={this.state.title}
                onChange={ev => this.setState({ title: ev.target.value })}
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                placeholder="Contenidor"
                rows="4"
                value={this.state.content}
                onChange={ev => this.setState({ content: ev.target.value })}
              />
            </div>
            <div className="form-group">
              <i className="fas fa-angle-down" />
              <select
                className="form-control"
                value={this.state.autor}
                onChange={ev => this.setState({ autor: ev.target.value })}
              >
                <option value="Virginia">Virginia</option>
                <option value="Carolina">Carolina</option>
                <option value="Diego">Diego</option>
                <option value="Ximena">Ximena</option>
              </select>
            </div>
          </form>
          <button className={classes.btnAdd}>Add Post</button>
        </div>
      </>
    );
  }
}

export default newPost;
