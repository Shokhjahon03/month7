import React, { useState } from 'react'
import logo from '../assets/LLLL.svg'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    let[burder,setBurger]=useState(false)
  return (
    <nav className='pt-[33px] fixed top-0 left-0 w-full bg-white z-20'>
     <div className="container">
        <div className='w-full flex items-center justify-between sm:justify-start sm:gap-[73.4px] md:gap-[103.12px] border-b pb-[30px]'>
            <img className='sm:w-[80px] sm:h-[30.09px]' src={logo} alt="alt" />
            <button onClick={()=>setBurger(!burder)} className=' sm:hidden'>
            <i className='bx bx-menu text-[45px] font-normal'></i>
            </button>
            <div className='hidden  sm:flex justify-between items-center w-[1022px]'>
                <ul className='flex w-[115.03px] justify-between lg:w-[162.49px]'>
                    <NavLink className=' font-medium text-[12.68px] text-[#606060] hover:text-[#6C5FBC] lg:text-[17.83px]'>Home</NavLink>
                    <NavLink className=' font-medium text-[12.68px] text-[#606060] hover:text-[#6C5FBC] lg:text-[17.83px]'>Dishes</NavLink>
                </ul>
                <div className='flex md:w-[208.74px] w-[200px] justify-between'>
                    <button className=''><i className='bx bx-cart text-[#606060] text-[25px] hover:text-[#6C5FBC]'></i></button>
                    <div className='flex justify-between w-[165.41px] '>
                    <button className='w-[73.03px] h-[45.36px] text-[12.68px] font-semibold rounded-[12.68px] text-[#606060] hover:bg-[#6C5FBC] hover:text-white'>Login</button>
                    <button className='pl-[15.02px] pr-[15.02px] text-[12.68px] font-semibold  w-[106.03px] h-[45.36px] rounded-[12.68px] text-[#606060] hover:bg-[#6C5FBC] hover:text-white'>Sigin Up</button>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    <div className={burder?'plus sm:hidden p-3':'minus sm:hidden'}>
        <div className='flex flex-col gap-4 w-full'>
        <NavLink  className='hh flex w-full justify-between text-white border-b'>
            <p>Korzinka </p>
            <button className=''><i className='bx bx-cart text-white text-[25px]'></i></button>
        </NavLink>
        <NavLink className='hh flex w-full justify-between text-white border-b'>
            <p>Home </p>
            <button className=''><i className='bx bx-home text-white text-[25px]'  ></i></button>
        </NavLink>
        <NavLink className='hh flex w-full justify-between text-white border-b'>
            <p>Dishes </p>
            <button className=''><i className='bx bx-dish text-[25px]' ></i></button>
        </NavLink>
        <button className='text-white bg-[#344e4e] h-[45px] rounded-lg hover:bg-gray-200 hover:text-blue-600'>Sigin Up</button>
        <button className='text-white bg-[#344e4e] h-[45px] rounded-lg hover:bg-gray-200 hover:text-blue-600'>Login</button>
        </div>
    </div>
    </nav>
  )
}

export default Navbar
