import React from 'react';

import PlaceholderImage from '../../resources/images/placeholder.png';
import './Card.scss';


function Card(props) {
  const {
    title,
    imgLink,
    contextLink,
  } = props;

  return (
    <div className="card">
      <a className="card__link" href={contextLink} target="_blank" rel="noopener noreferrer">
        <img className="card__img" src={imgLink || PlaceholderImage} alt={title} />
        <h2 className="card__title">{title}</h2>
      </a>
    </div>
  );
}


export default Card;