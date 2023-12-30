import React from 'react'
import './Crousel3.css'
import pic1 from './pic1.jpg'
import pic2 from './pic2.jpg'
import pic3 from './pic3.jpg'
import pic4 from './pic4.jpg'
import pic5 from './pic5.jpg'
import pic6 from './pic6.jpg'
import pic7 from './pic7.jpg'
import pic8 from './pic8.jpg'

import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import { motion } from 'framer-motion'

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Pagination, Autoplay , Navigation } from 'swiper/modules';

function Crousel3() {


  return (
    <motion.div
    initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1.5, delay: 0.8 }}
  viewport={{ once: true }}
    className="ccrousel3">
        <div className='cr3prev'>&#11164;</div>
        <Swiper
        modules={[EffectCube,Autoplay,Navigation,Pagination]}
        loop={true}
        autoplay={{ 
            delay: 2000, 
            disableOnInteraction: false
          }}
          navigation={{
            nextEl: '.cr3next',
            prevEl: '.cr3prev'
          }}
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={pic1} id='cr3glow' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic2} id='cr3glow' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic3} id='cr3glow' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic4} id='cr3glow' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic5} id='cr3glow' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic6} id='cr3glow' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic7} id='cr3glow' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic8} id='cr3glow' />
        </SwiperSlide>
      </Swiper>

      <div className="cr3next">&#11166;</div>
    </motion.div>
  )
}

export default Crousel3