import React from 'react'
import {galleryBanner} from '../../assets/banner/index'

function Gallery() {

    const data =[
       
        {
            img:'https://res.cloudinary.com/dsi5vhuqh/image/upload/v1758276873/IMG-20250825-WA0057_fkp54n.jpg',
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
            img:'https://res.cloudinary.com/dsi5vhuqh/image/upload/v1758275965/IMG-20250825-WA0008_iu6lxl.jpg',
            title:'Day 1'
        },
        {
            img:'https://res.cloudinary.com/dsi5vhuqh/image/upload/v1758275964/IMG-20250825-WA0007_ntybsq.jpg',
            title:'Day 12'
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
            img:'https://res.cloudinary.com/dsi5vhuqh/image/upload/v1758277502/DSC_4875_1_pkrq7o.jpg',
            title:'kashful 1'
        },
        {
            img:'https://res.cloudinary.com/dsi5vhuqh/image/upload/v1758277502/DSC_4915_2_yzrcxl.jpg',
            title:'kashful 2'
        },
        {
            img:'https://res.cloudinary.com/dsi5vhuqh/image/upload/v1758275931/IMG-20250825-WA0040_s9q5g7.jpg',
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

        
    ]
  return (

    <div className='w-full overflow-x-clip mt-[4rem] text-primary flex flex-col justify-center items-center pb-5 md:pb-8 
    bg-gradient-to-r from-orange-100 via-sky-100 to-red-100'>       
        <div className='w-full '>
        <img src={galleryBanner} alt="pujaDhunuchNaach" />
        </div>

        <div className='w-full max-w-7xl mx-auto px-12  flex flex-col justify-center items-center'>
            <h1 className='text-2xl md:text-3xl font-bold text-center p-8
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

           
        </div>
    </div>
  )
}

export default Gallery