import React from 'react'
import { motion } from "motion/react"
import { om } from '../../assets/banner/index'

function PujoTheme() {

  const data = [
      { name: 'কালী', feature: 'ভয়ংকর রূপ', function: 'ধ্বংস ও সৃষ্টির মাধ্যমে বিশৃঙ্খলা দূর করা' },
      { name: 'তারা', feature: 'করুণা', function: 'জ্ঞান ও মুক্তি প্রদান করা' },
      { name: 'ষোড়শী বা ত্রিপুরা সুন্দরী', feature: 'সৌন্দর্য', function: 'সৃষ্টি, স্মৃতি ও প্রলয়ের ওপর নিয়ন্ত্রণ' },
      { name: 'ভুবনেশ্বরী', feature: 'মহাবিশ্বের শাসক', function: 'মহাবিশ্বের সৃষ্টি, স্থিতি ও প্রলয় পরিচালনা করা' },
      { name: 'ভৈরবী', feature: 'উগ্রতা', function: 'ভয় ও বিপদ থেকে রক্ষা করা' },
      { name: 'ছিন্নমস্তা', feature: 'আত্মত্যাগ', function: 'আত্মনিয়ন্ত্রণ ও শক্তির প্রতীক' },
      { name: 'ধূমাবতী', feature: 'বিধবা রূপ', function: 'অশুভ শক্তিকে দমন করা' },
      { name: 'বগলামুখী', feature: 'স্তম্ভন', function: 'শত্রু ও বিরোধীদের দমন করা' },
      { name: 'মাতঙ্গী', feature: 'সংগীত ও শিক্ষার দেবী', function: 'জ্ঞান, শিল্পকলা ও সংগীতের নিয়ন্ত্রণ' },
      { name: 'কমলা', feature: 'সৌন্দর্য ও সমৃদ্ধি', function: 'সম্পদ ও প্রাচুর্যের দেবী' }
    ]
    
  return (
     <div className='w-full  overflow-x-clip mt-[4rem]  flex justify-center items-center'>
        <div className='w-full max-w-7xl py-4 md:py-6 px-12 mb-4'>
      {/* Ten Mahavidyas Section */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.5, ease: "easeInOut" }} 
         
         >
          
          {/* Sacred background patterns */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-10 w-24 h-24 bg-gradient-to-r from-orange-200/20 to-red-200/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-r from-amber-200/20 to-orange-200/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-red-100/10 to-orange-100/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className='relative max-w-6xl mx-auto'>
            {/* Section Header */}
            <div className='text-center mb-12'>
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
                <img src={om} alt='om' width={25} className='mx-2'></img>
                <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
              </div>
              
              <h2 className='text-2xl md:text-4xl  font-bold bg-gradient-to-r from-orange-700 via-red-600 to-orange-700 bg-clip-text text-transparent p-6'>
                এবারের থিম দশ মহাবিদ্যা
              </h2>
              
              {/* Sacred Quote */}
              <div className='bg-white/70 backdrop-blur-sm border border-orange-200/50 rounded-2xl p-8 mx-auto max-w-4xl shadow-xl'>
                <p className='text-lg md:text-xl font-semibold text-gray-800 mb-4 leading-relaxed'>
                  ইত্থং যদা যদা বাধা দানবোত্থা ভবিষ্যতি।<br/>
                  তদা তদাবতীর্যাহং করিষ্যাম্যরিসংক্ষয়ম্।।
                </p>
                <p className='text-sm md:text-base text-gray-700 italic mb-3'>
                  -- যখনই এ প্রকার দানবগণের প্রাদুর্ভাব ও উৎপীড়ন হইবে, তখনই আমি আবির্ভূত হইয়া তোমাদের শত্রু সংহার করিব।
                </p>
                <p className='text-lg font-semibold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent p-2'>
                  -- শ্রীশ্রী চন্ডী
                </p>
              </div>
            </div>

            {/* Mahavidyas Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
              {data.map((deity, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className='group relative bg-white/80 backdrop-blur-sm border border-orange-200/50 rounded-xl p-3 md:p-4 
                  shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105'>
                  
                 
                  <div className='text-center '>
                    <h3 className='text-xl md:text-2xl p-1 font-bold bg-gradient-to-r from-orange-700 to-red-600 bg-clip-text text-transparent'>
                      {deity.name}
                    </h3>
                    
                    <div className="w-12 h-0.5 bg-gradient-to-r from-orange-400 to-red-400 mx-auto "></div>
                    
                    <div className='space-y-2 text-sm md:text-base text-gray-700 pt-4'>
                      <p><span className='font-semibold text-orange-600'>বৈশিষ্ট্য:</span> {deity.feature}</p>
                      <p><span className='font-semibold text-orange-600'>কার্যকারিতা:</span> {deity.function}</p>
                    </div>
                  </div>
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400/5 to-red-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              ))}
            </div>

           
           
          </div>
          
         
         
        </motion.div>
        </div>
    </div>
  )
}

export default PujoTheme