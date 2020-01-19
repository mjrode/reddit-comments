import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  breadcrumb: {
    color: 'white'
  }
}));

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function SimpleBreadcrumbs() {
  const classes = useStyles();

  return (
    <Breadcrumbs aria-label='breadcrumb' className={classes.breadcrumb}>
      <Link className={classes.breadcrumb} href='/' onClick={handleClick}>
        Posts
      </Link>
      <Link
        className={classes.breadcrumb}
        href='/getting-started/installation/'
        onClick={handleClick}
      >
        Comments
      </Link>
    </Breadcrumbs>
  );
}
