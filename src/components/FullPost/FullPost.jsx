import React from 'react';
import classes from './FullPost.scss';

const FullPost = ({ selected, title, content, autor, onDeleted }) => {
  let postDetalle;
  if (selected) {
    postDetalle = (
      <>
        <h6>Full Post</h6>
        <div className={classes.FullPost}>
          <button onClick={onDeleted} className={classes.btnDelete}>
            X
          </button>
          <h3>{title}</h3>
          <p>{content}</p>
          <p className={classes.Autor}>{autor}</p>
        </div>
      </>
    );
  }
  return <>{postDetalle}</>;
};

export default FullPost;
