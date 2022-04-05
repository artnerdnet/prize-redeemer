import styled from 'styled-components';

const StyledButton = styled.button<{ disabled: boolean }>`
  background: ${(props) => props.disabled ? props.theme.colors.disabled : props.theme.colors.primary};
  border-radius: 6.5px;
  border: none;
  color: ${(props) => props.disabled ? props.theme.colors.grey : props.theme.colors.white};
  font-weight: ${(props) => props.theme.fonts.weight.bold};
  min-height: ${(props) => props.theme.size.size40};
  min-width: 100%;
  outline: none;
  padding: 0;
  text-transform: capitalize;

  &&:hover {
    background: ${(props) => props.theme.colors.primaryHover};
  }
`;

export default StyledButton;
