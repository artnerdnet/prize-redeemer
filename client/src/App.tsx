import React, { useEffect } from 'react';
import { useDataContext } from './global/dataContext';
import Theme from './styles';
import Layout from './components/Layout/';
import Loading from './components/Loading/';
import Hero from './components/Hero/';

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
      <Hero />
      <Layout />
    </Theme>
  );
}

export default App;
