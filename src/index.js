import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { ViewportProvider } from './contexts/ViewportContext';

import App from './App';


ReactDOM.render(
  <ViewportProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ViewportProvider>,
  document.getElementById('root')
);