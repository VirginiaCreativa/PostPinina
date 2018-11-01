import React from 'react';
import classes from './ListPostItem.scss';

const ListPostItem = ({ title, autor }) => (
  <>
    <div className="col-4">
      <div className={classes.ListPostItem}>
        <h5>{title}</h5>
        <p className={classes.Autor}>{autor}</p>
      </div>
    </div>
  </>
);

export default ListPostItem;
