import React from 'react'
import { dhaki} from '../../assets/banner/index'
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
    <div className='w-full bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50'>
    <div className='w-full max-w-7xl mx-auto overflow-hidden flex flex-col py-[3rem] px-8 md:px-12'>
        
        {/* Enhanced Header Section */}
        <div className='flex flex-col items-center mb-8'>
            <div className='relative mb-4'>
                <img src={dhaki} alt="Dhaki - Traditional Drummer" className='w-[100px] lg:w-[120px] drop-shadow-lg' />
                {/* Decorative circle around dhaki */}
                <div className='absolute inset-0 bg-gradient-to-r from-orange-300/20 via-red-300/20 to-yellow-300/20 rounded-full blur-xl'></div>
            </div>
            <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 bg-clip-text text-transparent text-center leading-tight'>
                Image Gallery
            </h1>
            <div className='w-24 h-1 bg-gradient-to-r from-orange-400 via-red-500 to-yellow-400 rounded-full mt-3'></div>
            <p className='text-gray-600 text-sm md:text-base mt-2 text-center'>পুজার স্মৃতিচারণ</p>
        </div>
       
        {/* Enhanced Image Slider Section */}
        <div className="w-full flex items-center justify-center">
        <Swiper className="custom-nav-banner rounded-xl shadow-xl"
            modules={[Navigation, Pagination]}
            spaceBetween={20}
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
                <div className='relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300'>               
                    <img
                        src={card.image}
                        alt={card.title}
                        className='rounded-lg w-full h-64 md:h-72 object-cover group-hover:scale-105 transition-transform duration-300'
                    />
                    {/* Image overlay with title */}
                    <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg'>
                        <div className='absolute bottom-4 left-4 text-white'>
                            <h3 className='text-lg font-semibold'>{card.title}</h3>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            ))}
        </Swiper>
        </div>
        
        {/* Enhanced View More Button Section */}
        <div className='flex justify-center pt-8 md:pt-12 pb-5 md:pb-8'>
            <button 
                onClick={gotoGallery}
                className='group px-6 py-3 shadow-lg border border-orange-300/50 bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 hover:from-orange-600 hover:via-red-600 hover:to-orange-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl'
            >
                <span className='flex items-center gap-2'>
                    View More Gallery
                    <svg className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                    </svg>
                </span>
            </button>
        </div>

    </div>   
    </div>
    
  )
}

export default Banner