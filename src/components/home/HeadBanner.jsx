import React from 'react'
import { bannerImg } from '../../assets/banner/index'
import { easeInOut, motion } from "motion/react"

function HeadBanner() {
  return (
    <>
        <motion.div 
            initial={{x:"5rem", opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{
                delay:0.5,
                duration:2,
                ease:'easeInOut'
            }}
        style={{backgroundImage:`url(${bannerImg})`}} 
        className=' bg-cover bg-center overflow-hidden sm:py-4  '>
            
            <motion.div 
                initial={{y:"5rem", opacity:0}}
                animate={{y:0, opacity:1}}
                transition={{
                    delay:1.5,
                    duration:2,
                    ease:'easeInOut'
                    }}
            className='space-y-4 md:space-y-6 lg:space-y-8 px-6 md:px-8 lg:px-12  p-10 sm:w-[65%] md:w-[60%] xl:w-[40%] lg:leading-14'>
                
                <div              
                    className=' text-sm md:text-lg lg:text-xl space-y-1 md:space-y-2 my-4 md:my-8 '>
                    <h4 className='text-amber-200'>শ্রী শ্রী দুর্গা মাতায় নমঃ।</h4>
                    <h4 className='text-white'>"যা দেবী সর্বভূতেষু শক্তিরূপেণ সংস্থিতা।</h4>
                    <h4 className='text-white'>নমস্তস্যৈ নমস্তস্যৈ নমস্তস্যৈ নমো নমঃ॥"</h4>
                </div>
                   
                <h4 className="font-bold max-w-[60%] text-lg sm:text-xl md:text-2xl lg:text-3xl md:pt-6 
                bg-gradient-to-r from-sky-600 to-white bg-clip-text text-transparent leading-relaxed">
                    শ্রী শ্রী শারদীয় সর্বজনীন দুর্গোৎসব ~ ২০২৫ <br />৫৮ তম বর্ষ
                </h4>
                <h1 className='font-extrabold text-3xl md:text-4xl lg:text-5xl md:pb-6
                 leading-relaxed  bg-gradient-to-r from-yellow-600 to-white bg-clip-text text-transparent'>
                    শারদীয় শুভেচ্ছা
                </h1>
                
            </motion.div>
        </motion.div>
    </>
  )
}

export default HeadBanner