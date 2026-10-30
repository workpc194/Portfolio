import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import Card from './Card';
import { useSelector } from 'react-redux';

const Projects = () => {

  const { cards } = useSelector(state => state.data)


  return (
    <>
      <h2 className='font-asgard text-5xl absolute p-10 project-h2'>Projects</h2>
      <div id='project' className='w-full h-screen flex justify-center items-center'>
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Card elem={cards[0]} />
          </SwiperSlide>
          <SwiperSlide>
            <Card elem={cards[1]} />
          </SwiperSlide>
          <SwiperSlide>
            <Card elem={cards[2]} />
          </SwiperSlide>
          <SwiperSlide>
            <Card elem={cards[3]} />
          </SwiperSlide>
          <SwiperSlide>
            <Card elem={cards[4]} />
          </SwiperSlide>
          <SwiperSlide>
            <Card elem={cards[5]} />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default Projects