import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import { Menu } from 'react-feather'
import { pujaLogo } from '../../assets/banner'

function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    

    const closeMenu = () => {       
        setIsMenuOpen(false)
    }

       const handelMenu =()=>{      
       setIsMenuOpen(!isMenuOpen)
        
    }
    
  return (
    <>
       <nav className='shadow-md fixed top-0 w-full bg-white h-[4rem] z-10'>
        <div className='flex justify-between py-1 px-6 lg:px-10'>
     
            <div className='flex  items-center'>
                <img src={pujaLogo} alt='Logo' className='w-[40px] m-2'></img>
                <h1 className='text-xl lg:text-2xl font-bold text-orange-600 p-2'>Puja Mandap</h1>
            </div>

            <div className='flex'>          
                {/* Desktop View */}
                <div  className='hidden md:flex '>             
                    <ul className='flex items-center gap-3 lg:gap-5  text-lg pr-2'>
                        <li>
                                <NavLink
                                to='/'
                                onClick={closeMenu}
                                
                                className={({isActive}) =>
                                ` duration-200 p-2
                                ${isActive ? "text-orange-700" : "text-gray-700"}
                                hover:text-blue-700` }
                                    >
                                       Home
                                </NavLink>

                        </li>

                        <li>
                            <NavLink
                            to='/tithi'
                            onClick={closeMenu}
                                className={({isActive}) =>
                                    ` duration-200 p-2                        
                                    ${isActive ? "text-orange-700" : "text-gray-700"}
                                    hover:text-blue-700` }
                            >
                            Tithi
                        </NavLink>
                        </li>

                        <li>                          
                                <NavLink
                                to='/schedule'
                                onClick={closeMenu}
                                    className={({isActive}) =>
                                        ` duration-200 p-2
                                        ${isActive ? "text-orange-700" : "text-gray-700"}
                                        hover:text-blue-700 `  }
                                >
                                    Program
                            </NavLink>
                        </li>

                            <li>
                            <NavLink
                                to='/about'
                                onClick={closeMenu}
                                className={({isActive}) =>
                                    ` duration-200 p-2                        
                                    ${isActive ? "text-orange-700" : "text-gray-700"}
                                    hover:text-blue-700` }
                            >
                            About Us
                        </NavLink>
                        </li>  
                    </ul>
                                                        
                </div>

                  {/* user Menu */}
                <div className='flex items-center gap-6 mx-6 '>                                 

                    <button onClick={handelMenu} className='md:hidden '>
                            <Menu className="h-6 w-6 text-gray-800 cursor-pointer"></Menu>
                    </button>       
                        
                </div>
            
            </div>                 
        </div>  

         {/* Mobile Menu*/}
         <div  className={`${isMenuOpen ? 'block': 'hidden' }  md:hidden bg-gradient-to-r from-gray-300 to-red-300 space-y-2 py-6 px-6`}>             
            <ul>
                <li>
                        <NavLink
                        to='/'
                        onClick={closeMenu}
                        className={({isActive}) =>
                        `block duration-200 p-2
                        ${isActive ? "text-orange-700" : "text-gray-700"}
                              hover:text-blue-700`
                                }
                            >
                                Home
                        </NavLink>

                </li>

                <li>
                    <NavLink
                    to='/tithi'
                    onClick={closeMenu}
                        className={({isActive}) =>
                            `block duration-200 p-2                        
                            ${isActive ? "text-orange-700" : "text-gray-700"}
                             hover:text-blue-700`
                        }
                    >
                    Tithi
                </NavLink>
                </li>

                <li>                          
                        <NavLink
                        to='/schedule'
                         onClick={closeMenu}
                            className={({isActive}) =>
                                `block duration-200 p-2
                                ${isActive ? "text-orange-700" : "text-gray-700"}
                                 hover:text-blue-700 `
                            }
                        >
                            Program Schedule
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to='/about'
                         onClick={closeMenu}
                            className={({isActive}) =>
                                `block  duration-200 p-2                       
                                ${isActive ? "text-orange-700" : "text-gray-700"}
                                 hover:text-blue-700 `
                            }
                        >About Us
                    </NavLink>
                </li>          
            </ul>
                                                
        </div>


    </nav>
    </>
  

    
    
  )
}

export default Header