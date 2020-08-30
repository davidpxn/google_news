  
import React from 'react';

import { ReactComponent as IconDot } from '../../resources/svg/dot.svg'
import './Loading.scss';


function Loading() {
  return (
    <div className="loading">
      <IconDot className="loading__icon"/>
      <IconDot className="loading__icon"/>
      <IconDot className="loading__icon"/>
    </div>
  );
}


export default Loading;