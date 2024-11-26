import React from 'react';

import { DOWNLOADS } from '../units/constants';
import AppIcon from '../AppIcon/AppIcon';

const AppIconList = () => {
    return (
        <div className="buttons-app-download">
            {
                DOWNLOADS.map((props) => (
                    <AppIcon key={props.title} {...props} />
                ))}
        </div>
    )
}

export default AppIconList