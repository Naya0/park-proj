import React, { useState } from 'react'

const SchemeItem = ({ id, type, description, detail }) => {

  const handler = (detail, status, id) => {
    if (status == "over") {
      let elem = document.querySelector(`.scheme-${detail}`);

      id == 3 && elem.classList.add('scheme__active-green');
      id == 5 && document.querySelector(`.scheme-pillar`).classList.add('scheme__active');
      id == 6 && elem.classList.add('scheme__active-purple');

      elem.classList.add('scheme__active');
    } else {
      id == 3 && document.querySelector(`.scheme-${detail}`).classList.remove('scheme__active-green');
      id == 6 && document.querySelector(`.scheme-${detail}`).classList.remove('scheme__active-purple');
      id == 5 && document.querySelector(`.scheme-pillar`).classList.remove('scheme__active');

      document.querySelector(`.scheme-${detail}`).classList.remove('scheme__active');
    }
  }



  return (
    <div className='scheme-item' data-detail={detail} onMouseOver={() => handler(detail, 'over', id) } onMouseOut={() => handler(detail, 'out', id)}>
      <div className={'scheme-item__number ' + type}>{id}</div>
      <p className='scheme-item__description'>{description}</p>
    </div>
  )
}

export default SchemeItem