import React from 'react';
import Helmet from 'react-helmet';

import Home from './routes/home/Home';
import Header from './components/header/Header';

import './App.scss';


function App() {
  return (
    <div className="app">
      <Helmet defaultTitle="Google Myndir" />
      <Header/>
      <Home />
    </div>
  );
}


export default App;