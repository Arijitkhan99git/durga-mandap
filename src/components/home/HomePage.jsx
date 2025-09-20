import React from 'react'
import Banner from './Banner'
import HeadBanner from './HeadBanner'
import { motion } from "motion/react"
import PujaDays from './PujaDays'
import { useNavigate } from 'react-router-dom';
import Historical from './Historical'
import PujoTheme from './PujoTheme'

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
      <div className=' w-full overflow-x-clip bg-gradient-to-r from-orange-100 to-blue-100 mt-[4rem] pb-5 md:pb-8'>
        <HeadBanner></HeadBanner>

        
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }} 
          whileInView={{ scale: 1, opacity: 1 }} 
          transition={{ duration: 1, ease: "easeInOut" }} 
          viewport={{ once: true, amount: 0.5 }} 
          className='px-6  py-8  text-center space-y-1 '>
          <h3 className='text-lg font-semibold bg-gradient-to-r from-gray-400 via-red-700 to-teal-400 bg-clip-text text-transparent'>পরিচালনায়:</h3>
          <h1 className='text-2xl py-1 md:text-3xl font-bold bg-gradient-to-r from-orange-700 to-red-600 bg-clip-text text-transparent'>বাঁকাদহ সর্বজনীন দুর্গোৎসব কমিটি</h1>
          
        </motion.div>
        
        <PujaDays></PujaDays>
        <Banner></Banner>

        <div className='px-6  flex justify-center gap-5 my-[5rem]'>
            <button 
            onClick={tithiPage}
            className='px-3 py-2 shadow-lg border border-sky-300 bg-gradient-to-r from-blue-500 to-sky-400 text-lg font-semibold text-white rounded-md'>Tithi</button>
            
            <button 
            onClick={schedulePage}
            className='px-3 py-2 shadow-lg border border-sky-300 bg-gradient-to-r from-blue-500 to-sky-400 text-lg font-semibold text-white rounded-md'>Program Schedule</button>
        
        </div>

       <PujoTheme></PujoTheme>
         {/* Historical Heritage Section */}
          <Historical></Historical>
      </div>
    </>
  )
}

export default HomePage