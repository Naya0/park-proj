import React from 'react';
import { MENU } from '../units/constants';
import { Link } from 'react-router-dom';

const FooterNavigation = () => {
    return (
        <div className="footer-navigation">
            <p className='title'>Навигация</p>
            <div className="footer-navigation__links">
                    <a href="#">Наверх</a>
                {
                    MENU.map((item, key) => (
                        <Link key={key} to={`/${item.link}`} >{item.title}</Link>
                    ))
                }
            </div>
        </div>
    )
}

export default FooterNavigation