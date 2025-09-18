import React from 'react'
import { durgaTenHands } from '../../assets/banner/index'
import { pujaLogo } from '../../assets/banner'
import { Mail } from 'lucide-react';
import { Facebook } from 'lucide-react';

function Footer() {
  return (
    <div 
        style={{backgroundImage:`url(${durgaTenHands})`}} 
          className=' bg-cover bg-center overflow-hidden '
       >
        <div className="w-full py-10 px-12
        space-y-8 bg-black/60 backdrop-blur-xs">

          {/* upper section */}
          <div className='flex flex-col md:flex-row w-full max-w-7xl mx-auto justify-around gap-10 '>
            {/* contact us */}
            <div className='text-white space-y-4  flex flex-col items-center md:items-start'>
              <img src={pujaLogo} alt='Logo' className='w-[60px] '></img>
              <h2 className='text-2xl poppins-semibold '>Contact Us</h2>
              <div className='gap-2 flex'>
                <Mail/>
                <p>bankadaha_Sarbojanin@gmail.com</p>
              </div>              
            </div>
              
              {/* organized by */}
            <div className='text-white space-y-4 flex flex-col items-center md:items-start'>
                <h1 className='text-2xl poppins-semibold text-orange-600'>Organized By</h1>
                <h1 className='text-2xl  md:text-3xl font-bold text-center'>বাঁকাদহ সর্বজনীন দুর্গোৎসব কমিটি</h1>
                <div className='gap-2 flex items-center'>
                  <Facebook size={35} strokeWidth={1.5} className='bg-primary p-1 rounded-full'/>
                  <a href="https://www.facebook.com/profile.php?id=100064645337825&mibextid=ZbWKwL"
                    target='_blank'
                  >facebook</a>
              </div>
            </div>

          </div> 
          {/* lower section */}

          <div className='space-y-6 text-gray-400 text-center'>
              <div className='w-full bg-gray-400 h-[1px]'> </div>
              <p>© 2025 Bankadah Sarbojonin Durga Utsav Committee. All rights reserved.</p>
          </div>
        </div>
    </div>
  )
}

export default Footer