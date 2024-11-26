import React from 'react';
import FooterContacts from './FooterContacts';
import ButtonMeassagers from '../Button/ButtonMeassagers';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import AppIconList from '../AppIcon/AppIconList';

const FooterContactinformation = () => {
    return (
        <div className="footer__contact-information">
            <span className='logo'>logo</span>
            <FooterContacts />
            <div className='footer__messangers'>
                <ButtonMeassagers link="#" name="telegram" />
                <ButtonMeassagers link="#" name="whatsapp" />
            </div>
            <div className="footer__content-buttons">
                <Button> <Icon name='user-headset' /> Получить консультацию</Button>
                <Button> <Icon name='payment-pos' /> Рассчитать стоимость </Button>
            </div>
            <AppIconList />
        </div>
    )
}

export default FooterContactinformation