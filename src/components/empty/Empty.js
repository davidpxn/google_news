import React from 'react';

import { ReactComponent as IconEyes } from '../../resources/svg/eyes.svg';

import './Empty.scss';


function Empty() {
  return (
    <div className="empty">
      <IconEyes className="empty__icon" />
      <h2 className="empty__message">Leitaðu af íslenskum fréttamyndum hér að ofan</h2>
    </div>
  );
}


export default Empty;