import React, { useEffect } from 'react'
import {aboutusHeader,  bow} from '../../assets/banner/index'

function AboutUs() {
  useEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

  return (
      <>
      <div className='w-full overflow-x-clip mt-[4.5rem] pb-5 md:pb-8 text-primary 
      flex flex-col justify-center items-center bg-gradient-to-r from-orange-100/50 via-sky-100/50 to-red-100 gap-6'>
         <div className='w-full '>
            <img src={aboutusHeader} alt="aboutusHeader" />
          </div>

        <div className='w-full max-w-7xl py-4 md:py-8 px-12 flex flex-col md:flex-row justify-around gap-10'>

          {/* left side */}
          <div className='space-y-2 md:space-y-4 '>
            <h1 className='text-4xl md:text-6xl poppins-bold  text-stroke '>About Us</h1>
            <p className='font-extrabold text-3xl '>Let's Talk About Our Durga Puja.</p>
          </div>

          {/* right side */}
          <div className='w-full max-w-lg text-lg leading-loose space-y-4'>
              <p className=' poppins-medium'>বাঁকাদহ সার্বজনীন দূর্গোৎসব ২০২৫-এ ৫৮তম বর্ষে পদার্পণ করছে। ১৩৭৫ বঙ্গাব্দে প্রতিষ্ঠিত এই পুজো শুধুমাত্র একটি ধর্মীয় আচার নয়, এটি বাঁকাদহবাসীর হৃদয়ের সঙ্গে জড়িয়ে থাকা আবেগ ও ঐতিহ্যের প্রতিচ্ছবি। প্রজন্মের পর প্রজন্ম ধরে এই উৎসব আমাদের মিলনের স্থান, সংস্কৃতির ধারক ও বাহক হিসেবে ভূমিকা পালন করে আসছে।
              চার দিন জুড়ে থাকছে নানা ধরনের সাংস্কৃতিক অনুষ্ঠান, আলোকসজ্জা ও ধর্মীয় আচার-অনুষ্ঠান। বিজয়া দশমীর দিন দুপুরে অনুষ্ঠিত হবে ঐতিহ্যবাহী যাত্রাপালা, যা আমাদের পুজোর এক অনন্য বৈশিষ্ট্য এবং বহু বছরের প্রথা।
              আমাদের এই পুজোতে সবাইকে স্বতঃস্ফূর্তভাবে অংশগ্রহণের আমন্ত্রণ জানাচ্ছি। চলুন সবাই মিলে আরও একটি আনন্দময়, সার্থক দুর্গোৎসব উপহার দিই।</p>

              <div className='poppins-semibold'>
                <p>বিনীত -</p>
                <p>বাঁকাদহ সার্বজনীন দুর্গাপূজা কমিটি</p>
                <p>বাঁকাদহ, বাঁকুড়া</p>
                
              </div>
          </div>

        </div>

        <div className='w-full flex justify-center items-center bg-linear-to-r from-pink-300 via-orange-400 to-red-300 py-3 gap-5'>
          <img src={bow} alt="bow" width={35}/>
          <p className='text-2xl poppins-bold text-white'>স্থাপিত ১৩৭৫</p>
          <img src={bow} alt="bow" width={35}/>
        </div>
        <div className='flex flex-col md:flex-row w-full max-w-7xl items-center md:justify-around py-8 mx-12 my-12
        gap-4 bg-gray-200 shadow-md rounded-md border-2 border-white text-blue-900'>
            <div className='flex flex-row md:flex-col '>
              <p  className='font-semibold text-lg'>সভাপতি - </p>
              <p>শ্রী রঘুমনি সাহা</p>
            </div>

            <div className='flex flex-row md:flex-col'>
              <p className='font-semibold text-lg'>কোষাধ্যক্ষ - </p>
              <p>শ্রী নবকুমার বসাক</p>
            </div>

            <div className='flex flex-row md:flex-col'>
              <p className='font-semibold text-lg'>সম্পাদক - </p>
              <p>শ্রী অসীম কুমার চরন</p>
            </div>
        </div>

      </div>
    </>
  )
}

export default AboutUs