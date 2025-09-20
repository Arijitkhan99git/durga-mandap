import React,{useEffect} from 'react'
import {galleryBanner} from '../../assets/banner/index'
import { useNavigate } from 'react-router-dom';

function Gallery() {

     const navigate = useNavigate()

    const  aboutUsPage= ()=>{
      navigate('/about')
    }
     useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }, []);
    
    const data =[
       
        {
            img:'https://res.cloudinary.com/dsi5vhuqh/image/upload/v1758283397/Durga_Maa_Full_frame_g7epf2.jpg',
            title:'Full frame'
        },
        {
            img:'https://res.cloudinary.com/dsi5vhuqh/image/upload/v1758276057/DSC_4488_k4h2zf.jpg',
            title:'Making 4'
        },
        {
            img:'https://res.cloudinary.com/dsi5vhuqh/image/upload/v1758275970/DSC_4531_1_b6rmgl.jpg',
            title:'Making 2'
        },
        {
            img:'https://res.cloudinary.com/dsi5vhuqh/image/upload/v1758281524/IMG-20250825-WA0007_kkip83.jpg',
            title:'Day 1'
        },
         {
            img:'https://res.cloudinary.com/dsi5vhuqh/image/upload/v1758281524/IMG-20250825-WA0008_avoruf.jpg',
            title:'Day 12'
        },
        {
            img:'https://res.cloudinary.com/dsi5vhuqh/image/upload/v1758277502/DSC_4875_1_pkrq7o.jpg',
            title:'kashful 1'
        },
        {
            img:'https://res.cloudinary.com/dsi5vhuqh/image/upload/v1758276878/durgapuja_2024_1_o27fhj.jpg',
            title:'Vasan'
        },
        {
            img:'https://res.cloudinary.com/dsi5vhuqh/image/upload/v1758276873/durgapuja_2024_2_hbyxxi.jpg',
            title:'Vasahn 2'
        },
        
        {
            img:'https://res.cloudinary.com/dsi5vhuqh/image/upload/v1758277502/DSC_4915_2_yzrcxl.jpg',
            title:'kashful 2'
        },
        {
            img:'https://res.cloudinary.com/dsi5vhuqh/image/upload/v1758281876/IMG-20250825-WA0040_gtogal.jpg',
            title:'Vasahn 3'
        },
        {
            img:'https://res.cloudinary.com/dsi5vhuqh/image/upload/v1758275654/IMG-20250825-WA0043_ehboiq.jpg',
            title:'Maa Durga'
        },
        {
            img:'https://res.cloudinary.com/dsi5vhuqh/image/upload/v1758277534/Maa_Durga_2023_ueao3q.jpg',
            title:'Durga Maa 2023'
        },
        {
            img:'https://res.cloudinary.com/dsi5vhuqh/image/upload/v1758279164/kashful_1_jm9nzf.jpg',
            title:'kashful 3'
        },
        {
            img:'https://res.cloudinary.com/dsi5vhuqh/image/upload/v1758276054/DSC_4570_etdhj1.jpg',
            title:'Making 3'
        },
       
        {
            img:'https://res.cloudinary.com/dsi5vhuqh/image/upload/v1758275971/DSC_4544_1_1_vqbnjz.jpg',
            title:'Making 1'
        },
        
        {
            img:'https://res.cloudinary.com/dsi5vhuqh/image/upload/v1758388292/WhatsApp_Image_2025-09-19_at_18.06.25_cc379908_zaadtz.jpg',
            title:'group 1'
        },

         {
            img:'https://res.cloudinary.com/dsi5vhuqh/image/upload/v1758388291/WhatsApp_Image_2025-09-20_at_08.25.21_491ad821_ut0w9z.jpg',
            title:'group 2'
        },
         {
            img:'https://res.cloudinary.com/dsi5vhuqh/image/upload/v1758388291/WhatsApp_Image_2025-09-19_at_18.16.15_d658789c_mfn49f.jpg',
            title:'front 1'
        },
         {
            img:'https://res.cloudinary.com/dsi5vhuqh/image/upload/v1758388291/WhatsApp_Image_2025-09-19_at_18.10.21_f3545185_pe3pat.jpg',
            title:'front 2'
        },
         {
            img:'https://res.cloudinary.com/dsi5vhuqh/image/upload/v1758388291/WhatsApp_Image_2025-09-19_at_18.14.55_3ad848a4_ujxmt8.jpg',
            title:'old me'
        },
        
        
    ]
  return (

    <div className='w-full overflow-x-clip mt-[4rem] text-primary flex flex-col justify-center items-center pb-5 md:pb-8 
    bg-gradient-to-r from-orange-100 via-sky-100 to-red-100'>       
        <div className='w-full '>
        <img src={galleryBanner} alt="pujaDhunuchNaach" />
        </div>

        <div className='w-full max-w-7xl mx-auto px-8 md:px-12  flex flex-col justify-center items-center'>
            <h1 className='text-3xl md:text-5xl poppins-bold text-center p-8
            bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent'>Image Gallery</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full mx-auto pt-5 mb-[4rem]'>
                {
                    data.map((item, index)=>(
                        <div key={index}>
                            <img 
                                src={item.img}
                                alt="drive" 
                                className='rounded-lg shadow-md'
                                />
                        </div>
                    ))
                }
            </div>
            
           <div className='py-10'>
            <button 
                onClick={aboutUsPage}
                className='px-3 py-2 shadow-lg border border-sky-300 bg-gradient-to-r from-blue-500 to-sky-400 text-lg font-semibold text-white rounded-md'>About Us</button>
            
            </div>
        </div>
    </div>
  )
}

export default Gallery