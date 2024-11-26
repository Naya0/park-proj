import React from 'react';


import { APP_DIGNITY } from '../units/constants';
import imageApp from '../../images/tasks-module-app.png';
import AppIconList from '../AppIcon/AppIconList';
import useSize from '../../hooks/useSize';

const TaskModulesParkingApp = () => {
    const windowSize = useSize();

    return (
        <div className="parking-offer__app">
            <div
                className="parking-offer__app-image"
                style={
                    windowSize > 600
                        ? { background: `url("${imageApp}") 65px 100px / contain no-repeat` }
                        : { background: `url("${imageApp}") center 150px  / contain no-repeat` }
                }>

                <div className="parking-offer__app-information">
                    <p className="title">Удобное приложение</p>
                    <div className="list-dignity">
                        {
                            APP_DIGNITY.map((item, i) => (
                                <p key={i} className="list-dignity__item">{item}</p>
                            ))
                        }
                    </div>
                </div>

                <AppIconList />
            </div>
        </div>
    )
}

export default TaskModulesParkingApp