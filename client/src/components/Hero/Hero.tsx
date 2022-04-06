import React, { FunctionComponent } from 'react';
import { StyledHero, StyledHeroHeader } from './HeroStyles';
import Logo from '../Logo';

const Hero: FunctionComponent = () => {
  return (
    <StyledHero>
      <StyledHeroHeader><Logo /></StyledHeroHeader>
    </StyledHero>
  );
};

export default Hero;
