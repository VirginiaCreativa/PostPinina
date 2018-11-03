import React from 'react';
import classes from './Header.scss';

const header = () => (
  <>
    <header className={classes.Header}>
      <div className="container-full">
        <div className="row">
          <div className="col">
            <div className={classes.Logo}>
              <h1>
                Post
                <span>Pinina</span>
              </h1>
            </div>
          </div>
          <div className="col">
            <nav className={classes.Nav}>
              <ul className="nav justify-content-end">
                <li className="nav-item">
                  <a className="nav-link active" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/newpost">
                    New Post
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  </>
);

export default header;
