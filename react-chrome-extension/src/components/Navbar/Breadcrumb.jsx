import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { Route } from 'react-router-dom';
import { StyledBreadcrumbs } from './Breadcrumb.styles.jsx';

export default function Breadcrumb() {
  return (
    <Route>
      {({ location }) => {
        const pathnames = location.pathname.split('/').filter(x => x);
        return (
          <StyledBreadcrumbs aria-label='Breadcrumb'>
            <RouterLink to='/'>
              <Typography>Posts</Typography>
            </RouterLink>
            {pathnames.map((value, index) => {
              const last = index === pathnames.length - 1;
              const to = `/${pathnames.slice(0, index + 1).join('/')}`;

              return last ? (
                <Typography key={to}>{value}</Typography>
              ) : (
                <RouterLink color='inherit' to={to} key={to}>
                  <Typography key={to}> {value}</Typography>
                </RouterLink>
              );
            })}
          </StyledBreadcrumbs>
        );
      }}
    </Route>
  );
}
