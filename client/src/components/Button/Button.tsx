import React, { FunctionComponent } from 'react';
import StyledButton from './ButtonStyles';
import { TButtonProps } from './ButtonTypes';

const Button: FunctionComponent<TButtonProps> = ({ children, ...props }) => (
  <StyledButton disabled={props.disabled} data-testid="Button" >
    {children}
  </StyledButton>
);

export default Button;
