import styled from 'styled-components';
import { Card, CardActions, CardHeader, Paper, Box } from '@material-ui/core';

export const StyledCard = styled(Card)`
  max-width: 345;
  margin: auto;
  transition: 0.3s;
  box-shadow: 0 8px 40px -12px rgba(0, 0, 0, 0.3);
  &:hover {
    box-shadow: 0 16px 70px -12.125px rgba(0, 0, 0, 0.3);
  }
`;

export const StyledCardActions = styled(CardActions)`
  padding: 1em;
  display: flex;
  justify-content: space-evenly;
`;

export const StyledCardHeader = styled(CardHeader)`
  background-color: white;
`;

export const StyledPaper = styled(Paper)`
  background-color: ${props => (props.primary ? 'white' : 'white')};
`;

export const StyledImg = styled.img`
  width: 90%;
  padding-top: 1em;
`;

export const StyledCardContent = styled(Box)`
  width: 90%;
`;
