import React from 'react'
import Icon from '../Icon/Icon'

const ButtonMeassagers = ({link, name}) => {
  return (
    <a href="#" className='button-messager'>
        <div className="button-messager__container">
            <Icon name={name}/>
            <span>{name}</span>
        </div>
    </a>
  )
}

export default ButtonMeassagers