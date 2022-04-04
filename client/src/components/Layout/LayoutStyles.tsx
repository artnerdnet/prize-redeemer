import styled from 'styled-components';

const StyledLayout = styled.div`
  background: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.family.primary};
  margin: 0;
  max-width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  width: 100vw;
`;

export default StyledLayout;
