import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { DataContextProvider } from './global/dataContext';
import './styles/normalize.css';
import './styles/styles.css';
import { user } from './testing/dataMock';

ReactDOM.render(
  <React.StrictMode>
    <DataContextProvider initialValue={ // TODO change
        {
          user: user,
          products: [],
          orders: [],
          error: {
            message: null,
          },
          loading: true,
        }
    }
    >
      <App />
    </DataContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
