import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import vilp from '../assets/vilp.svg'
import grup from '../assets/group.svg'
import { NavLink, useNavigate } from 'react-router-dom'

const SiginUpPG = () => {
  let [values,setValues]=useState({name:'',email:'',pasword:''})
  let navg=useNavigate()
  let [pas,setPas]=useState(true)
  let submited=(event)=>{
    event.preventDefault()
  }

  let Savedatas=()=>{
    if (values.name!=='' && values.email!=='' && values.pasword!=='') {
      localStorage.setItem('user',JSON.stringify(values))
      navg('/',{replace:true})
      console.log('salom');
    }
    console.log('salom');
  }

  return (
    <>
     <div className='sm:hidden'>
      <Navbar/>
      </div> 
      <div className='mt-[180px] sm:hidden'>
        <div className="container">
         <div className='w-full flex flex-col items-center'>
         <p className='text-[28.44px] leading-[35.55px] font-semibold'>Sign Up To eatly</p>
          <form onSubmit={submited} className='w-[309.41px] flex flex-col items-center mt-[41px]'>
              <div className='w-full relative'>
                <input value={values.name} onChange={(e)=>setValues({name:e.target.value,email:values.email,pasword:values.pasword})} className='w-full rounded-[11.52px] h-[60.09px] pl-[63.68px] text-[13.45px] leading-[20.18px] font-semibold text-[#A2A3A6] bg-[#EEEEEE] mb-[19.73px]' type="text" placeholder='Full Name' />
                <i className='bx bx-user absolute top-[21.53px] left-[19.73px] text-[#A2A3A6]'></i>
              </div>
              <div className='w-full relative'>
                <input value={values.email} onChange={(e)=>setValues({name:values.name,email:e.target.value,pasword:values.pasword})} className='w-full rounded-[11.52px] h-[60.09px] pl-[63.68px] text-[13.45px] leading-[20.18px] font-semibold text-[#A2A3A6] bg-[#EEEEEE] mb-[19.73px]' type="email" placeholder='Email' />
                <i className='bx bx-envelope absolute top-[21.53px] left-[19.73px] text-[#A2A3A6]' ></i>
              </div>
              <div className='w-full relative'>
                <input value={values.pasword} onChange={(e)=>setValues({name:values.name,email:values.email,pasword:e.target.value})} className='w-full rounded-[11.52px] h-[60.09px] pl-[63.68px] text-[13.45px] leading-[20.18px] font-semibold text-[#A2A3A6] bg-[#EEEEEE] mb-[19.73px]' type={pas?"password":"text"} placeholder='Password' />
                <i className='bx bx-lock absolute top-[21.53px] left-[19.73px] text-[#A2A3A6]' ></i>
                <button onClick={()=>setPas(!pas)}><i className='bx bxs-low-vision absolute top-[19.77px] right-[20.16px] text-[#C2C3CB]'></i></button>
                </div>
              <button onClick={()=>Savedatas()} className='w-full h-[60.09px] rounded-[12.56px] bg-[#6C5FBC] text-white'>
              SIGN UP
              </button>
          </form>
          <div className='mt-[18.83px] flex'>
          <p className=''>Already Have An Account?</p>
          <NavLink className='text-[#6C5FBC]'>Log In</NavLink>
          </div>
         </div>
        </div>
      </div>
      <div className='hidden sm:flex w-full h-dvh '>
          <div className='w-[54%] h-dvh pt-[32px] pl-[48px] pr-[48px]'>
            <img src={vilp} alt="alt" />
            <div className='mt-[80px]'>
            <div className='w-full flex flex-col items-center'>
         <p className='text-[28.44px] leading-[35.55px] font-semibold'>Sign Up To eatly</p>
          <form onSubmit={submited} className='w-[309.41px] flex flex-col items-center mt-[41px]'>
              <div className='w-full relative'><input  value={values.name} onChange={(e)=>setValues({name:e.target.value,email:values.email,pasword:values.pasword})} className='w-full rounded-[11.52px] h-[60.09px] pl-[63.68px] text-[13.45px] leading-[20.18px] font-semibold text-[#A2A3A6] bg-[#EEEEEE] mb-[19.73px]' type="text" placeholder='Full Name' /><i className='bx bx-user absolute top-[21.53px] left-[19.73px] text-[#A2A3A6]'></i></div>
              <div className='w-full relative'><input value={values.email} onChange={(e)=>setValues({name:values.name,email:e.target.value,pasword:values.pasword})} className='w-full rounded-[11.52px] h-[60.09px] pl-[63.68px] text-[13.45px] leading-[20.18px] font-semibold text-[#A2A3A6] bg-[#EEEEEE] mb-[19.73px]' type="email" placeholder='Email' /><i className='bx bx-envelope absolute top-[21.53px] left-[19.73px] text-[#A2A3A6]' ></i></div>
              <div className='w-full relative'><input value={values.pasword} onChange={(e)=>setValues({name:values.name,email:values.email,pasword:e.target.value})} className='w-full rounded-[11.52px] h-[60.09px] pl-[63.68px] text-[13.45px] leading-[20.18px] font-semibold text-[#A2A3A6] bg-[#EEEEEE] mb-[19.73px]' type={pas?"password":"text"}  placeholder='Password' /><i className='bx bx-lock absolute top-[21.53px] left-[19.73px] text-[#A2A3A6]' ></i><button  onClick={()=>setPas(!pas)}><i className='bx bxs-low-vision absolute top-[19.77px] right-[20.16px] text-[#C2C3CB]'></i></button></div>
              <button onClick={()=>Savedatas()}  className='w-full h-[60.09px] rounded-[12.56px] bg-[#6C5FBC] text-white'>
              SIGN UP
              </button>
          </form>
          <div className='mt-[18.83px] flex'>
          <p className=''>Already Have An Account?</p>
          <NavLink className='text-[#6C5FBC]'>Log In</NavLink>
          </div>
         </div>
            </div>
            <div className='w-full flex justify-between mt-[50px]'>
              <p className='text-[16px] leading-[16px] font-medium text-[#718096]'>Privacy Policy</p>
              <p className='text-[16px] leading-[16px] font-medium text-[#718096]'>Copyright 2022</p>
            </div>
          </div>
          <div className='flex w-[46%] flex-col items-center h-dvh bg-[#6C5FBC]'>
            <img className='w-[546px] h-[415.42px] mt-[129px]' src={grup} alt="alt" />
            <p className='text-white text-[40px] leading-[44px] font-extrabold mb-[20px] text-center'>Find Foods With Love </p>
            <p className='text-[#FFFFFF] text-[14px] text-center leading-[21px] font-medium'>
            Eatly Is The Food Delivery Dashboard And Having More Than 2K+ Dishes Including Asian, Chinese, Italians And Many More. Our Dashboard Helps You To Manage Orders And Money.
            </p>
          </div>
      </div>
    </>
  )
}

export default SiginUpPG
