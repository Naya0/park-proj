import React from 'react';

import SchemeCart from '../Scheme/SchemeCart';
import SchemeItem from '../Scheme/SchemeItem';

import { WORKING } from '../units/constants';
import SchemeColumn from '../Scheme/SchemeColumn';
import SchemePrompt from '../Scheme/SchemePrompt';

const WorkingSection = () => {
    const workingList = WORKING;

    return (
        <section className="working-section">
            <div className="container">
                <div className='title_container'>
                    <h2>Как это работает?</h2>
                    <div className='prompt'>
                        <span>Наведи на пункт списка </span>
                        <div>&gt;</div>
                    </div>
                </div>
                <SchemePrompt />

                <div className="scheme" >
                    <SchemeCart />
                    <SchemeColumn type='entry' title='Въезд' />
                    <SchemeColumn type='departure' title='Выезд' />
                </div>
            </div>
        </section>
    )
}

export default WorkingSection