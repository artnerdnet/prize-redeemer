import React, { FunctionComponent } from 'react';
import StyledCard from './CardStyles';
import { TCardProps } from './CardTypes';

const Card: FunctionComponent<TCardProps> = ({ children }) => (
  <StyledCard data-testid="card">
    {children}
  </StyledCard>
);

export default Card;
