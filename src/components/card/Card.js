  
import React from 'react';

import './Card.scss';


function Card(props) {
  const {
    title,
    imgLink,
    contextLink,
  } = props;

  return (
    <a className="card" href={contextLink} target="_blank" rel="noopener noreferrer">
      <img className="card__img" src={imgLink} alt={title} />
      <h2 className="card__title">{title}</h2>
    </a>
  );
}


export default Card;