import React, { Component } from 'react';
import axios from 'axios';
import { Redirect, withRouter } from 'react-router-dom';
import classes from './NewPostForm.scss';

class newPost extends Component {
  state = {
    title: '',
    content: '',
    autor: 'Virginia',
    subtmitted: false,
  };

  handlePostData = () => {
    const data = {
      title: this.state.title,
      body: this.state.content,
      autor: this.state.autor,
    };
    axios.post('/posts', data).then(response => {
      console.log(response);
      this.props.history.replace('/blog');
      // OR
      // this.setState({ subtmitted: true });
    });
  };

  render() {
    let redirect = null;
    if (this.state.subtmitted) redirect = <Redirect to="/blog" />;
    return (
      <>
        <div className={classes.NewPost}>
          {redirect}
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
          <button className={classes.btnAdd} onClick={this.handlePostData}>
            Add Post
          </button>
        </div>
      </>
    );
  }
}

export default withRouter(newPost);
