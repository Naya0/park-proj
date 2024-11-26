import React from 'react'

const FooterContacts = () => {
    return (
        <div className="footer__contacts">
            <div className="contacts__phone">
                <span className='title'>телефон</span>
                <span className='value'>+7(895)-456-45-77</span>
            </div>
            <div className="contacts_email">
                <span className='title'>электронная почта</span>
                <span className='value'>example@mail.ru</span>
            </div>
        </div>
    )
}

export default FooterContacts