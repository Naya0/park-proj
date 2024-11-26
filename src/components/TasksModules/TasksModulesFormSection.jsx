import React from 'react'
import TasksModulesForm from './TasksModulesForm';
import imageSity from '../../images/sity-bakground.png';
import ButtonMeassagers from '../Button/ButtonMeassagers';

const TasksModulesFormSection = () => {
    return (
        <div className="form-section" style={{ background: `url("${imageSity}") center / cover no-repeat`}}>
            <div className="container form-container">
                <div className="information">
                    <p className="title">Лучше один раз увидеть. Запишитесь на экскурсию-консультацию с официальным представителем Park-in.me</p>
                    <span className="text">Сотрудники call-центра сейчас онлайн</span>
                </div>
                <div className="form-content">
                    <TasksModulesForm />
                    <div className="form-content__messangers">
                        <ButtonMeassagers link="#" name="telegram"/>
                        <ButtonMeassagers link="#" name="whatsapp"/>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default TasksModulesFormSection