import React from 'react';

import Button from '../Button/Button';
import Icon from '../Icon/Icon';

import { STATISTICS } from '../units/constants';
import AppIcon from '../AppIcon/AppIcon';
import AppIconList from '../AppIcon/AppIconList';

const HomeBanner = () => {
    return (
        <section className="home-banner">
            <div className="container">
                <div className="home-banner__content">
                    <div className="home-banner__content-text">
                        <h1>Оператор автоматизированных платных парковок</h1>
                        <p className='description'>
                            Цифровая система управления парковочными пространствами.
                            Монтаж, установка, настройка оборудования и обслуживание под ключ
                        </p>
                        <div className="home-banner__content-buttons">
                            <Button> <Icon name='user-headset' /> Получить консультацию</Button>
                            <Button> <Icon name='payment-pos' /> Рассчитать стоимость </Button>
                        </div>
                        <div className="home-banner__content-statistics">

                            {STATISTICS.map(({ title, count }) => (
                                <div key={title} className="home-banner__statistic-data">
                                    <span className='count'>{count}</span>
                                    <p className='title'>{title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="home-banner__content-image">
                        <AppIconList />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeBanner