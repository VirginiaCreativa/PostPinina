import React from 'react';
import classes from './FullPost.scss';

const FullPost = ({ title, content, deleted }) => (
  <>
    <div className={classes.FullPost}>
      <button onClick={deleted}>X</button>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  </>
);

export default FullPost;
