import React from 'react';
import Helmet from 'react-helmet';

import './App.scss';


function App() {
  return (
    <div className="app">
      <Helmet defaultTitle="Google news" />
      <p>Google news</p>
    </div>
  );
}


export default App;