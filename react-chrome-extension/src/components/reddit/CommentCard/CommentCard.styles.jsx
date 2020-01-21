import styled from 'styled-components';
import { Card } from '@material-ui/core';

export const StyledCard = styled(Card)`
  margin-left: ${props => {
    return `${props.margin + 1}em`;
  }};
  width: 30em;
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
`;
