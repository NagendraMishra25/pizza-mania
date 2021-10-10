import React from 'react';
import './App.scss';
import { Layout } from './components/layout/Layout';
import { Home } from './components/home/Home';
import HomeState  from './context/HomeState';

function App() {
  return (
    <Layout>
      <HomeState>
        <Home />
      </HomeState>
    </Layout>
  );
}

export default App;
