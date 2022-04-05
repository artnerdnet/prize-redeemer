import styled from 'styled-components';


const StyledNotice = styled.span`
  align-items: center;
  background: ${(props) => props.theme.colors.error};
  border-radius: ${(props) => props.theme.size.size5};
  color: ${(props) => props.theme.colors.white};
  display: flex;
  height: ${(props) => props.theme.size.size68};
  justify-content: center;
  position: relative;
  width: ${(props) => props.theme.size.size225};
  opacity: 100% !important;
  left: 15%;
  z-index: 30000;
  bottom: 50%;
`;

const ProductCardWrapper = styled.div`
 
`;

const StyledContentContainer = styled.div<{disabled: boolean}>`
  margin: ${(props) => props.theme.spacing.space30};
  && *:not(span) {
    opacity: ${(props) => props.disabled ? 0.5 : 1};
  }
`;

const StyledTitle = styled.div`
  margin: 16px 0;
  text-align: center;
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
  StyledTitle,
  StyledNotice,
  StyledContentContainer, 
  StyledImageWrapper, 
  ProductCardWrapper,
  StyledImage
};
