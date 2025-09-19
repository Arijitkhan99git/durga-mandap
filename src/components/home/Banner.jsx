import React from 'react'
import {kashful_1, kashful_2, kashful_3, dhaki} from '../../assets/banner/index'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

function Banner() {
  
    const sliderData = [
        { id: 1, title: "Mahalaya", image: 'https://res.cloudinary.com/dsi5vhuqh/image/upload/v1758276873/IMG-20250825-WA0057_fkp54n.jpg' },
        { id: 2, title: "Maha Panchami", image: 'https://res.cloudinary.com/dsi5vhuqh/image/upload/v1758275964/IMG-20250825-WA0007_ntybsq.jpg' },
        { id: 3, title: "Maha Shashthi", image: 'https://res.cloudinary.com/dsi5vhuqh/image/upload/v1758275970/DSC_4531_1_b6rmgl.jpg' },
        { id: 4, title: "Mahalaya", image: 'https://res.cloudinary.com/dsi5vhuqh/image/upload/v1758277502/DSC_4875_1_pkrq7o.jpg' },
        { id: 5, title: "Maha Panchami", image: 'https://res.cloudinary.com/dsi5vhuqh/image/upload/v1758276057/DSC_4488_k4h2zf.jpg' }
      ];

    

  return (
    <div className='w-full bg-gray-200 '>
    <div className='w-full max-w-7xl  mx-auto overflow-hidden flex flex-col items-center justify-center py-[2rem] '>
        
        <div className='flex flex-col items-center '>
            <img src={dhaki} alt="dhakh" className='w-[80px] lg:w-[100px]' />
            <h1 className='text-xl md:text-3xl text-primary poppins-bold '>Image Gallery</h1>
        </div>
       
        <div className="w-full py-12 flex items-center justify-center px-6 ">
        <Swiper className="custom-nav-banner rounded-lg"
            modules={[Navigation, Pagination]}
            spaceBetween={20}
          
            // autoplay={{
            // delay: 2500,            
            // disableOnInteraction: false,
            // }}

           
            grabCursor={true}
            centeredSlides={true}
           
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
    </div>
    
  )
}

export default Banner