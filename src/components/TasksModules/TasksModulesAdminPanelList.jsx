import React, { useLayoutEffect, useState } from 'react';
import information from '../../images/adminPanel';
import TasksModulesAdminPanelItem from './TasksModulesAdminPanelItem';

const TasksModulesAdminPanelList = () => {

    return (
        <div className="admin-panel">
            <h3>Панель администрирования с широким функционалом и гибкими настройками</h3>
            <div className='admin-panel__list'>
                {
                    information.map((props, i) => <TasksModulesAdminPanelItem key={i} {...props} />)
                }
            </div>
        </div>
    )
}

export default TasksModulesAdminPanelList