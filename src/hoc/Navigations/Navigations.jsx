import React from 'react';
import classes from './Navigations.scss';
import NavLink from './Navigation/Navigation';

const Navigations = () => (
  <div className={classes.Navigations}>
    <ul className="nav justify-content-end">
      <NavLink toLink="/">Home</NavLink>
      <NavLink toLink="/about">About</NavLink>
      <NavLink
        toLink={{
          pathname: '/newpost',
          hash: '#submit',
          search: '?quick-subtime=true',
        }}
      >
        New Post
      </NavLink>
    </ul>
  </div>
);

export default Navigations;
