import React from 'react';

import Button from '../Button/Button';
import Icon from '../Icon/Icon';

const AppIcon = ({title, subtitle, logo}) => {
    return (
        <Button >
            <div className='content'>
                <Icon name={logo} />
                <div className="buttons-title">
                    <span className='subtitle'>{subtitle}</span>
                    <span className='title'>{title}</span>
                </div>
            </div>
        </Button>
    )
}

export default AppIcon