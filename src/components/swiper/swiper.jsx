import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './swiperStyle.css';

// import required modules
import { EffectCards } from 'swiper/modules';

export default function SwiperComp() {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>It was a <br/> challenging year</SwiperSlide>
        <SwiperSlide>Dreams have come true </SwiperSlide>
        <SwiperSlide>And others were born</SwiperSlide>
        <SwiperSlide>And others have been changed to suit the circumstances that God wanted</SwiperSlide>
        <SwiperSlide>I have changed a lot from before</SwiperSlide>
        <SwiperSlide>And that is what makes me very happy</SwiperSlide>
        <SwiperSlide>within 25 years</SwiperSlide>
        <SwiperSlide>I was never a perfect person</SwiperSlide>
        <SwiperSlide> but I was changing for the better every time</SwiperSlide>
        <SwiperSlide>So, Welcome to new Challenges &hearts;<br/>Dreams &hearts;<br/> Opportunities &hearts;</SwiperSlide>
        <SwiperSlide>Thank you all for being in my life<br/>&hearts; &hearts; &hearts;  </SwiperSlide>
      </Swiper>
    </>
  );
}
