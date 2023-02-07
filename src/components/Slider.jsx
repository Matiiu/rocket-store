import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



import { Autoplay, Pagination, Navigation } from "swiper";


export const Slider = ({ imagenes }) => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {imagenes.map((imagen, i) => (
                <SwiperSlide key={i}> <img src={imagen} alt="" /></SwiperSlide>
                ))}
               
            </Swiper>
        </>
    )
}


