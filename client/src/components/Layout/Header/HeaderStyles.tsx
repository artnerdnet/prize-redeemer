import styled from 'styled-components';

export const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.theme.size.size75};
`;

export const StyledTitle = styled.div`
  font-size: ${(props) => props.theme.fonts.sizes.xLarge};
  font-family: ${(props) => props.theme.fonts.family.primary};
  font-weight: ${(props) => props.theme.fonts.weight.bold};
  line-height: ${(props) => props.theme.fonts.lineHeight.large};
`;

export const StyledSubtitle = styled.div`
  font-family: ${(props) => props.theme.fonts.family.primary};
  font-size: ${(props) => props.theme.fonts.sizes.large};
  line-height: ${(props) => props.theme.fonts.lineHeight.medium};
  margin-left: ${(props) => props.theme.spacing.space10};
`;

export const StyledToggleLayout = styled.div`
  padding-left: ${(props) => props.theme.spacing.space30};
`;
