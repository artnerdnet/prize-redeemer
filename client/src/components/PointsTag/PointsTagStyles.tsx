import styled from 'styled-components';

const StyledPointsTag = styled.div`
  align-items: center;
  background: ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.size.size5};
  color: ${(props) => props.theme.colors.white};
  display: flex;
  font-size: ${(props) => props.theme.fonts.sizes.small};
  height: ${(props) => props.theme.size.size55};
  justify-content: center;
  width: ${(props) => props.theme.size.size60};
  position: relative;
  top: ${(props) => props.theme.spacing.space44};
  left: ${(props) => props.theme.spacing.space190}
`

const StyledPointsText = styled.span`
font-weight: ${(props) => props.theme.fonts.weight.black};
  max-width: 99%;
  text-align: center;
  text-transform: uppercase;
`

export {
  StyledPointsTag, 
  StyledPointsText
};
