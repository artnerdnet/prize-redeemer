import React, { FunctionComponent } from 'react';
import Wrapper from './Wrapper';
import StyledLayout from './LayoutStyles';
import Header from './Header';

const Layout: FunctionComponent = () => (
  <StyledLayout>
    <Header />
    <Wrapper />
  </StyledLayout>
);

export default Layout;
