import React from 'react';

import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import InputPhone from '../Form/InputPhone';
import InputText from '../Form/InputText';
import InputCheckbox from '../Form/InputCheckbox';


const TasksModulesForm = () => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-inputs">
                <InputText placeholder='Ваше имя' name='name' />
                <InputPhone />
            </div>
            <div className='form-communication'>
                <p className='title'>Как с вами связаться?</p>
                <div className="form-communication__list">
                    <InputCheckbox name='phone' label='По телефону' />
                    <InputCheckbox name='messanger' label='В мессенджере' />
                </div>
            </div>
            <Button> <Icon name='user-headset' /> Получить консультацию</Button>
            <p className="privacy-policy">
                Отправляя заявку, вы даете согласие на обработку своих персональных данных в соответствии с 
                <a className='privacy-link' href='#'>политикой конфиденциальности</a>
                </p>
        </form>
    )
}

export default TasksModulesForm