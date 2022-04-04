import React, { FunctionComponent } from 'react';
import { v1 as uuid } from 'uuid';
import { useDataContext } from '../../../global/dataContext';
import Card from '../../Card';
import { StyledWrapper, StyledTitle, StyledContentContainer, StyledImageWrapper, StyledImage } from './WrapperStyles';
import PointsTag from '../../PointsTag';
import Button from '../../Button/Button';

const Wrapper: FunctionComponent = () => {
  const { products } = useDataContext().dataContext;

  return (
    <StyledWrapper data-testid="wrapper">
      {products.map((product) => (
        <Card key={uuid()}>
          <StyledContentContainer>
            <StyledTitle>{product.name}</StyledTitle>
              <PointsTag count={product.points} />
            <StyledImageWrapper>
              <StyledImage src={product.image} />
            </StyledImageWrapper>
            <Button>get</Button>
          </StyledContentContainer>
        </Card>
      ))}
    </StyledWrapper>
  );
};

export default Wrapper;
