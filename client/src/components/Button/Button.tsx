import React, { FunctionComponent } from 'react';
import StyledButton from './ButtonStyles';
import StyledCard from './CardStyles';
import TButtonProps  from './ButtonStyles';

const Button: FunctionComponent<TButtonProps> = ({ children }) => (
  <StyledButton data-testid="Button">
    {children}
  </StyledButton>
);

export default Button;
