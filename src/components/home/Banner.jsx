import React from 'react'
import {kashful_1, kashful_2, kashful_3,dhaki} from '../../assets/banner/index'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/effect-coverflow';
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";

function Banner() {
  
    const sliderData = [
        { id: 1, title: "Mahalaya", image: kashful_1 },
        { id: 2, title: "Maha Panchami", image: kashful_2 },
        { id: 3, title: "Maha Shashthi", image: kashful_3 },
        { id: 4, title: "Mahalaya", image: kashful_1 },
        { id: 5, title: "Maha Panchami", image: kashful_2 },
        { id: 6, title: "Maha Shashthi", image: kashful_3 },
      ];

    

  return (
    <>
    <div className='w-full max-w-7xl  mx-auto overflow-hidden flex flex-col items-center justify-center py-[4rem]'>
        
        <div className='flex flex-col items-center gap-3'>
            <img src={dhaki} alt="dhakh" width={100} />
            <h1 className='text-3xl text-primary poppins-bold '>Image Gallery</h1>
        </div>
       
        <div className="w-full py-10 flex items-center justify-center px-6">
        <Swiper className="custom-nav-banner rounded-lg"
            modules={[Autoplay,Navigation, EffectCoverflow]}
            spaceBetween={20}
          
            // autoplay={{
            // delay: 2500,            
            // disableOnInteraction: false,
            // }}

            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
            }}

            speed={1000} 
            breakpoints={{
            400: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            1000: { slidesPerView: 3 },
            }}
            navigation={true}
            loop={true}
        >
            {sliderData.map((card) => (
            <SwiperSlide key={card.id}>             
                <div>               
                    <img
                        src={card.image}
                        alt={card.title}    
                    />         

                </div>
            </SwiperSlide>
            ))}
        </Swiper>
        </div>

    </div>   
    </>
    
  )
}

export default Banner