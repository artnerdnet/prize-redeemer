import React, { FunctionComponent } from 'react';
import {
  StyledHeader, StyledTitle, StyledSubtitle, StyledToggleLayout,
} from './HeaderStyles';

const Layout: FunctionComponent = () => (
  <StyledHeader>
    <StyledTitle>Apps by Host</StyledTitle>
    <StyledSubtitle>for user lala@gmail.com</StyledSubtitle>
  </StyledHeader>
);

export default Layout;
