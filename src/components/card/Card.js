import React, { useContext } from 'react';

import ViewportContext, { DeviceTypeEnum } from '../../contexts/ViewportContext';

import { ReactComponent as IconArrow } from '../../resources/svg/arrow.svg';
import PlaceholderImage from '../../resources/images/placeholder.png';
import './Card.scss';


function Card(props) {
  const {
    title,
    imgLink,
    websiteLink,
    contextLink,
  } = props;

  const { deviceType } = useContext(ViewportContext);


  const titleElement = (
    <React.Fragment>
      <h3 className="card__website">{websiteLink}</h3>
      <h2 className="card__title">{title}</h2>
    </React.Fragment>
  );

  return (
    <div className="card">
      <a className="card__link" href={contextLink} target="_blank" rel="noopener noreferrer">
        <div className="card__img-container">
          <img className="card__img" src={imgLink || PlaceholderImage} alt={title} />
          {deviceType === DeviceTypeEnum.DESKTOP && (
            <React.Fragment>
              {titleElement}
              <IconArrow className="card__arrow" />
            </React.Fragment>
          )}
        </div>
        {deviceType !== DeviceTypeEnum.DESKTOP && titleElement}
      </a>
    </div>
  );
}


export default Card;