import React, { useState } from 'react'
import {NavLink, Link} from 'react-router-dom'
import { Menu } from 'react-feather'
import { X } from 'lucide-react';
import { pujaLogo } from '../../assets/banner'

function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    

    const closeMenu = () => {       
        setIsMenuOpen(false)
    }

       const handelMenu =()=>{      
       setIsMenuOpen(!isMenuOpen)
        
    }

    const openHomePage = ()=>{
        console.log("open home page");
        
    }
    
  return (
    <>
       <nav className='shadow-2xl fixed top-0 w-full bg-gradient-to-r from-orange-50 via-white to-red-50 backdrop-blur-md border-b border-gradient-to-r from-orange-200/50 to-red-200/50 h-[4.5rem] z-10'>
        {/* Enhanced decorative top border with pattern */}
        <div className='w-full h-1 bg-gradient-to-r from-orange-400 via-red-500 via-yellow-400 to-orange-400'></div>
        <div className='w-full h-[2px] bg-gradient-to-r from-transparent via-orange-300/50 to-transparent'></div>
        
        <div className='flex justify-between items-center py-2 px-6 lg:px-10'>
     
            <Link   
                to='/'
                className='flex items-center cursor-pointer group transition-all duration-300 hover:scale-105'>
                {/* Logo Section with Enhanced Effects */}
                <div className='relative flex-shrink-0'>
                    <img 
                        src={pujaLogo} 
                        alt='Puja Mandap Logo' 
                        className='w-[50px] lg:w-[55px] h-[50px] lg:h-[55px] object-contain drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-300'
                    />
                    {/* Enhanced glow effect around logo */}
                    <div className='absolute inset-0 bg-gradient-to-r from-orange-300/30 via-red-300/30 to-yellow-300/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                </div>
                
                {/* Brand Text Section */}
                <div className='ml-3 flex flex-col justify-center'>
                    <h1 className='text-xl lg:text-2xl xl:text-3xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 bg-clip-text text-transparent leading-tight group-hover:from-orange-500 group-hover:via-red-500 group-hover:to-orange-600 transition-all duration-300'>
                        Puja Mandap
                    </h1>
                    <div className='text-xs lg:text-sm bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent font-semibold leading-tight hidden lg:block whitespace-nowrap'>
                        দুর্গা পূজা ২০২৫
                    </div>
                </div>
            </Link>

            <div className='flex'>          
                {/* Enhanced Desktop Navigation */}
                <div  className='hidden md:flex '>             
                    <ul className='flex items-center gap-3 lg:gap-6 text-lg pr-2'>
                        <li>
                                <NavLink
                                to='/'
                                onClick={closeMenu}
                                
                                className={({isActive}) =>
                                `duration-300 px-3 py-2 rounded-lg font-medium relative overflow-hidden group
                                ${isActive 
                                    ? "text-white bg-gradient-to-r from-orange-500 to-red-500 shadow-lg" 
                                    : "text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-400"
                                }
                                before:absolute before:inset-0 before:bg-gradient-to-r before:from-orange-600 before:to-red-600 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100
                                transform hover:scale-105 transition-all` }
                                    >
                                    <span className="relative z-10">Home</span>
                                </NavLink>

                        </li>

                        <li>
                            <NavLink
                            to='/tithi'
                            onClick={closeMenu}
                                className={({isActive}) =>
                                    `duration-300 px-3 py-2 rounded-lg font-medium relative overflow-hidden group
                                    ${isActive 
                                        ? "text-white bg-gradient-to-r from-orange-500 to-red-500 shadow-lg" 
                                        : "text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-400"
                                    }
                                    before:absolute before:inset-0 before:bg-gradient-to-r before:from-orange-600 before:to-red-600 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100
                                    transform hover:scale-105 transition-all` }
                            >
                            <span className="relative z-10">Tithi</span>
                        </NavLink>
                        </li>

                        <li>                          
                                <NavLink
                                to='/schedule'
                                onClick={closeMenu}
                                    className={({isActive}) =>
                                        `duration-300 px-3 py-2 rounded-lg font-medium relative overflow-hidden group
                                        ${isActive 
                                            ? "text-white bg-gradient-to-r from-orange-500 to-red-500 shadow-lg" 
                                            : "text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-400"
                                        }
                                        before:absolute before:inset-0 before:bg-gradient-to-r before:from-orange-600 before:to-red-600 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100
                                        transform hover:scale-105 transition-all`  }
                                >
                                <span className="relative z-10">Program</span>
                            </NavLink>
                        </li>
                        <li>
                        <NavLink
                            to='/gallery'
                            onClick={closeMenu}
                            className={({isActive}) =>
                                `duration-300 px-3 py-2 rounded-lg font-medium relative overflow-hidden group
                                ${isActive 
                                    ? "text-white bg-gradient-to-r from-orange-500 to-red-500 shadow-lg" 
                                    : "text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-400"
                                }
                                before:absolute before:inset-0 before:bg-gradient-to-r before:from-orange-600 before:to-red-600 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100
                                transform hover:scale-105 transition-all` }
                            >
                            <span className="relative z-10">Gallery</span>
                        </NavLink>
                        </li>  

                        <li>
                            <NavLink
                                to='/about'
                                onClick={closeMenu}
                                className={({isActive}) =>
                                    `duration-300 px-3 py-2 rounded-lg font-medium relative overflow-hidden group
                                    ${isActive 
                                        ? "text-white bg-gradient-to-r from-orange-500 to-red-500 shadow-lg" 
                                        : "text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-400"
                                    }
                                    before:absolute before:inset-0 before:bg-gradient-to-r before:from-orange-600 before:to-red-600 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100
                                    transform hover:scale-105 transition-all` }
                            >
                            <span className="relative z-10">About Us</span>
                            </NavLink>
                        </li>  
                    </ul>
                                                        
                </div>

                  {/* Enhanced Mobile Menu Button */}
                <div className='flex items-center gap-6 mx-2 '>                                 

                    <button onClick={handelMenu} className='md:hidden p-2 rounded-lg bg-gradient-to-r from-orange-100 to-red-100 hover:from-orange-200 hover:to-red-200 transition-all duration-300 shadow-lg hover:shadow-xl border border-orange-200/50 hover:border-red-300/50'>
                        {!isMenuOpen &&  <Menu size={28} className="text-orange-600 hover:text-red-600 cursor-pointer transition-colors duration-300"></Menu>}
                        {isMenuOpen && <X size={28} className="text-red-600 hover:text-orange-600 cursor-pointer transition-colors duration-300"/>}
                           
                    </button>       
                        
                </div>
            
            </div>                 
        </div>  

         {/* Enhanced Mobile Menu with better styling */}
         <div  className={`${isMenuOpen ? 'block': 'hidden' }  md:hidden bg-gradient-to-br from-orange-50/95 via-red-50/95 to-yellow-50/95 backdrop-blur-md shadow-2xl border-t-2 border-gradient-to-r from-orange-300/70 to-red-300/70 space-y-1 py-6 px-6`}>             
            {/* Decorative line */}
            <div className='w-full h-[1px] bg-gradient-to-r from-transparent via-orange-400 to-transparent mb-4'></div>
            <ul className="space-y-2">
                <li>
                        <NavLink
                        to='/'
                        onClick={closeMenu}
                        className={({isActive}) =>
                        `block duration-300 px-4 py-3 rounded-lg font-medium relative overflow-hidden group
                        ${isActive 
                            ? "text-white bg-gradient-to-r from-orange-500 to-red-500 shadow-lg" 
                            : "text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-400"
                        }
                        before:absolute before:inset-0 before:bg-gradient-to-r before:from-orange-600 before:to-red-600 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100
                        transform hover:scale-105 transition-all`
                                }
                            >
                            <span className="relative z-10">🏠 Home</span>
                        </NavLink>

                </li>

                <li>
                    <NavLink
                    to='/tithi'
                    onClick={closeMenu}
                        className={({isActive}) =>
                            `block duration-300 px-4 py-3 rounded-lg font-medium relative overflow-hidden group
                            ${isActive 
                                ? "text-white bg-gradient-to-r from-orange-500 to-red-500 shadow-lg" 
                                : "text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-400"
                            }
                            before:absolute before:inset-0 before:bg-gradient-to-r before:from-orange-600 before:to-red-600 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100
                            transform hover:scale-105 transition-all`
                        }
                    >
                    <span className="relative z-10">📅 Tithi</span>
                </NavLink>
                </li>

                <li>                          
                        <NavLink
                        to='/schedule'
                         onClick={closeMenu}
                            className={({isActive}) =>
                                `block duration-300 px-4 py-3 rounded-lg font-medium relative overflow-hidden group
                                ${isActive 
                                    ? "text-white bg-gradient-to-r from-orange-500 to-red-500 shadow-lg" 
                                    : "text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-400"
                                }
                                before:absolute before:inset-0 before:bg-gradient-to-r before:from-orange-600 before:to-red-600 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100
                                transform hover:scale-105 transition-all`
                            }
                        >
                        <span className="relative z-10">🎭 Program Schedule</span>
                    </NavLink>
                </li>
                
                 <li>
                    <NavLink
                        to='/gallery'
                         onClick={closeMenu}
                            className={({isActive}) =>
                                `block duration-300 px-4 py-3 rounded-lg font-medium relative overflow-hidden group
                                ${isActive 
                                    ? "text-white bg-gradient-to-r from-orange-500 to-red-500 shadow-lg" 
                                    : "text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-400"
                                }
                                before:absolute before:inset-0 before:bg-gradient-to-r before:from-orange-600 before:to-red-600 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100
                                transform hover:scale-105 transition-all`
                            }
                        >
                        <span className="relative z-10">🖼️ Gallery</span>
                    </NavLink>
                </li>  

                <li>
                    <NavLink
                        to='/about'
                         onClick={closeMenu}
                            className={({isActive}) =>
                                `block duration-300 px-4 py-3 rounded-lg font-medium relative overflow-hidden group
                                ${isActive 
                                    ? "text-white bg-gradient-to-r from-orange-500 to-red-500 shadow-lg" 
                                    : "text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-400"
                                }
                                before:absolute before:inset-0 before:bg-gradient-to-r before:from-orange-600 before:to-red-600 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100
                                transform hover:scale-105 transition-all`
                            }
                        >
                        <span className="relative z-10">ℹ️ About Us</span>
                    </NavLink>
                </li>          
                       
            </ul>
            {/* Decorative bottom line */}
            <div className='w-full h-[1px] bg-gradient-to-r from-transparent via-red-400 to-transparent mt-4'></div>
                                                
        </div>


    </nav>
    </>
  

    
    
  )
}

export default Header