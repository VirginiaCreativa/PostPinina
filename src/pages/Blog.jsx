import React, { Component } from 'react';
import FullPost from '../components/FullPost/FullPost';
import ListPost from '../components/ListPost/ListPost';
import NewPost from '../components/NewPost/NewPost';

class Blog extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-8">
              <section>
                <h6>Full Post</h6>
                <FullPost
                  title="Title Posts"
                  content="Fdfladsjfhsdkjfhkjdshk"
                />
              </section>
              <section>
                <h6>Lists Posts</h6>
                <ListPost />
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
