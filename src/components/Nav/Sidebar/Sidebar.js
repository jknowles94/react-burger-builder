import React from 'react';
import Logo from '../../Logo/Logo';
import Nav from '../NavItems/NavItems';
import classes from './Sidebar.module.scss';
import Backdrop from '../../UI/Backdrop/Backdrop';

const Sidebar = (props) => {
  let AttachedClasses = [classes.Sidebar, classes.Close];
  if(props.open) {
    AttachedClasses = [classes.Sidebar, classes.Open];
  }
  return (
    <React.Fragment>
      <Backdrop show={props.open} click={props.closed}/>
      <div className={AttachedClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo/>
        </div>
        <Nav/>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;