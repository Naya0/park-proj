import React, { useRef } from 'react';

import useSize from '../../hooks/useSize';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';


import { ADVANTAGES } from '../units/constants';

import AdvantagesItem from './AdvantagesItem';
import Icon from '../Icon/Icon';



const SectionAdvantages = () => {

    const windowSize = useSize();

    return (
        <section className='section-advantages'>
            <div className="container">
                <h2>Преимущества нашей системы</h2>
                {
                windowSize < 600 && 
                <div className='advantages-arrow'> <Icon name="arrow" /></div>
                }

                <div className="advantages">
                    {
                        windowSize < 600 ?
                            
                                <Swiper
                                    spaceBetween={24}
                                    slidesPerView={1.5}
                                    className='advantages-swiper'
                                    navigation modules={[Navigation]}
                                >
                                    {
                                        ADVANTAGES.map((advantage) => (
                                            <SwiperSlide className='advantage-item__slide' key={advantage.title}>
                                                <AdvantagesItem {...advantage} />
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                        
                            :

                            ADVANTAGES.map((advantage) => (
                                <AdvantagesItem {...advantage} key={advantage.title} />
                            ))


                    }
                </div>
            </div>
        </section>
    )
}

export default SectionAdvantages