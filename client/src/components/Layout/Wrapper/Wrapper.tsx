import React, { FunctionComponent, useEffect } from 'react';
import { useDataContext } from '../../../global/dataContext';
import { StyledWrapper } from './WrapperStyles';
import ProductCard from '../../ProductCard/ProductCard';

async function getOrders(userId) {
  const url = `http://localhost:3001/orders/user/${userId}`
  const response = await fetch(url);
  return response.json();
}

const Wrapper: FunctionComponent = () => {
  const { setDataContext, dataContext } = useDataContext();

  useEffect(() => {
    if (!dataContext.products.length) {
      getOrders(2)
      .then(data => {
      setDataContext({ ...dataContext, orders: data.products, loading: false })
      });
    }
  }, [])
  
  
  return (
    <StyledWrapper data-testid="wrapper">
      {dataContext?.products.map((product) => (
        <ProductCard key={product.id} product={product} state={product.state} />
      ))}
    </StyledWrapper>
  );
};

export default Wrapper;
