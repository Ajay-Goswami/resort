import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../css/OurRoomsCarousal.css';

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';

import imgg1 from "../images/CarousalImages/1-1.jpg"
import imgg2 from "../images/CarousalImages/1.jpg"
import imgg3 from "../images/CarousalImages/2-1.jpg"
import imgg4 from "../images/CarousalImages/2.jpg"
import imgg5 from "../images/CarousalImages/8.jpg"
import imgg6 from "../images/CarousalImages/11.jpg"
import imgg7 from "../images/CarousalImages/12.jpg"
import imgg8 from "../images/CarousalImages/14.jpg"

export default function OurRoomsCarousal() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
        }}
        scrollbar={false}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={imgg1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgg2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgg3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgg4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgg5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgg6} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgg7} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgg8} />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src="https://cdn.magloft.com/github/swiper/images/page-009.jpg" />
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}
