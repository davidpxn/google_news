import React from 'react';
import Helmet from 'react-helmet';

import Home from './routes/home/Home';

import './App.scss';


function App() {
  return (
    <div className="app">
      <Helmet defaultTitle="Google news" />
      <Home />
    </div>
  );
}


export default App;