import styled from 'styled-components';
import { Card, ListItem, Grid } from '@material-ui/core';

export const StyledCard = styled(Card)`
  margin-left: ${props => {
    return `${props.margin + 2}em`;
  }};
  box-shadow: none;
  width: inherit;
  a:-webkit-any-link {
    text-decoration: none;
    color: inherit;
  }
  .posted-by {
    color: gray;
  }
  .title {
    font-size: 0.6em;
  }
  .points {
    font-size: 0.6em;
  }
  .min {
    cursor: pointer;
  }
`;
export const StyledListItem = styled(ListItem)`
  background-color: ${props => (props.index % 2 === 0 ? 'white' : '#efefef')};
`;

export const StyledWidthGrid = styled(Grid)`
  width: inherit;
`;
