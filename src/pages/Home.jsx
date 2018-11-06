import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Posts from '../components/Posts/Posts';

class Home extends Component {
  state = {};

  render() {
    return (
      <div>
        <h1>HOME</h1>
        <Posts sliceCant="3" />
      </div>
    );
  }
}
export default withRouter(Home);
