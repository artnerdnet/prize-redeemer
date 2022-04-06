import styled from "styled-components";
import bg from '../../assets/imgs/bg.png';

const StyledHeroHeader = styled.div`

`

const StyledHero = styled.div`
  height: 100vh;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10%
`

export {
  StyledHeroHeader, 
  StyledHero
};
