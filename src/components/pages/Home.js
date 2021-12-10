import React, { useRef } from 'react';
import SwiperCore, { EffectFade, Mousewheel, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { Champion, ChampionDetail, Welcome } from '../home-section';
import { championsData } from '../../assets/dummy'

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
                    {({ isActive }) => <Welcome isActive={isActive} />}
                </SwiperSlide>
                <SwiperSlide>
                    {({ isActive }) => <Champion isActive={isActive} />}
                </SwiperSlide>
            </Swiper>
            {
                championsData.map((item, index) =>(
                    <ChampionDetail
                        id={index}
                        item={item}
                        key={index}
                    />
                ))
            }
        </>
    )
}

export default Home