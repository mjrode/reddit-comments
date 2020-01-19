import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Breadcrumb from './breadcrumb';


const NavBar = () => {

  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <Breadcrumb  />
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default NavBar;
