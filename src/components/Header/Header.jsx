import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { MENU } from '../units/constants';
import Icon from '../Icon/Icon';
import ScrollAnimation from 'react-animate-on-scroll';


const Header = () => {
  const [phoneMenuisOpen, setPhoneMenuisOpen] = useState(true);

  const phoneMenu = useRef(null);

  function handleScrollFromMenu(sectionName) {
    let elem = document.querySelector(`.${sectionName}`);
    elem.scrollIntoView({ block: "start", behavior: "smooth" })
    document.documentElement.clientWidth < 730 && phoneMenuIsOpenHandel();
  }

  function phoneMenuIsOpenHandel() {
    setPhoneMenuisOpen(prev => !prev);
    console.log('close')
  }

  return (
    <div className="container">
      <div ref={phoneMenu} className={`phone-menu__content ${phoneMenuisOpen ? 'closeOpenModal' : ''}`}>
        <nav className='phone-menu__nav'>
          <div className='phone-menu__header'>
            <div className="logo">
              logo.parking
            </div>
            <div onClick={phoneMenuIsOpenHandel}> <Icon name='close' /></div>
          </div>

          {
            MENU.map((item, key) => (
              // <Link key={item.link} to={`/${item.link}`}>{item.title}</Link>
              <a href={`#${item.link}`} key={key} onClick={(e) => { handleScrollFromMenu(item.link) }}>{item.title}</a>

            ))
          }
        </nav>
        <div className="phone-menu__footer">
          <p>Оператор автоматизированных платных парковок</p>
          <div className="icons">
            <a href="#">
              <Icon name='telegram' />
            </a>
            <a href="#">
              <Icon name='whatsapp' />
            </a>
          </div>
        </div>
      </div>
      <header className='header'>
        <div className="logo">
          <Icon name="map" />
          logo
        </div>
        <nav className='desktop-menu__nav'>
          {
            MENU.map((item, key) => (
              // <button onClick={() => handleScrollFromMenu(item.link)}>{item.title}</button>
              // <Link key={key} to={`#${item.link}`} >{item.title}</Link>
              <a href={`#${item.link}`} key={key} onClick={(e) => { handleScrollFromMenu(item.link) }}>{item.title}</a>

            ))
          }
        </nav>
        <div className="header_contacts">
          <a href="#">
            <Icon name='telegram' />
          </a>
          <a href="#">
            <Icon name='whatsapp' />
          </a>
          <a href="tel:55555555555">555-555-5555</a>
        </div>
        <div className="header_phone-menu">
          <div onClick={phoneMenuIsOpenHandel}>
            <Icon name='menu' />
          </div>

        </div>
      </header >
    </div >

  )
}

export default Header