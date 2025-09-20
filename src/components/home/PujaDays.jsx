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
      {/* Ultra-Premium Spiritual Background with Gradient & Patterns */}
      <div className="w-full bg-gradient-to-br from-orange-50 via-amber-50 via-red-50 to-yellow-50 relative overflow-hidden">
        {/* Enhanced Decorative spiritual elements with movement */}
        <div className="absolute inset-0 opacity-8">
          <div className="absolute top-10 left-10 w-24 h-24 bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/4 right-1/3 w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full blur-lg animate-pulse" style={{animationDelay: '0.5s'}}></div>
        </div>
        
        {/* Floating Sacred Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-1/4 text-orange-300/30 text-2xl animate-bounce" style={{animationDelay: '0s'}}>🌸</div>
          <div className="absolute bottom-32 right-1/4 text-red-300/30 text-xl animate-bounce" style={{animationDelay: '1s'}}>🪷</div>
          <div className="absolute top-1/3 right-1/5 text-yellow-400/40 text-lg animate-bounce" style={{animationDelay: '2s'}}>✨</div>
          <div className="absolute bottom-1/4 left-1/6 text-amber-400/30 text-xl animate-bounce" style={{animationDelay: '1.5s'}}>🕉️</div>
        </div>
        
        <div className="w-full max-w-7xl flex flex-col justify-center items-center mx-auto py-[3rem] md:py-[4rem] px-6 text-center relative z-10">
          
          {/* Ultra-Enhanced Header Section with Premium Spiritual Touch */}
          <div className="w-full flex flex-col items-center mb-16">
            {/* Premium Durga Maa Image with Multi-layered Divine Effects */}
            <div className="relative mb-8 group">
              <img src={durgaMaa} alt="Maa Durga - Divine Mother" className="w-[12rem] md:w-[15rem] drop-shadow-3xl relative z-20" />
              
              {/* Multi-layered Divine glow effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-300/40 via-yellow-300/40 via-red-300/40 to-orange-300/40 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-300/30 via-orange-300/30 to-red-300/30 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
              
              {/* Enhanced Sacred aura rings with animation */}
              <div className="absolute -inset-6 border-2 border-orange-300/30 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
              <div className="absolute -inset-10 border border-yellow-300/20 rounded-full animate-spin" style={{animationDuration: '30s', animationDirection: 'reverse'}}></div>
              <div className="absolute -inset-14 border border-red-300/15 rounded-full animate-spin" style={{animationDuration: '40s'}}></div>
              
              {/* Floating divine particles around Durga Maa */}
              <div className="absolute -top-4 -left-4 text-orange-400/60 text-lg animate-pulse">🌺</div>
              <div className="absolute -top-4 -right-4 text-red-400/60 text-lg animate-pulse" style={{animationDelay: '0.5s'}}>🪷</div>
              <div className="absolute -bottom-4 -left-4 text-yellow-400/60 text-lg animate-pulse" style={{animationDelay: '1s'}}>✨</div>
              <div className="absolute -bottom-4 -right-4 text-amber-400/60 text-lg animate-pulse" style={{animationDelay: '1.5s'}}>🕉️</div>
            </div>
            
            {/* Enhanced Sanskrit Blessing with glow effect */}
            <div className="mb-6 text-amber-700 text-base md:text-lg font-semibold italic bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
              "या देवी सर्वभूतेषु शक्तिरूपेण संस्थिता"
            </div>
            
            {/* Premium Title Section with enhanced effects */}
            <h4 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-amber-600 bg-clip-text text-transparent tracking-wide mb-3 animate-pulse">
              পবিত্র দুর্গা পূজার দিনসমূহ
            </h4>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-orange-700 via-red-600 via-amber-600 to-orange-700 bg-clip-text text-transparent tracking-wide drop-shadow-lg">
              Durga Puja 2025
            </h1>
            
            {/* Enhanced Decorative Line with sacred symbols */}
            <div className="flex items-center mt-6 mb-4">
              <div className="w-20 h-[3px] bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
              <div className="mx-4 text-orange-500 text-xl animate-pulse">🪔</div>
              <div className="mx-2 text-amber-500 text-2xl animate-pulse" style={{animationDelay: '0.5s'}}>🕉️</div>
              <div className="mx-4 text-red-500 text-xl animate-pulse" style={{animationDelay: '1s'}}>🪔</div>
              <div className="w-20 h-[3px] bg-gradient-to-r from-transparent via-red-400 to-transparent"></div>
            </div>
            
            <p className="text-gray-700 text-base md:text-lg font-semibold bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent">
              ৫৮তম বার্ষিক উৎসব • স্থাপিত ১৩৭৫
            </p>
            
            {/* Additional sacred blessing */}
            <div className="mt-4 text-amber-600 text-sm md:text-base font-medium italic">
              "শারদীয়া শুভেচ্ছা"
            </div>
          </div>

          {/* Enhanced Spiritual Slider Section with Better Cards */}
          <div className="w-full">
            <Swiper className="custom-nav spiritual-slider"
              modules={[Autoplay,Navigation]}
              spaceBetween={35}
              centeredSlides={true}
              autoplay={{
                delay: 3500,            
                disableOnInteraction: false,
              }}
              speed={1400} 
              breakpoints={{
                400: { slidesPerView: 1 },
                600: { slidesPerView: 2 },
                900: { slidesPerView: 3 },
              }}
              navigation={true}
              loop={true}
            >
              {sliderData.map((card, index) => (
                <SwiperSlide key={card.id}>
                  <div className='flex justify-center'>
                    {/* Ultra-Premium Card Design with Enhanced Spiritual Elements */}
                    <div className="relative bg-gradient-to-br from-white/95 via-orange-50/50 via-red-50/50 to-amber-50/50 backdrop-blur-xl rounded-[2.5rem] p-12 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_35px_80px_-15px_rgba(0,0,0,0.4)] transition-all duration-1000 border-2 border-orange-200/60 hover:border-gradient-to-r hover:from-orange-400/80 hover:to-red-400/80 group max-w-md transform hover:-translate-y-4 hover:scale-105">
                      
                      {/* Ultra-Premium Divine Background with Sacred Patterns */}
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/80 via-amber-50/60 via-red-50/60 to-yellow-50/80 rounded-[2.5rem] group-hover:from-orange-100/90 group-hover:via-amber-100/70 group-hover:via-red-100/70 group-hover:to-yellow-100/90 transition-all duration-1000"></div>
                      
                      {/* Sacred Mandala Pattern Background */}
                      <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-1000">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-orange-300 rounded-full"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-red-300 rounded-full"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-amber-300 rounded-full"></div>
                      </div>
                      
                      {/* Enhanced Floating sparkles around card */}
                      <div className="absolute -top-3 left-6 text-orange-400/50 text-sm animate-bounce" style={{animationDelay: '0s'}}>✨</div>
                      <div className="absolute top-6 -right-3 text-yellow-400/50 text-sm animate-bounce" style={{animationDelay: '0.7s'}}>⭐</div>
                      <div className="absolute -bottom-3 right-8 text-red-400/50 text-sm animate-bounce" style={{animationDelay: '1.4s'}}>💫</div>
                      <div className="absolute bottom-6 -left-3 text-amber-400/50 text-sm animate-bounce" style={{animationDelay: '2.1s'}}>🌟</div>
                      <div className="absolute top-1/4 -right-2 text-orange-300/40 text-xs animate-bounce" style={{animationDelay: '0.3s'}}>✨</div>
                      <div className="absolute bottom-1/4 -left-2 text-red-300/40 text-xs animate-bounce" style={{animationDelay: '1.8s'}}>⭐</div>
                      
                      {/* Premium Icon Container with Divine Sacred Geometry */}
                      <div className="relative z-10 flex flex-col items-center">
                        <div className="relative mb-10 group-hover:scale-125 transition-transform duration-800">
                          {/* Multi-layered sacred geometry background */}
                          <div className="absolute -inset-8 bg-gradient-to-r from-orange-300/30 via-yellow-300/30 via-red-300/30 to-amber-300/30 rounded-full group-hover:from-orange-400/40 group-hover:via-yellow-400/40 group-hover:via-red-400/40 group-hover:to-amber-400/40 transition-all duration-800 animate-pulse"></div>
                          <div className="absolute -inset-6 bg-gradient-to-r from-yellow-300/25 via-orange-300/25 to-red-300/25 rounded-full animate-pulse" style={{animationDelay: '0.7s'}}></div>
                          <div className="absolute -inset-4 bg-gradient-to-r from-amber-300/20 via-orange-300/20 to-yellow-300/20 rounded-full animate-pulse" style={{animationDelay: '1.4s'}}></div>
                          <div className="absolute -inset-2 bg-gradient-to-r from-orange-300/15 to-red-300/15 rounded-full animate-pulse" style={{animationDelay: '2.1s'}}></div>
                          
                          {/* Sacred Icon Container */}
                          <div className="relative bg-gradient-to-br from-white/80 to-orange-50/60 rounded-full p-6 shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                            <img
                              src={card.image}
                              alt={card.day}
                              className='w-[110px] h-[110px] object-contain drop-shadow-2xl relative z-10 group-hover:drop-shadow-3xl transition-all duration-500'
                            />
                          </div>
                          
                          {/* Ultra-Enhanced Sacred rainbow glow effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-orange-400/50 via-yellow-400/50 via-red-400/50 via-amber-400/50 to-orange-400/50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animate-pulse"></div>
                        </div>
                        
                        {/* Luxury Text Section with Enhanced Typography */}
                        <div className='text-center space-y-5 w-full'>
                          <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-orange-800 via-red-700 via-amber-700 to-orange-800 bg-clip-text text-transparent group-hover:from-orange-700 group-hover:via-red-600 group-hover:via-amber-600 group-hover:to-orange-700 transition-all duration-800 drop-shadow-lg leading-tight">
                            {card.day}
                          </h3>
                          
                          {/* Premium decorative divider with sacred symbols */}
                          <div className="flex items-center justify-center space-x-3 py-2">
                            <div className="w-12 h-[3px] bg-gradient-to-r from-transparent via-orange-500 to-transparent rounded-full"></div>
                            <div className="text-orange-500 text-lg animate-pulse">🌺</div>
                            <div className="text-amber-500 text-base animate-pulse" style={{animationDelay: '0.4s'}}>✦</div>
                            <div className="text-red-500 text-lg animate-pulse" style={{animationDelay: '0.8s'}}>🌺</div>
                            <div className="w-12 h-[3px] bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full"></div>
                          </div>
                          
                          <p className="text-gray-800 font-bold text-xl md:text-2xl group-hover:text-gray-900 transition-colors duration-500 bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent">
                            {card.date}
                          </p>
                          
                          {/* Enhanced Sacred blessing section */}
                          <div className="bg-gradient-to-r from-orange-50/70 via-amber-50/70 to-red-50/70 rounded-2xl p-4 mt-6 border border-orange-200/30">
                            <div className="flex items-center justify-center space-x-4">
                              <div className="text-orange-500 text-lg group-hover:scale-125 transition-transform duration-500 animate-pulse">🌺</div>
                              <div className="text-red-500 text-base opacity-80 animate-pulse" style={{animationDelay: '0.3s'}}>॥</div>
                              <div className="text-amber-500 text-xl group-hover:scale-125 transition-transform duration-500 animate-pulse" style={{animationDelay: '0.6s'}}>🕉️</div>
                              <div className="text-red-500 text-base opacity-80 animate-pulse" style={{animationDelay: '0.9s'}}>॥</div>
                              <div className="text-orange-500 text-lg group-hover:scale-125 transition-transform duration-500 animate-pulse" style={{animationDelay: '1.2s'}}>🌺</div>
                            </div>
                            <div className="text-amber-600 text-xs font-medium mt-2 italic">
                              মঙ্গলময়
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Enhanced Corner sacred decorations */}
                      <div className="absolute top-6 right-6 text-orange-400 text-xl opacity-60 group-hover:opacity-100 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-pulse">✨</div>
                      <div className="absolute bottom-6 left-6 text-red-400 text-xl opacity-60 group-hover:opacity-100 group-hover:scale-125 group-hover:-rotate-12 transition-all duration-500 animate-pulse" style={{animationDelay: '0.7s'}}>🙏</div>
                      
                      {/* Premium Sacred border with enhanced rainbow effect */}
                      <div className="absolute inset-0 rounded-[2.5rem] border-2 bg-gradient-to-r from-orange-300/0 via-orange-400/30 via-red-400/30 via-amber-400/30 to-orange-300/0 group-hover:via-orange-500/60 group-hover:via-red-500/60 group-hover:via-amber-500/60 opacity-0 group-hover:opacity-100 transition-all duration-1000 p-[2px]"></div>
                      
                      {/* Divine shimmer overlay */}
                      <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-45deg from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 translate-x-[-100%] group-hover:translate-x-[100%] duration-1500"></div>
                    </div>
                  </div>  
                </SwiperSlide>
              ))}
            </Swiper>
            
            {/* Ultra-Premium Sacred Elements Below Slider */}
            <div className="mt-16 space-y-8">
              {/* Main blessing with enhanced design */}
              <div className="flex items-center justify-center space-x-6 bg-gradient-to-r from-orange-50/80 via-amber-50/80 to-red-50/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-orange-200/50">
                <div className="text-orange-400 text-2xl animate-pulse">🪔</div>
                <div className="text-amber-700 font-bold text-base md:text-xl text-center bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                  "সর্বমঙ্গলমাঙ্গল্যে শিবে সর্বার্থসাধিকে"
                </div>
                <div className="text-red-400 text-2xl animate-pulse" style={{animationDelay: '0.5s'}}>🪔</div>
              </div>
              
              {/* Additional sacred elements */}
              <div className="flex items-center justify-center space-x-8">
                <div className="text-center space-y-2">
                  <div className="text-orange-500 text-3xl animate-bounce">🌺</div>
                  <p className="text-xs text-gray-600 font-medium">শুভ</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-amber-500 text-4xl animate-bounce" style={{animationDelay: '0.3s'}}>🕉️</div>
                  <p className="text-xs text-gray-600 font-medium">দিব্য</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-red-500 text-3xl animate-bounce" style={{animationDelay: '0.6s'}}>�</div>
                  <p className="text-xs text-gray-600 font-medium">পবিত্র</p>
                </div>
              </div>
              
              {/* Final blessing */}
              <div className="text-center">
                <p className="text-amber-600 font-semibold text-sm md:text-base italic">
                  "মা দুর্গা আমাদের সকলের মঙ্গল করুন"
                </p>
                <div className="flex items-center justify-center mt-3 space-x-2">
                  <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
                  <div className="text-orange-500 text-sm">🙏</div>
                  <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-red-400 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PujaDays;
