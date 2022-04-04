import React from 'react';
import { screen } from '@testing-library/react';

import Wrapper from '../Wrapper';
import customRender from '../../../../testing/customRender';

describe('card', () => {
  test('renders correctly', () => {
    customRender(
      <Wrapper />,
    );
    expect(screen.getByTestId('wrapper')).toBeInTheDocument();
  });
});
