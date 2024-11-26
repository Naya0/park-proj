import React from 'react';

import Icon from '../Icon/Icon';

const AdvantagesItem = ({icon, title, description}) => {
  return (
    <div className="advantages-item">
      <div className="advantages-item__icon">
        <Icon name={icon} />
      </div>
      <p className="advantages-item__title">{title}</p>
      <p className="advantages-item__description">{description}</p>
    </div>
  )
}

export default AdvantagesItem
