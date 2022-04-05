import React, { FunctionComponent } from 'react';
import { v1 as uuid } from 'uuid';
import { useDataContext } from '../../../global/dataContext';
import Card from '../../Card';
import { StyledWrapper, StyledTitle, StyledContentContainer, StyledImageWrapper, StyledImage } from './WrapperStyles';
import PointsTag from '../../PointsTag';
import Button from '../../Button/Button';
import ProductCard from '../../ProductCard/ProductCard';

const Wrapper: FunctionComponent = () => {
  const { products } = useDataContext().dataContext;

  return (
    <StyledWrapper data-testid="wrapper">
      {products.map((product) => (
        <ProductCard product={product} state={product.state} />
        // <Card key={uuid()}>
        //   <StyledContentContainer>
        //       <PointsTag count={product.points} />
        //     <StyledImageWrapper>
        //       <StyledImage src={product.image} />
        //     </StyledImageWrapper>
        //     <StyledTitle>{product.name}</StyledTitle>
        //     <Button>Redeem</Button>
        //   </StyledContentContainer>
        // </Card>
      ))}
    </StyledWrapper>
  );
};

export default Wrapper;
