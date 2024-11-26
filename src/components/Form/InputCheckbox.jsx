import React, { useState } from 'react'
import Icon from '../Icon/Icon'

const InputCheckbox = ({name, label}) => {
    const [check, setCheck] = useState();

    return (
        <div className="checkbox">
            <div className='checkbox-content' >
                <div className={`icon-container ${check && 'active'}`} >
                    <Icon name='checkbox' />
                </div>
                <input type='checkbox' onChange={() => setCheck((prev) => !prev)} id={`check-${name}`} />
            </div>
            <label htmlFor="check-phone">{label}</label>
        </div>

    )
}

export default InputCheckbox