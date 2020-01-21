import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Breadcrumb from './Breadcrumb';

const NavBar = () => {
  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <Breadcrumb />
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default NavBar;
