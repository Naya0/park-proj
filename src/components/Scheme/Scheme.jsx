import React from 'react';
import scheme from '../../images/scheme/scheme.svg';

const Scheme = ({ name }) => {
    return (
        <svg className={`scheme scheme-${name}`}>
            <use xlinkHref={`${scheme}#${name}`} >

            </use>
        </svg>
    )
}

export default Scheme