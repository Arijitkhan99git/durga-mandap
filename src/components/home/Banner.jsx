import React from 'react'
import {kashful_1, kashful_2, kashful_3, dhaki} from '../../assets/banner/index'
import { useNavigate } from 'react-router-dom';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

function Banner() {
  
    const navigate = useNavigate()

    const gotoGallery =()=>{
        navigate('/gallery')
    }

    const sliderData = [
        { id: 1, title: "Mahalaya", image: 'https://res.cloudinary.com/dsi5vhuqh/image/upload/v1758283397/Durga_Maa_Full_frame_g7epf2.jpg' },
        { id: 2, title: "Maha Panchami", image: 'https://res.cloudinary.com/dsi5vhuqh/image/upload/v1758281524/IMG-20250825-WA0007_kkip83.jpg' },
        { id: 3, title: "Maha Shashthi", image: 'https://res.cloudinary.com/dsi5vhuqh/image/upload/v1758275970/DSC_4531_1_b6rmgl.jpg' },
        { id: 4, title: "Mahalaya", image: 'https://res.cloudinary.com/dsi5vhuqh/image/upload/v1758277502/DSC_4875_1_pkrq7o.jpg' },
        { id: 5, title: "Maha Panchami", image: 'https://res.cloudinary.com/dsi5vhuqh/image/upload/v1758276057/DSC_4488_k4h2zf.jpg' }
      ];

    

  return (
    <div className='w-full bg-gray-200 '>
    <div className='w-full max-w-7xl  mx-auto overflow-hidden flex flex-col  py-[2rem] px-8 md:px-12'>
        
        <div className='flex flex-col items-center '>
            <img src={dhaki} alt="dhakh" className='w-[80px] lg:w-[100px]' />
            <h1 className='text-xl md:text-3xl text-primary poppins-bold '>Image Gallery</h1>
        </div>
       
        <div className="w-full pt-12  flex items-center justify-center  ">
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
                        className='rounded-lg'
                    />         

                </div>
            </SwiperSlide>
            ))}
        </Swiper>
        </div>
        
        <div className='flex justify-end pt-4 md:pt-8 pb-5 md:pb-8'>
            <button onClick={gotoGallery}
            className='px-2 py-1 shadow-lg border border-gray-300 bg-gradient-to-r from-orange-200 to-red-200 text-sm md:text-base font-semibold text-primary rounded-md'>View more</button>
        </div>

    </div>   
    </div>
    
  )
}

export default Banner