import React from 'react';
import classes from './Post.scss';

const ListPostItem = ({ title, autor }) => {
  let shorText;
  const size = title.length;

  if (size <= 20) {
    shorText = title.slice(0, 50);
  } else {
    shorText = title.slice(0, 80) + '...';
  }
  return (
    <>
      <div className={classes.Post}>
        <h5>{shorText}</h5>
        <p className={classes.Autor}>{autor}</p>
      </div>
    </>
  );
};

export default ListPostItem;
