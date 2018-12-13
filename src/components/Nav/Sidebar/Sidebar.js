import React from 'react';
import Logo from '../../Logo/Logo';
import Nav from '../NavItems/NavItems';
import classes from './Sidebar.module.scss';

const Sidebar = (props) => {
  return (
    <div className={classes.Sidebar}>
      <div className={classes.Logo}>
        <Logo/>
      </div>
      <Nav/>
    </div>
  );
};

export default Sidebar;