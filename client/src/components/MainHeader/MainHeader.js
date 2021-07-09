import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
      <h1>
        <Link to="/">Quit Weed</Link>
      </h1>
      <Navigation />
    </header>
  );
};

export default MainHeader;
