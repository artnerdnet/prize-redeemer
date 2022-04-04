import React, { FunctionComponent } from 'react';
import { StyledPointsTag, StyledPointsText } from './PointsTagStyles';

const PointsTag: FunctionComponent<{count: number}> = ({ count }) => {
  return (
    <StyledPointsTag>
      <StyledPointsText>{count} points</StyledPointsText>
    </StyledPointsTag>
  );
};

export default PointsTag;
