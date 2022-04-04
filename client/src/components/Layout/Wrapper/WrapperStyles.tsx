import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  > div {
    margin: 0 auto;
  }
`;

const StyledContentContainer = styled.div`
    margin: ${(props) => props.theme.spacing.space30};
  `;

const StyledTitle = styled.div`
  font-family: ${(props) => props.theme.fonts.family.primary};
  font-weight: ${(props) => props.theme.fonts.weight.bold};
  font-size: ${(props) => props.theme.fonts.sizes.medium};
  line-height: ${(props) => props.theme.fonts.lineHeight.small};
`;

const StyledImageWrapper = styled.div`
  align-items: center;
  background: ${(props) => props.theme.colors.lightGrey};
  border-radius: ${(props) => props.theme.size.size20};
  display: flex;
  height: ${(props) => props.theme.size.size445};
  justify-content: center;
  width: ${(props) => props.theme.size.size270};
`;

const StyledImage = styled.img`
  width: ${(props) => props.theme.size.size160};
  height: ${(props) => props.theme.size.size400};
`;

export {
  StyledWrapper,
  StyledTitle, 
  StyledContentContainer, 
  StyledImageWrapper, 
  StyledImage
};
