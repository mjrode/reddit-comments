import styled from 'styled-components';
import { Breadcrumbs } from '@material-ui/core';

export const StyledBreadcrumbs = styled(Breadcrumbs)`
  a:-webkit-any-link: {
    color: white;
    text-decoration: none;
  }

  p {
    color: white;
  }

  li {
    color: white;
  }
`;
