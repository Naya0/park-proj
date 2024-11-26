import React from 'react'
import { WORKING } from '../units/constants';
import SchemeItem from './SchemeItem';

const SchemeColumn = ({ type, title }) => {

    const workingList = WORKING.filter((item) => {
        return item.type == type;
    })

    return (
        <div className={`scheme-list__column scheme-list__${type}`}>
            <span className="scheme-list__title">{title}</span>
            <div className="scheme-list__content">
                {
                    workingList.map((props, i) => (
                        <SchemeItem key={props.id} i={i} {...props} />
                    ))
                }
            </div>
        </div>
    )
}

export default SchemeColumn