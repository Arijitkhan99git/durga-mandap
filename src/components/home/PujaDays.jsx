import React from 'react';
import { durgaMaa } from '../../assets/banner/index';
import {  swan,  durgaMaaEyes, durga,  lion,  conchShell,  lotusFlower,  arrows,  peacock,  Dhunuchi} from '../../assets/pujaDaysIcons/index';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Autoplay } from "swiper/modules";

function PujaDays() {
  const sliderData = [
    { id: 1, day: "Mahalaya", date: "21.09.2025", image: durgaMaaEyes },
    { id: 2, day: "Maha Panchami", date: "27.09.2025", image: conchShell },
    { id: 3, day: "Maha Shashthi", date: "28.09.2025", image: lion },
    { id: 4, day: "Maha Saptami", date: "29.09.2025", image: durga },
    { id: 5, day: "Maha Ashtami", date: "30.09.2025", image: lotusFlower },
    { id: 6, day: "Maha Nabami", date: "01.10.2025", image: peacock },
    { id: 7, day: "Vijaya Dashami", date: "02.10.2025", image: Dhunuchi },
  ];

  return (
    <>
      <div className="w-full max-w-7xl flex flex-col justify-center items-center mx-auto py-[1rem] md:py-[2rem]  px-6 text-center ">
        <div className="w-full text-primary flex flex-col items-center md:gap-2 uppercase">
          <img src={durgaMaa} alt="DurgaMaa" className="w-[8rem]" />
          <h4 className="poppins-medium text-xl tracking-wider">Durga Puja Days</h4>
          <h1 className="text-2xl md:text-3xl poppins-bold tracking-wider">Durga Puja 2025</h1>

          <div className="w-full py-10">
            <Swiper className="custom-nav"
              modules={[Autoplay,Navigation]}
              spaceBetween={20}
              centeredSlides={true}
               autoplay={{
                delay: 2500,            
                disableOnInteraction: false,
              }}
              speed={1000} 
              breakpoints={{
                400: { slidesPerView: 1 },
                600: { slidesPerView: 2 },
                800: { slidesPerView: 3 },
              }}
               navigation={true}
              loop={true}
            >
              {sliderData.map((card) => (
                <SwiperSlide key={card.id}>
                  <div className='flex justify-center'>
                    <div className=" flex flex-col lg:flex-row max-w-2xs items-center  lg:justify-evenly gap-4">
                      <div>
                          <img
                            src={card.image}
                            alt={card.day}
                            
                            className='w-[60px]'
                          />
                      </div>
                      
                      <div className='text-center'>
                          <h3 className="text-lg font-semibold text-red-600">{card.day}</h3>
                          <h3 className="text-lg font-semibold">{card.date}</h3>
                      </div>
                      

                    </div>
                  </div>  
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default PujaDays;
