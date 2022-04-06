import React, { FunctionComponent } from 'react';
import { StyledImage } from './LogoStyles';
import BrandLogo from '../../assets/imgs/logo.svg';

const Logo: FunctionComponent = () => {
  return ( 
      <StyledImage src={BrandLogo} alt="SVG as an image" />
  );
};

export default Logo;
