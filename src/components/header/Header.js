import React from 'react';
import { useHistory } from 'react-router-dom';

import './Header.scss';


function Header() {
  const history = useHistory();
  
  return (
    <header className="header" onClick={() => history.replace('/')}>
      <h1 className="header__title">Google</h1>
      <h1 className="header__subtitle">Fréttir</h1>
    </header>
  );
}


export default Header;