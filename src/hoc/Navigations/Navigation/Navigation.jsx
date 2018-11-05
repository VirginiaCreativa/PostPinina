import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const Navigation = ({ toLink, onClicked, children }) => (
  <>
    <li>
      <NavLink
        to={toLink}
        className="nav-item"
        onClick={onClicked}
        activeClassName="is-selected"
      >
        {children}
      </NavLink>
    </li>
  </>
);

export default withRouter(Navigation);
