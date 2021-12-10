import React, { useRef } from 'react';
import SwiperCore, { EffectFade, Mousewheel, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { Welcome } from '../home-section';

SwiperCore.use([EffectFade, Mousewheel, Pagination])
function Home() {
    const swiperOptions = useRef({
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 0,
        mousewheel: true,
        pagination: true,
        effect: 'fade',
        speed: 1000
    })
    return (
        <>
            <Swiper {...swiperOptions.current}>
                <SwiperSlide>
                    {({isActive}) => <Welcome isActive={isActive} /> }
                </SwiperSlide>
                <SwiperSlide>
                    slide2
                </SwiperSlide>
            </Swiper>   
        </>
    )
}

export default Home