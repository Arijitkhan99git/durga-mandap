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

          <div className='text-center  md:text-lg  poppins-medium py-[1rem] md:py-[3rem] space-y-5 w-full max-w-7xl'>
             <h1 className='font-extrabold text-3xl md:text-4xl lg:text-5xl md:pb-6
            leading-relaxed tracking-wide bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent'>
            অনুষ্ঠান সূচী
          </h1>
          </div>
         
        </div>     
    </>
  )
}

export default Schedule