import React, { useContext } from 'react';
import Helmet from 'react-helmet';

import ViewportContext, { DeviceTypeEnum } from './contexts/ViewportContext';

import './App.scss';


function App() {
  const { deviceType } = useContext(ViewportContext);

  return (
    <div className="app">
      <Helmet defaultTitle="Google news" />
      {deviceType === DeviceTypeEnum.TABLET ? <p>tablet</p> : <p>desktop</p>}
    </div>
  );
}


export default App;