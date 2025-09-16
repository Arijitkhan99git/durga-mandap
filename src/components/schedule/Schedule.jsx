import React, { useEffect } from 'react'
import {pujabannerft} from '../../assets/banner/index'

function Schedule() {
 useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
     <>
       <div className='w-full overflow-x-clip mt-[4rem] text-primary flex flex-col justify-center items-center bg-gradient-to-r from-gray-200 to-purple-200'>

          <div className='w-full '>
            <img src={pujabannerft} alt="pujabannerft" />
          </div>

          <div className='text-center  md:text-lg  poppins-medium py-[2rem] md:py-[3rem] space-y-5 w-full max-w-7xl'>
             <h1 className='font-extrabold text-3xl md:text-4xl lg:text-5xl 
              leading-relaxed tracking-wide bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent'>
              অনুষ্ঠান সূচী
            </h1>
          </div>

           <div className='flex flex-col items-center justify-center w-full max-w-7xl px-8 lg:px-12 pb-5 md:pb-10 gap-8 md:gap-12'>
            
            <div className='bg-white w-full p-5 md:p-10 border border-blue-200
             flex flex-col md:flex-row justify-center md:justify-around items-center shadow-md rounded-md gap-4 md:gap-8 text-center leading-relaxed'>
                <h1 className='text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-700 to-red-600 bg-clip-text text-transparent p-2'>মহাপঞ্চমী</h1>
                <div className='space-y-4 md:space-y-6'>
                  <p className='poppins-semibold text-blue-500'>১০ই আশ্বিন ১৪৩২ (ইং - ২৭/০৯/২০২৫) শনিবার ।</p>
                  <p>শনিবার দুপুর ১টা ৩০ মি - বসে আঁকো বিকাল ৩টা সন্মানীয় অতিথি বর্গের উপস্থিতিতে মা এর পূজার শুভ উদ্বোধন ও বস্ত্র বিতরণ।</p>
                  <p>সায়ংকালে শ্রী শ্রী শারদীয়া দুর্গাদেবীর বোধন ।</p>
                 </div>
            </div>
           

            <div className='bg-white w-full p-5 md:p-10 border border-blue-200
             flex flex-col md:flex-row justify-center md:justify-evenly  items-center shadow-md rounded-md gap-4 md:gap-8 text-center leading-relaxed'>
                <h1 className='text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-700 to-red-600 bg-clip-text text-transparent p-2'>মহাষষ্ঠী</h1>
                <div className='space-y-4 md:space-y-6'>
                  <p className='poppins-semibold text-blue-500'>১১ই আশ্বিন, ১৪৩২. (ইং-২৮/০৯/২০২৫), রবিবার ।</p>
                  <p>সন্ধ্যা ৮টায় বিশিষ্ট বহিরাগত শিল্পীদের আকর্ষনীয় সঙ্গীতানুষ্ঠান।</p>
                  <p>পরিবেশনে - জয় ব্যানার্জ্জী ও পূর্বা সূত্রধর</p>
                </div>
            </div>

            <div className='bg-white w-full p-5 md:p-10 border border-blue-200
             flex flex-col md:flex-row justify-center md:justify-around  items-center shadow-md rounded-md gap-4 md:gap-8 text-center leading-relaxed'>
                <h1 className='text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-700 to-red-600 bg-clip-text text-transparent p-2'>মহাসপ্তমী</h1>
                <div className='space-y-4 md:space-y-6'>
                  <p className='poppins-semibold text-blue-500'>১২ আশ্বিন (২৯ সেপ্টেম্বর), সোমবার ।</p>
                  <p>মধ্যাহ্নে মা এর অনুপ্রসাদ বিতরণ। সন্ধ্যা ৭টা ৩০মি পশ্চিমবঙ্গ বিজ্ঞান মঞ্চ কর্তৃক ম্যাজিক প্রদর্শণী।</p>
                </div>
               
               
            </div>

            <div className='bg-white w-full p-5 md:p-10 border border-blue-200
             flex flex-col md:flex-row justify-center md:justify-evenly  items-center shadow-md rounded-md gap-4 md:gap-8 text-center leading-relaxed'>
                <h1 className='text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-700 to-red-600 bg-clip-text text-transparent p-2'>মহাষ্টমী</h1>
                  <div className='space-y-4 md:space-y-6'>
                    <p className='poppins-semibold text-blue-500'>১৩ আশ্বিন (৩০ সেপ্টেম্বর), মঙ্গলবার।</p>
                    <p>সন্ধ্যা ৭টা ৩০মিঃ স্থানীয় শিল্পীদের বিচিত্রানুষ্ঠান।</p>              
                  </div>
               
            </div>

            <div className='bg-white w-full p-5 md:p-10 border border-blue-200
             flex flex-col md:flex-row justify-center md:justify-around  items-center shadow-md rounded-md gap-4 md:gap-8 text-center leading-relaxed'>
                <h1 className='text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-700 to-red-600 bg-clip-text text-transparent p-2'>মহানবমী</h1>          
                <div className='space-y-4 md:space-y-6'>
                  <p className='poppins-semibold text-blue-500'>১৪ আশ্বিন (০১ অক্টোবর ২০২৫), বুধবার।</p>
                  <p>মধ্যাহ্নে মাএর খিচুড়ি মহাপ্রসাদ বিতরণ।</p>
                  <p>সন্ধ্যা ৭টা ৩০মিঃ ঝঙ্কার নৃত্য একাডেমি পরিবেশিত নৃত্যানুষ্ঠান।</p>
                </div>
               
               
            </div>

            <div className='bg-white w-full p-5 md:p-10 border border-blue-200
             flex flex-col md:flex-row justify-center md:justify-around  items-center shadow-md rounded-md gap-4 md:gap-8 text-center leading-relaxed'>
                <h1 className='text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-700 to-red-600 bg-clip-text text-transparent p-2'>বিজয়া দশমী</h1>
                <div className='space-y-4 md:space-y-6'>
                <p className='poppins-semibold text-blue-500'>১৫ আশ্বিন (০২ অক্টোবর ২০২৫), বৃহস্পতিবার।</p>
                <p>বিজয়াদশমী ০২ অক্টোবর বৃহস্পতিবার দুপুর  0২ :৫৫ (02:55PM) পর্যন্ত।</p>
                <p>বেলা ২টা ৩০মি বাঁকাদহ উচ্চ বিদ্যালয় নজরুল মঞ্চে মুক্ত মঞ্জুরী অপেরা পরিবেশিত যাত্রাপালা</p>
                <p>"মুখোশের আড়ালে মহাকাল"</p>
                 </div>
            </div>

            <div className='bg-white w-full p-5 md:p-10 border border-blue-200
             flex flex-col md:flex-row justify-center md:justify-around  items-center shadow-md rounded-md gap-4 md:gap-8 text-center leading-relaxed'>
                <h1 className='text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-700 to-red-600 bg-clip-text text-transparent p-2'>মহাএকাদশী</h1>
                <div className='space-y-4 md:space-y-6'>
                  <p className='poppins-semibold text-blue-500'>১৬ আশ্বিন (০৩ অক্টোবর ২০২৫), বৃহস্পতিবার।</p>
                  <p>বিজয়াদশমী ০২ অক্টোবর বৃহস্পতিবার দুপুর  0২ :৫৫ (02:55PM) পর্যন্ত।</p>
                  <p>সকাল ১০ টায় প্রতিমা নিরঞ্জন।</p>
                </div>
                
            </div>
        </div>

         
        </div>     
    </>
  )
}

export default Schedule