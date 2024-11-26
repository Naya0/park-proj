import React, { useEffect, useState, useRef } from 'react';
import Icon from '../Icon/Icon';

const FAQItem = ({ title, description }) => {
    function clickAccordionItem() {
        function handleClick(e) {
            document.removeEventListener('click', handleClick);

            console.log(e.target)

            if (e.target.className.includes('faq_item')) {
                e.target.classList.toggle('active');
            }
        }

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        }

    }



    return (
        <div className={`faq_item`} onClick={clickAccordionItem} >
            <div className='header'>
                <h4 className='title'>{title}</h4>
                <div className={`faq__icon-container `} >
                    <Icon name='close' />
                </div>
            </div>
            <p className={`description `}>{description}</p>
        </div>
    )
}

export default FAQItem