import React from 'react';
import { styledTypography } from './breadcrumb.styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';

export default function SimpleBreadcrumbs() {
  return (
    <Route>
      {({ location }) => {
        const pathnames = location.pathname.split('/').filter(x => x);
        return (
          <Breadcrumbs aria-label='Breadcrumb'>
            <RouterLink color='inherit' to='/'>
              Home
            </RouterLink>
            {pathnames.map((value, index) => {
              const last = index === pathnames.length - 1;
              const to = `/${pathnames.slice(0, index + 1).join('/')}`;

              return last ? (
                <styledTypography key={to}>{value}</styledTypography>
              ) : (
                <RouterLink color='inherit' to={to} key={to}>
                  {value}
                </RouterLink>
              );
            })}
          </Breadcrumbs>
        );
      }}
    </Route>
  );
}
