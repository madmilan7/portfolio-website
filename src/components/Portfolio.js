import React from 'react';
import './Portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// images
import sidebar from '../assets/images/sidebar.png';
import ecommerce from '../assets/images/ecommerce.png';
import hoc from '../assets/images/hoc.png';
import musicApp from '../assets/images/musicapp.png';

const Portfolio = () => {
    return (
        <div className='portfolio'>
            {/* header */}
            <span>Recent Projects</span>
            <span>Portfolio</span>
            {/* swiper */}
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                grabCursor={true}
                className='portfolio__slider'
            >
                <SwiperSlide>
                    <img src={sidebar} alt='sidebar' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={ecommerce} alt='ecommerce' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={hoc} alt='hoc' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={musicApp} alt='musicApp' />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Portfolio;