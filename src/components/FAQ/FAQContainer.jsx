import React, { useEffect, useState } from 'react';

import { FAQ } from '../units/constants';

import FAQItem from './FAQItem';

const FAQContainer = () => {
  //   const [isItemActive, setIsItemActive] = useState(false);

  //   useEffect(() => {
  //     function handleClick(e) {
  //         if (e.target.className.includes('faq_item')) {
  //             // e.target.classList.toggle('active')
  //             setIsItemActive((prev) => !prev)
  //             // setIsItemActive()
  //         } 
  //     }

  //     document.addEventListener('mousedown', handleClick);

  //     return () => {
  //         document.removeEventListener('mousedown', handleClick);
  //     }

  // })

  // function stateItemClass(e) {
  //     if(e.target.className == 'faq_item active') {
  //       return true;
  //     } else {
  //       return false
  //     }
  // }

  return (
    <section className="faq">
      <div className="container">
        <h3>FAQ</h3>
        {
          FAQ.map((item, index) => (

            <FAQItem key={index} title={item.question} description={item.answer} />

          ))
        }
      </div>
    </section>
  )
}

export default FAQContainer