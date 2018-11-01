import React from 'react';
import classes from './Header.scss';

const header = () => (
  <>
    <header className={classes.Header}>
      <div className={classes.Box}>
        <h1>
          Post
          <span>Pinina</span>
        </h1>
      </div>
    </header>
  </>
);

export default header;
