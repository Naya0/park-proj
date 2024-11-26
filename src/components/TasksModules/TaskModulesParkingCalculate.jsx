import React from 'react';

import { PARKING_OFFER_LIST } from '../units/constants';


const TaskModulesParkingCalculate = () => {
    return (
        <div className="parking-offer__calculation">
            <p className="parking-offer__calculation-title">
                Парковка от Park-in.me — это экономия до 50% на этапе установки оборудования и до 20% на ежемесячном обслуживании
            </p>
            <div className="parking-offer__calculation-list">
                {
                    PARKING_OFFER_LIST.map((item) => (
                        <div key={item.title} className="parking-offer__calculation-list-item">
                            <p className="title">{item.title}</p>
                            <span className="offer">{item.offer}</span>
                        </div>
                    ))
                }
            </div>

            <div className="parking-offer__calculation-price">
                <div className='sum'>400 000 ₽</div>
                <p className="description">Средний ежемесячный доход парковки на ±100 машиномест</p>
            </div>

            <p className="parking-offer__calculation-access">
                Доступна интеграция с существующим оборудованием
            </p>
        </div>
    )
}

export default TaskModulesParkingCalculate