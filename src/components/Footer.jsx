import React from 'react'
import logo from '../assets/LLLL.svg'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='w-full mt-[160.03px] h-[220px] bg-[#EFEFEF]'>
      <div className="container">
        <div className='w-full flex flex-col items-center gap-y-[19px] pt-[55px]'>
          <div className='w-full border-b border-b-[#CBCBCB] pb-[58.75px] sm:pb-[20.62px] lg:pb-[29px] flex items-center justify-between'>
            <img className='w-[99.39px] h-[37.45px]' src={logo} alt="alt" />
            <div className='flex w-[115.21px] sm:hidden justify-between'>
            <i className='bx bxl-instagram'></i>
            <i className='bx bxl-linkedin'></i>
            <i className='bx bxl-facebook'></i>
            <i className='bx bxl-twitter'></i>
            </div>
          </div>
          <div className='sm:w-full sm:flex sm:justify-between sm:items-center'>
          <p className='text-[13.54px] lg:text-[17px] lg:leading-[25px] leading-[19.91px] font-medium text-[#70798B]'>© 2023 EATLY All Rights Reserved.</p>
          <div className=' hidden sm:flex w-[115.21px] lg:w-[234.46px] sm:w-[166.73px] justify-between'>
           <Link className=' cursor-grab' to='https://www.instagram.com/?utm_source=pwa_homescreen&__pwa=1'> <i className='bx bxl-instagram sm:text-[20px] lg:text-[25px] hover:text-[#6C5FBC] '></i></Link>
            <Link className=' cursor-grab' to='https://ru.linkedin.com/'><i className='bx bxl-linkedin sm:text-[20px] lg:text-[25px] hover:text-[#6C5FBC] '></i></Link>
            <Link className=' cursor-grab' to='https://www.facebook.com/?locale=ru_RU'><i className='bx bxl-facebook sm:text-[20px] lg:text-[25px] hover:text-[#6C5FBC] '></i></Link>
            <Link className=' cursor-grab' to='https://twitter.com/home?lang=ru'><i className='bx bxl-twitter sm:text-[20px] lg:text-[25px] hover:text-[#6C5FBC] '></i></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
