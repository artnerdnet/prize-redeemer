import styled from 'styled-components';

const StyledButton = styled.button`
  background: ${(props) => props.theme.colors.primary};
  padding: 0;
  border: none;
  outline: none;
  min-width: 100%;
  min-height: ${(props) => props.theme.size.size40};
  text-transform: capitalize;
  color: ${(props) => props.theme.colors.white};
  font-weight: ${(props) => props.theme.fonts.weight.bold};
  /* font-family: ${(props) => props.theme.fonts.weight.bold}; */

  &&:hover {
    background: ${(props) => props.theme.colors.primaryHover};
  }
`;

export default StyledButton;
