import React, { useEffect, useRef, useState } from 'react';

import { WORKING_PROMPT } from '../units/constants';
import SchemePromptModal from './SchemePromptModal';
import Icon from '../Icon/Icon';

import imageEntry from '../../images/scheme/prompt-entry.png';
import imageDeparture from '../../images/scheme/prompt-departure.png';
import useOutsideAlerter from '../../hooks/useOutsideAlerter';

const SchemePrompt = () => {
    const workingPrompt = WORKING_PROMPT;

    const outsideAlerterRef = useOutsideAlerter(() => {
        const modal = document.querySelectorAll(`.scheme-prompt__modal`);
        for(let i of modal) {
            i.classList.add('turn-off')
        }
    });

    const handleClick = (e) => {
        if (e.target.nextElementSibling) {
            e.target.nextElementSibling.classList.toggle('turn-off');
        } else {
            e.target.parentElement.nextElementSibling.classList.toggle('turn-off');
        }
    }


    return (
        <div className='scheme-prompt__container'>
            <div className="scheme-prompt__list">
                <div className={`scheme-prompt__item `}>
                    <div className="scheme-prompt__back" style={{ background: `center / cover url('${imageEntry}')` }}>
                        <div className="scheme-prompt__icon" ref={outsideAlerterRef} onClick={handleClick}>
                            <Icon name="plus" />
                        </div>
                        <SchemePromptModal description={workingPrompt[0]} />

                    </div>

                </div>
                <div className={`scheme-prompt__item`}>
                    <div className="scheme-prompt__back" style={{ background: `center / cover url('${imageDeparture}')` }}>
                        <div className="scheme-prompt__icon" ref={outsideAlerterRef} onClick={handleClick} >
                            <Icon name="plus" />
                        </div>
                        <SchemePromptModal description={workingPrompt[1]} />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SchemePrompt