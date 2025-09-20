import React from 'react'
import Banner from './Banner'
import HeadBanner from './HeadBanner'
import { motion } from "motion/react"
import PujaDays from './PujaDays'
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  
  const tithiPage = ()=>{
    navigate('/tithi')    
  }

  const schedulePage = ()=>{
    navigate('/schedule')
  }

  return (
    <>
      <div className=' w-full overflow-x-clip bg-gradient-to-r from-orange-100 to-blue-100 mt-[4.5rem] pb-5 md:pb-8'>
        <HeadBanner></HeadBanner>

        {/* Enhanced Committee Section with Spiritual Touch */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }} 
          whileInView={{ scale: 1, opacity: 1 }} 
          transition={{ duration: 1, ease: "easeInOut" }} 
          viewport={{ once: true, amount: 0.5 }} 
          className='relative px-6 py-12 text-center'>
          
          {/* Decorative background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-gradient-to-r from-orange-300/10 to-red-300/10 rounded-full blur-xl"></div>
            <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-r from-yellow-300/10 to-orange-300/10 rounded-full blur-lg"></div>
          </div>
          
          <div className='relative z-10 max-w-4xl mx-auto space-y-4'>
            {/* Sacred divider */}
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
              <div className="mx-4 text-orange-500 text-xl">🕉️</div>
              <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
            </div>
            
            <h3 className='text-lg md:text-xl font-semibold bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent'>
              পরিচালনায়:
            </h3>
            <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-700 via-red-600 to-orange-700 bg-clip-text text-transparent leading-tight px-4'>
              বাঁকাদহ সর্বজনীন দুর্গোৎসব কমিটি
            </h1>
            
            {/* Enhanced decorative element */}
            <div className="flex items-center justify-center mt-6">
              <div className="text-orange-400 text-sm">🌺</div>
              <div className="mx-3 w-24 h-[2px] bg-gradient-to-r from-orange-400 via-red-400 to-orange-400"></div>
              <div className="text-red-400 text-sm">🌺</div>
            </div>
            
            <p className='text-gray-600 text-sm md:text-base font-medium mt-4'>
              স্থাপিত ১৩৭৫ • ৫৮তম বার্ষিক উৎসব
            </p>
          </div>
        </motion.div>
        
        <PujaDays></PujaDays>
        <Banner></Banner>

        {/* Enhanced Action Buttons Section */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.8, ease: "easeInOut" }} 
          viewport={{ once: true, amount: 0.5 }}
          className='relative px-6 flex flex-col items-center my-[4rem]'>
          
          {/* Sacred background decoration */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <div className="w-32 h-32 bg-gradient-to-r from-orange-400 to-red-400 rounded-full blur-3xl"></div>
          </div>
          
          <div className='relative z-10 text-center mb-8'>
            <h2 className='text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2'>
              পূজার তথ্য ও সূচী
            </h2>
            <div className="w-16 h-[1px] bg-gradient-to-r from-orange-400 to-red-400 mx-auto"></div>
          </div>
          
          <div className='flex flex-col sm:flex-row justify-center gap-6'>
            <button 
              onClick={tithiPage}
              className='group relative px-6 py-4 bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 hover:from-orange-600 hover:via-red-600 hover:to-orange-700 text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 min-w-[160px]'>
              <span className='flex items-center justify-center gap-2'>
                📅 Tithi
                <div className='w-1 h-1 bg-white/50 rounded-full group-hover:w-2 transition-all duration-300'></div>
              </span>
            </button>
            
            <button 
              onClick={schedulePage}
              className='group relative px-6 py-4 bg-gradient-to-r from-blue-500 via-sky-500 to-blue-600 hover:from-blue-600 hover:via-sky-600 hover:to-blue-700 text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 min-w-[160px]'>
              <span className='flex items-center justify-center gap-2'>
                🎭 Program Schedule
                <div className='w-1 h-1 bg-white/50 rounded-full group-hover:w-2 transition-all duration-300'></div>
              </span>
            </button>
          </div>
        </motion.div>

        {/* Ten Mahavidyas Section */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }} 
          transition={{ duration: 1, ease: "easeInOut" }} 
          viewport={{ once: true, amount: 0.3 }}
          className='relative px-6 py-16 my-8 bg-gradient-to-br from-orange-50 via-red-50 to-amber-50'>
          
          {/* Sacred background patterns */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-10 w-24 h-24 bg-gradient-to-r from-orange-200/20 to-red-200/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-r from-amber-200/20 to-orange-200/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-red-100/10 to-orange-100/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className='relative z-10 max-w-6xl mx-auto'>
            {/* Section Header */}
            <div className='text-center mb-12'>
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
                <div className="mx-4 text-orange-600 text-2xl">🕉️</div>
                <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
              </div>
              
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-700 via-red-600 to-orange-700 bg-clip-text text-transparent mb-6'>
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
                <p className='text-sm font-semibold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent'>
                  --শ্রীশ্রী চন্ডী
                </p>
              </div>
            </div>

            {/* Mahavidyas Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
              {[
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
              ].map((deity, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className='group relative bg-white/80 backdrop-blur-sm border border-orange-200/50 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105'>
                  
                  {/* Decorative corner elements */}
                  <div className="absolute top-2 right-2 w-3 h-3 bg-gradient-to-br from-orange-400 to-red-400 rounded-full opacity-60"></div>
                  <div className="absolute bottom-2 left-2 w-2 h-2 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full opacity-60"></div>
                  
                  <div className='text-center space-y-3'>
                    <h3 className='text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-700 to-red-600 bg-clip-text text-transparent'>
                      {deity.name}
                    </h3>
                    
                    <div className="w-12 h-[1px] bg-gradient-to-r from-orange-400 to-red-400 mx-auto"></div>
                    
                    <div className='space-y-2 text-sm md:text-base text-gray-700'>
                      <p><span className='font-semibold text-orange-600'>বৈশিষ্ট্য:</span> {deity.feature}</p>
                      <p><span className='font-semibold text-red-600'>কার্যকারিতা:</span> {deity.function}</p>
                    </div>
                  </div>
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400/5 to-red-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              ))}
            </div>

            {/* Bottom decorative element */}
            <div className="flex items-center justify-center mt-12">
              <div className="text-orange-500 text-lg">🌺</div>
              <div className="mx-4 w-32 h-[2px] bg-gradient-to-r from-orange-400 via-red-400 to-orange-400"></div>
              <div className="text-red-500 text-lg">🌺</div>
            </div>
          </div>
          
          {/* Decorative bottom element */}
          <div className="flex items-center mt-8">
            <div className="text-orange-400 text-sm">🙏</div>
            <div className="mx-3 w-12 h-[1px] bg-gradient-to-r from-orange-400 to-red-400"></div>
            <div className="text-red-400 text-sm">🙏</div>
          </div>
        </motion.div>

        {/* Historical Heritage Section */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }} 
          transition={{ duration: 1, ease: "easeInOut" }} 
          viewport={{ once: true, amount: 0.3 }}
          className='relative px-6 py-20 my-12 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50'>
          
          {/* Historical background patterns */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-amber-200/15 to-orange-200/15 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-red-200/15 to-amber-200/15 rounded-full blur-3xl"></div>
            <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-gradient-to-r from-orange-200/10 to-red-200/10 rounded-full blur-2xl"></div>
          </div>
          
          <div className='relative z-10 max-w-7xl mx-auto'>
            {/* Section Header */}
            <div className='text-center mb-16'>
              <div className="flex items-center justify-center mb-8">
                <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
                <div className="mx-6 text-amber-600 text-3xl">🏛️</div>
                <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
              </div>
              
              <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-amber-700 via-orange-600 to-red-600 bg-clip-text text-transparent mb-8'>
                ইতিহাসের পটে
              </h2>
              
              {/* Centennial Tribute */}
              <div className='bg-gradient-to-r from-amber-100 to-orange-100 border-l-4 border-amber-500 rounded-r-2xl p-8 mx-auto max-w-5xl shadow-xl mb-8'>
                <h3 className='text-2xl md:text-3xl font-bold text-amber-800 mb-4'>
                  নেতাজি সুভাষচন্দ্র বসুর বার্মার মান্দালয় জেলে দুর্গাপূজার শতবর্ষ
                </h3>
                <p className='text-xl md:text-2xl font-semibold text-red-700'>
                  (১৯২৫ - ২০২৫) স্মরণে
                </p>
                <p className='text-lg text-amber-700 font-medium mt-4'>
                  আমাদের শ্রদ্ধার্ঘ্য
                </p>
              </div>
            </div>

            {/* Historical Narrative */}
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className='bg-white/80 backdrop-blur-sm border border-amber-200/50 rounded-3xl p-8 md:p-12 mb-12 shadow-2xl'>
              
              <div className="flex items-start gap-4 mb-6">
                <div className="text-3xl">📚</div>
                <div className="flex-1">
                  <p className='text-lg md:text-xl leading-relaxed text-gray-800 font-medium'>
                    ঋষি বঙ্কিমচন্দ্রের <span className='font-bold text-amber-700'>"আনন্দ মঠ"</span> -এর দেখানো পথে উৎসাহিত হয়ে, ভারত মাতার বীর সন্তানদের অন্যতম <span className='font-bold text-red-700'>"নেতাজী সুভাস চন্দ্র বসু"</span> যিনি দেশমাত্তৃকাকে দুর্গা মাতার মূর্তির মধ্যে খুঁজে পেয়েছিলেন।
                  </p>
                </div>
              </div>
              
              <p className='text-base md:text-lg leading-relaxed text-gray-700 mb-6'>
                তিনি দুর্গা মাতার পূজাকেই মায়ের শৃংখল মুক্তির হাতিয়ার করে বারবার দুর্গা পূজার সাথে সক্রিয়ভাবে নিজেকে জড়িয়ে নিয়েছিলেন। দুর্গা পূজাকেই তিনি তার বিপ্লবী কর্মপন্থার বহু বিষয়ে তাঁর সহযোদ্ধাদের সাথে নিবিড় বিপ্লবী রণপন্থা নির্ধারণ করে নেওয়ার আদর্শ সুযোগ হিসাবে গ্ৰহণ করেছিলেন।
              </p>
              
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border-l-4 border-amber-400">
                <p className='text-base md:text-lg text-amber-800 font-medium'>
                  যার মাধ্যমে তিনি বাংলার যুবসমাজকে মাতৃ মুক্তির উদ্দেশ্যে দেশাত্মবোধে উদ্দীপিত করেন।
                </p>
              </div>
            </motion.div>

            {/* Prison Durga Puja Timeline */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className='mb-12'>
              
              <h3 className='text-2xl md:text-3xl font-bold text-center bg-gradient-to-r from-red-700 to-orange-600 bg-clip-text text-transparent mb-8'>
                জেলে থাকাকালীন দুর্গা পূজা
              </h3>
              
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {/* 1925 Mandalay Prison */}
                <div className='relative'>
                  <div className='bg-gradient-to-br from-red-100 to-orange-100 rounded-2xl p-8 border border-red-200 shadow-xl transform hover:scale-105 transition-all duration-300'>
                    <div className="absolute -top-4 left-6 bg-red-600 text-white px-4 py-2 rounded-full font-bold text-lg">
                      ১৯২৫
                    </div>
                    <div className="pt-4">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="text-2xl">🏛️</div>
                        <h4 className='text-xl font-bold text-red-800'>বার্মার মান্দালয় জেল</h4>
                      </div>
                      <p className='text-gray-700 font-medium'>
                        প্রথমবার জেলের ভেতর মহাসমারোহে দূর্গা পূজা সম্পন্ন করেন
                      </p>
                    </div>
                  </div>
                </div>

                {/* 1940 Presidency Jail */}
                <div className='relative'>
                  <div className='bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl p-8 border border-orange-200 shadow-xl transform hover:scale-105 transition-all duration-300'>
                    <div className="absolute -top-4 left-6 bg-orange-600 text-white px-4 py-2 rounded-full font-bold text-lg">
                      ১৯৪০
                    </div>
                    <div className="pt-4">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="text-2xl">🏛️</div>
                        <h4 className='text-xl font-bold text-orange-800'>কলকাতার প্রেসিডেন্সি জেল</h4>
                      </div>
                      <p className='text-gray-700 font-medium'>
                        দ্বিতীয়বার জেলের ভেতর মহাসমারোহে দূর্গা পূজা সম্পন্ন করেন
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Sacred Letter Quote */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className='bg-gradient-to-r from-amber-100/80 to-orange-100/80 backdrop-blur-sm border-2 border-amber-300/50 rounded-3xl p-8 md:p-12 mb-12 shadow-2xl relative overflow-hidden'>
              
              {/* Decorative quote marks */}
              <div className="absolute top-4 left-4 text-6xl text-amber-400/30 font-serif">"</div>
              <div className="absolute bottom-4 right-4 text-6xl text-amber-400/30 font-serif">"</div>
              
              <div className='relative z-10'>
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-3xl">✉️</div>
                  <p className='text-lg font-semibold text-amber-800'>
                    ১৯২১ সালে শিলং থেকে বাসন্তী দেবীকে লেখা চিঠিতে:
                  </p>
                </div>
                
                <blockquote className='text-xl md:text-2xl font-medium text-gray-800 leading-relaxed mb-6 italic border-l-4 border-amber-500 pl-6'>
                  "মানুষের জীবনে এমন একটি স্থান চাই যেখানে বিতর্ক থাকবেনা, বিচার থাকবে না, বুদ্ধি বিবেচনা থাকবে না,থাকবে শুধু ব্লাইন্ড ওয়ারশিপ। তাই বুঝি মায়ের সৃষ্টি। ভগবান করুন যেন আমি চিরকাল এইভাব নিয়ে মাতৃপূজা করে যেতে পারি।"
                </blockquote>
                
                <p className='text-right text-amber-700 font-bold text-lg'>
                  — নেতাজি সুভাষচন্দ্র বসু
                </p>
              </div>
            </motion.div>

            {/* Presidency Timeline */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}>
              
              <h3 className='text-2xl md:text-3xl font-bold text-center bg-gradient-to-r from-orange-700 to-red-600 bg-clip-text text-transparent mb-10'>
                উত্তর কলকাতার বারোয়ারি পূজায় নেতাজির অবদান
              </h3>
              
              <div className='space-y-6'>
                {[
                  { year: '১৯৩৪', event: 'শিমলা ব্যায়াম সমিতির দুর্গা পূজার সভাপতি' },
                  { year: '১৯৩৭-১৯৩৮', event: 'কুমোরটুলি দূর্গা পূজা কমিটির সভাপতি' },
                  { year: '১৯৩৮-১৯৩৯', event: 'বাগবাজার সার্বজনীন দুর্গাপূজার সভাপতিত্ব' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    
                    <div className='flex-1'>
                      <div className={`bg-white/90 backdrop-blur-sm border border-orange-200/50 rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                        <h4 className='text-xl font-bold text-orange-700 mb-2'>{item.event}</h4>
                        <p className='text-gray-600 font-medium'>নেতাজির নেতৃত্বে সাংস্কৃতিক ও আধ্যাত্মিক জাগরণ</p>
                      </div>
                    </div>
                    
                    <div className='flex flex-col items-center'>
                      <div className='w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg'>
                        {index + 1}
                      </div>
                      <div className='w-1 h-16 bg-gradient-to-b from-orange-400 to-red-400 mt-2'></div>
                    </div>
                    
                    <div className='flex-1'>
                      <div className={`bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl p-4 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                        <span className='text-2xl font-bold text-red-700'>{item.year}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Closing tribute */}
            <div className="flex items-center justify-center mt-16">
              <div className="text-amber-500 text-2xl">🙏</div>
              <div className="mx-6 w-40 h-[3px] bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 rounded-full"></div>
              <div className="text-red-500 text-2xl">🙏</div>
            </div>
          </div>
        </motion.div>



      </div>
    </>
  )
}

export default HomePage