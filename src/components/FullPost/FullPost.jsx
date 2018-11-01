import React from 'react';
import classes from './FullPost.scss';

const FullPost = ({ title, content, deleted }) => (
  <>
    <div className={classes.FullPost}>
      <div className="row">
        <div className="col-12">
          <button onClick={deleted}>X</button>
          <h3>{title}</h3>
          <p>{content}</p>
        </div>
      </div>
    </div>
  </>
);

export default FullPost;
