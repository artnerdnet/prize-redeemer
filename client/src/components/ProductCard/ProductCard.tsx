import React, { FunctionComponent } from 'react';
import { v1 as uuid } from 'uuid';
import Card from '../Card';
import {  StyledTitle, StyledContentContainer, StyledImageWrapper, StyledImage, ProductCardWrapper, StyledNotice } from './ProductCardStyles';
import PointsTag from '../PointsTag';
import { TProductCardProps } from './ProductCardTypes';
import Button from '../Button';

const ProductCard: FunctionComponent<TProductCardProps> = ({ product, state }) => {
  const isUnredeemable = state === 'unredeemable'
  const isUnavailable = state === 'unavailable'
  const isDisabled = isUnredeemable || isUnavailable;
  const isRedeemed = state === 'redeemed';

  return (
    <ProductCardWrapper >
      <Card key={uuid()}>
        <StyledContentContainer disabled={isDisabled}>
            <PointsTag count={product.points} />
          <StyledImageWrapper>
            <StyledImage src={product.image} />
          </StyledImageWrapper>
          <StyledTitle>{product.name}</StyledTitle>
          <Button disabled={isRedeemed}>
            {isRedeemed ? 'Redeemed' : 'Redeem'}
          </Button>
        </StyledContentContainer>
      </Card>
      {isDisabled && <StyledNotice>
        {isUnredeemable ? 'Not enough points' : 'Unavailable'}
      </StyledNotice>}
    </ProductCardWrapper>
  );
};

export default ProductCard;
