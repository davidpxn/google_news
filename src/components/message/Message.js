import React from 'react';

import { ReactComponent as IconEyes } from '../../resources/svg/eyes.svg';

import './Message.scss';


function Message(props) {
  return (
    <div className="message">
      <IconEyes className="message__icon" />
      <h2 className="message__text">{props.text}</h2>
    </div>
  );
}


export default Message;