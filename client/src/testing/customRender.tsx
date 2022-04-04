import React from 'react';
import { render } from '@testing-library/react';
import { DataContextProvider } from '../global/dataContext';
import Theme from '../styles/theme';

const initialValues = {
  products: [],
  user: {},
  error: {
    message: null,
  },
  loading: true,
};

const customRender = (children, dataContextValues = initialValues) => {
  render(
    <DataContextProvider initialValue={dataContextValues}>
      <Theme>
        {children}
      </Theme>
    </DataContextProvider>,
  );
};

export default customRender;
