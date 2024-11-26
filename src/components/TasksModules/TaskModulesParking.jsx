import React from 'react';
import TaskModulesParkingApp from './TaskModulesParkingApp';
import TaskModulesParkingCalculate from './TaskModulesParkingCalculate';

const TaskModulesParking = () => {


    return (
        <section className='tasks-module__parking'>
            <h3 className='parking-title'>Платные парковки</h3>
            <p className='parking-description'>Автостоянка, управляемая цифровой автоматизированной системой Park-in.me — это комфорт для автовладельцев и выгода для собственника/арендатора земельного участка</p>
            <div className="parking-offer">
                <TaskModulesParkingCalculate />
                <TaskModulesParkingApp />
            </div>
        </section>
    )
}

export default TaskModulesParking