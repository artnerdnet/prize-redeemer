import React from 'react';
import StyledLoadingWrapper from './LoadingStyles';

const Loading = () => (
  <StyledLoadingWrapper>
    <h1>Loading</h1>
  </StyledLoadingWrapper>
);

Loading.defaultProps = {
  withBg: false,
};

export default Loading;
