import React, { useEffect } from 'react';
import { useDataContext } from './global/dataContext';
import Theme from './styles';
import Layout from './components/Layout/Layout';
import Loading from './components/Loading/Loading';

function App() {
  const { dataContext, setDataContext } = useDataContext();
  useEffect(() => {
    setDataContext({
      ...dataContext, loading: false,
    });
  }, []);

  return (
    <Theme>
      {dataContext.loading && <Loading />}
      <Layout />
    </Theme>
  );
}

export default App;
