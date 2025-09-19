import React, { useEffect } from 'react'
import {pujaDhunuchNaach} from '../../assets/banner/index'
import { useNavigate } from 'react-router-dom'

function Tithi() {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const schedulePage =()=>{
    navigate('/schedule')
  }

  return (
    <>
      <div className='w-full overflow-x-clip mt-[4rem] text-primary flex flex-col justify-center items-center pb-5 md:pb-8'>
       <div className='w-full '>
        <img src={pujaDhunuchNaach} alt="pujaDhunuchNaach" />
       </div>
        
        <div className='text-center  md:text-lg  poppins-medium py-[1rem] md:py-[3rem] space-y-5 w-full max-w-7xl'>
          <div className='space-y-2 p-2 '>
            <h1 className='text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-700 to-red-600 bg-clip-text text-transparent'>শ্রীশ্রী শারদীয়া দুর্গাপূজার সময় নির্ঘণ্ট</h1>
            <p className='text-gray-700 md:text-lg'>(সূর্যসিদ্ধান্ত মতানুযায়ী)</p>
           </div>

          <p className='text-lg md:text-xl font-semibold text-white bg-gradient-to-r from-orange-700 to-red-600 py-2'>বঙ্গাব্দঃ ১৪৩২ | খ্রীষ্টাব্দঃ ২০২৫</p>

          <div className='space-y-2'>
            <p className='text-gray-700 md:text-lg'>[ভারতীয় প্রমাণ সময়ানুযায়ী]</p>
            <h2 className='text-xl md:text-2xl font-bold '>দেবীর আগমন ও গমন</h2>
          </div>

          <div className='space-y-1'>
            <p className='font-semibold text-orange-500'>দেবীর গজে আগমন।</p>
            <p>ফল-শস্যপূর্ণ বসুন্ধরা।</p>
          </div>
          
          <div className='space-y-1'>
             <p className='font-semibold text-orange-500'>দেবীর দোলায় গমন।</p>
             <p>ফল-মড়ক।</p>
          </div>
         
        </div>

        <div className='flex flex-col items-center justify-center w-full max-w-7xl px-8 lg:px-12 py-5 md:py-10 gap-8'>

            <div className='bg-gradient-to-r from-orange-100/50 to-blue-100/50 w-full p-5 md:p-10 border border-gray-100
             flex flex-col md:flex-row justify-center items-center shadow-md rounded-md gap-4 md:gap-8  leading-relaxed text-center md:text-left'>
                <h1 className='text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-700 to-red-600 bg-clip-text text-transparent p-2'>মহাষষ্ঠী</h1>
                <p className='poppins-semibold'>১১ই আশ্বিন, ১৪৩২. (ইং-২৮/০৯/২০২৫), রবিবার ।</p>
                <p>শ্রী শ্রী দুর্গাষষ্ঠীতিথি রবিবার সকাল  ১০:৪৩ (10:43AM)পর্যন্ত।</p>
                <p>পূর্বাহ্ণ ০৯:২৯ (09:29AM) মধ্যে - শ্রীশ্রী শারদীয়া দুর্গাদেবীর ষষ্ঠ্যাদি কল্পারম্ভ ও ষষ্ঠীবিহিত পূজা প্রশস্তা।</p>
                <p>সন্ধ্যাবেলা শ্রীশ্রীশারদীয়া দুর্গাদেবীর আমন্ত্রণ ও অধিবাস।</p>
            </div>

            <div className='bg-gradient-to-r from-red-100/50 to-blue-100/50 w-full p-5 md:p-10 border border-gray-100
             flex flex-col md:flex-row justify-center items-center shadow-md rounded-md gap-4 md:gap-10 text-center md:text-left leading-relaxed'>
                <h1 className='text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-700 to-red-600 bg-clip-text text-transparent p-2'>মহাসপ্তমী</h1>
                <p className='poppins-semibold'>১২ আশ্বিন (২৯ সেপ্টেম্বর), সোমবার ।</p>
                <p>সপ্তমী ২৯ সেপ্টেম্বর সোমবার দুপুর ১২:২৭(12:27PM) পর্যন্ত।</p>
                <p>পূর্বাহ্ণ ০৯:২৯ (09:29AM) মধ্যে দ্ব্যাত্মক চরলগ্নে ও চরণবাংশে (কিন্তু কালবেলানুরোধে সকাল ০৬:৫৯ (06:59AM) মধ্যে পুনরায় সকাল ০৮:২৮ (08:28AM) এরপর পূর্বাহ্ণ মধ্যে)- শ্রীশ্রীশারদীয়া দুর্গাদেবীর নবপত্রিকা প্রবেশ, স্থাপন, সপ্তম্যাদি কল্পারম্ভ ও সপ্তমীবিহিত পূজা প্রশস্তা।</p>
                <p>রাত্রি ১১:০৩ (11:03PM) গতে ১১:৫০ (11:50PM) মধ্যে শ্রীশ্রীশারদীয়া দুর্গাদেবীর অর্দ্ধরাত্র বিহিত পূজা।</p>
            </div>

            <div className='bg-gradient-to-r from-gray-100 to-purple-100 w-full p-5 md:p-10 border border-gray-100
             flex flex-col md:flex-row justify-center items-center shadow-md rounded-md gap-4 md:gap-8 text-center md:text-left leading-relaxed'>
                <h1 className='text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-700 to-red-600 bg-clip-text text-transparent p-2'>মহাষ্টমী</h1>
                <p className='poppins-semibold'>১৩ আশ্বিন (৩০ সেপ্টেম্বর), মঙ্গলবার।</p>
                <p>মহাষ্টমী ৩০ সেপ্টেম্বর মঙ্গলবার দুপুর  0১:৪৫ (01:45PM) পর্যন্ত।</p>
                <p>পূর্বাহ্ণ ০৯:২৮ (09:28AM) মধ্যে (বারবেলানুরোধে সকাল ০৬:৫৯ (06:59AM) মধ্যে পুনরায় সকাল ০৮:২৮ (08:28AM) এরপর পূর্বাহ্ণ মধ্যে) - শ্রীশ্রীশারদীয়া দুর্গাদেবীর মহাষ্টম্যাদিকল্পারম্ভ, কেবল মহাষ্টমীকল্পারম্ভ ও মহাষ্টমীবিহিত পূজা প্রশস্তা।</p>
                <p>পূর্বাহ্ণ ০৯:২৮ (09:28AM) মধ্যে বীরাষ্টমী ব্রত ও মহাষ্টমী ব্রতোপবাস।</p>
                <p><span className='font-semibold'>সন্ধিপূজা :-</span>  দুপুর  0১:২১ (01:21PM) থেকে দুপুর ১:০৯ (02:09PM) এর মধ্যে।</p>
                <p><span className='font-semibold'>বলিদান :- </span>  দুপুর  0১:৪৫(01:45PM)গতে।</p>
            </div>

            <div className='bg-gradient-to-r from-orange-100/50 to-blue-100/50 w-full p-5 md:p-10 border border-gray-100
             flex flex-col md:flex-row justify-center items-center shadow-md rounded-md gap-4 md:gap-8 text-center md:text-left leading-relaxed'>
                <h1 className='text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-700 to-red-600 bg-clip-text text-transparent p-2'>মহানবমী</h1>
                <p className='poppins-semibold'>১৪ আশ্বিন (০১ অক্টোবর ২০২৫), বুধবার।</p>
                <p>মহানবমী ০১ অক্টোবর বুধবার দুপুর  0২ :৩৬ (02:36PM) পর্যন্ত।</p>
                <p>পূর্বাহ্ণ  ০৯:২৭ (09:27AM) মধ্যে (বারবেলানুরোধে সকাল ০৮:২৮ (08:28AM) মধ্যে) - শ্রীশ্রীশারদীয়া দুর্গাদেবীর কেবল মহানবমী কল্পারম্ভ ও মহানবমীবিহিত পূজা প্রশস্তা।</p>
                <p>শ্রীশ্রীশারদীয়া দুর্গাদেবীর নবরাত্রিক ব্রত সমাপন।</p>
                <p>পূর্বাহ্ণ ০৯:২৭ (09:27AM) মধ্যে বীরাষ্টমী ব্রত ও মহাষ্টমী ব্রতের পারণ।</p>
            </div>

            <div className='bg-gradient-to-r from-gray-100 to-purple-100 w-full p-5 md:p-10 border border-gray-100
             flex flex-col md:flex-row justify-center items-center shadow-md rounded-md gap-4 md:gap-8 text-center md:text-left leading-relaxed'>
                <h1 className='text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-700 to-red-600 bg-clip-text text-transparent p-2'>বিজয়া দশমী</h1>
                <p className='poppins-semibold'>১৫ আশ্বিন (০২ অক্টোবর ২০২৫), বৃহস্পতিবার।</p>
                <p>বিজয়াদশমী ০২ অক্টোবর বৃহস্পতিবার দুপুর  0২ :৫৫ (02:55PM) পর্যন্ত।</p>
                <p>পূর্বাহ্ণ ০৯:২৭ (09:27AM) মধ্যে দ্ব্যাত্মক চরলগ্নে ও চরণবাংশে - শ্রীশ্রীশারদীয়া দুর্গাদেবীর দশমীবিহিত পূজা সমাপনান্তে বিসর্জন প্রশস্তা।</p>
                <p>বিসর্জনান্তে শ্রীশ্রীঅপরাজিতা পূজা। বিজয়াদশমী কৃত্য।</p>
            </div>
        </div>

        <div className='py-10'>
          <button 
            onClick={schedulePage}
            className='px-3 py-2 shadow-lg border border-sky-300 bg-gradient-to-r from-blue-500 to-sky-400 text-lg font-semibold text-white rounded-md'>Program Schedule</button>
        
        </div>
      </div>
    </>
  )
}

export default Tithi