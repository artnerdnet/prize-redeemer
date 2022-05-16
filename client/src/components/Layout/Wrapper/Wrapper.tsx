import React, { FunctionComponent, useEffect } from 'react';
import { v1 as uuid } from 'uuid';
import { useDataContext } from '../../../global/dataContext';
import Card from '../../Card';
import { StyledWrapper, StyledTitle, StyledContentContainer, StyledImageWrapper, StyledImage } from './WrapperStyles';
import PointsTag from '../../PointsTag';
import Button from '../../Button/Button';
import ProductCard from '../../ProductCard/ProductCard';


async function getProducts(url = '') {
  // Default options are marked with *
  const response = await fetch(url);
  return response.json(); // parses JSON response into native JavaScript objects
}



const Wrapper: FunctionComponent = () => {
  const { setDataContext, dataContext } = useDataContext();

  useEffect(() => {
    if (!dataContext.products.length) {
      getProducts('http://localhost:3001/orders/user/2')
      .then(data => {
      // setDataContext(data.orders)
      setDataContext({ ...dataContext, products: data.products, loading: false })
      });
    }
  }, [])
  
  
  return (
    <StyledWrapper data-testid="wrapper">
      {dataContext?.products.map((product) => (
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
