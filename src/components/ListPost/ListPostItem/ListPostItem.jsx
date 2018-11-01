import React from 'react';
import classes from './ListPostItem.scss';

const ListPostItem = ({ title, autor }) => {
  let shorText;
  const size = title.length;

  if (size <= 20) {
    shorText = title.slice(0, 20);
  } else {
    shorText = title.slice(0, 50) + '...';
  }

  return (
    <>
      <div className="col-4">
        <div className={classes.ListPostItem}>
          <h5>{shorText}</h5>
          <p className={classes.Autor}>{autor}</p>
        </div>
      </div>
    </>
  );
};

export default ListPostItem;
