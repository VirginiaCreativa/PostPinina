import React from 'react';
import classes from './FullPost.scss';

const FullPost = ({ title, content, autor, deleted }) => (
  <>
    <div className={classes.FullPost}>
      <button onClick={deleted} className={classes.btnDelete}>
        X
      </button>
      <h3>{title}</h3>
      <p>{content}</p>
      <p className={classes.Autor}>{autor}</p>
    </div>
  </>
);

export default FullPost;
