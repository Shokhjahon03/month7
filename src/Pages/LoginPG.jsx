import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import vilp from '../assets/vilp.svg'
import grup from '../assets/group.svg'
import { NavLink, useNavigate } from 'react-router-dom'
const LoginPG = ({c,setC}) => {
  let users=JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : ''
  let navg=useNavigate()
  let [loginvals,setLogin]=useState({email:'',password:''})
  let [pas,setPas]=useState(true)
  let [t,setT]=useState(false)
  let [p,setP]=useState(false)
  let submited=(event)=>{
    event.preventDefault()
  }
  let func=()=>{
    if (loginvals.email!=='' && loginvals.password!=='') {
        if (loginvals.email===users.email && loginvals.password===users.pasword) {
          setC(true)
          // console.log('salom');
        }else{
          setP(true)
          setT(false)
        }
    }else{
      setT(true)
      setP(false)
    }
  }
  let func2=()=>{
    localStorage.setItem('user',null)
    navg('/sup')
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
              {/* <div className='w-full relative'><input className='w-full rounded-[11.52px] h-[60.09px] pl-[63.68px] text-[13.45px] leading-[20.18px] font-semibold text-[#A2A3A6] bg-[#EEEEEE] mb-[19.73px]' type="text" placeholder='Full Name' /><i className='bx bx-user absolute top-[21.53px] left-[19.73px] text-[#A2A3A6]'></i></div> */}
              <div className='w-full relative'><input value={loginvals.email} onChange={(e)=>setLogin({email:e.target.value,password:loginvals.password})} className='w-full rounded-[11.52px] h-[60.09px] pl-[63.68px] text-[13.45px] leading-[20.18px] font-semibold text-[#A2A3A6] bg-[#EEEEEE] mb-[19.73px]' type="email" placeholder='Email' /><i className='bx bx-envelope absolute top-[21.53px] left-[19.73px] text-[#A2A3A6]' ></i></div>
              <div className='w-full relative'><input value={loginvals.password} onChange={(e)=>setLogin({email:loginvals.email,password:e.target.value})} className='w-full rounded-[11.52px] h-[60.09px] pl-[63.68px] text-[13.45px] leading-[20.18px] font-semibold text-[#A2A3A6] bg-[#EEEEEE] mb-[19.73px]'  type={pas?"password":"text"} placeholder='Password' /><i className='bx bx-lock absolute top-[21.53px] left-[19.73px] text-[#A2A3A6]' ></i><button onClick={()=>setPas(!pas)}><i className='bx bxs-low-vision absolute top-[19.77px] right-[20.16px] text-[#C2C3CB]'></i></button><NavLink to='/sup' replace={true} onClick={()=>func2()} className='absolute bottom-0 right-0 text-[11.07px] leading-[16.6px] font-normal text-[#6C5FBC]'>Forget Password ?</NavLink></div>
              <button onClick={()=>func()} className='mt-[15px] w-full h-[60.09px] rounded-[12.56px] bg-[#6C5FBC] text-white'>
              SIGN IN
              </button>
          </form>
          <div className='mt-[18.83px] flex'>
          <p className=''>Create A New Account?</p>
          <NavLink  onClick={()=>func2()} className='text-[#6C5FBC]'>Sign UP</NavLink>
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
              {/* <div className='w-full relative'><input className='w-full rounded-[11.52px] h-[60.09px] pl-[63.68px] text-[13.45px] leading-[20.18px] font-semibold text-[#A2A3A6] bg-[#EEEEEE] mb-[19.73px]' type="text" placeholder='Full Name' /><i className='bx bx-user absolute top-[21.53px] left-[19.73px] text-[#A2A3A6]'></i></div> */}
              <div className='w-full relative'><input  value={loginvals.email} onChange={(e)=>setLogin({email:e.target.value,password:loginvals.password})} className='w-full rounded-[11.52px] h-[60.09px] pl-[63.68px] text-[13.45px] leading-[20.18px] font-semibold text-[#A2A3A6] bg-[#EEEEEE] mb-[19.73px]' type="email" placeholder='Email' /><i className='bx bx-envelope absolute top-[21.53px] left-[19.73px] text-[#A2A3A6]' ></i></div>
              <div className='w-full relative'><input  value={loginvals.password} onChange={(e)=>setLogin({email:loginvals.email,password:e.target.value})} className='w-full rounded-[11.52px] h-[60.09px] pl-[63.68px] text-[13.45px] leading-[20.18px] font-semibold text-[#A2A3A6] bg-[#EEEEEE] mb-[19.73px]' type={pas?"password":"text"} placeholder='Password' /><i className='bx bx-lock absolute top-[21.53px] left-[19.73px] text-[#A2A3A6]' ></i><button onClick={()=>setPas(!pas)}><i className='bx bxs-low-vision absolute top-[19.77px] right-[20.16px] text-[#C2C3CB]'></i></button><NavLink  className='absolute bottom-0 right-0 text-[11.07px] leading-[16.6px] font-normal text-[#6C5FBC]' to='/sup' replace={true} onClick={()=>func2()}>Forget Password ?</NavLink></div>
              <button onClick={()=>func()} className='mt-[15px] w-full h-[60.09px] rounded-[12.56px] bg-[#6C5FBC] text-white'>
              SIGN IN
              </button>
             {t?<p className=' text-red-500'>inputlar toliq emas</p>:null}
             {p?<p className=' text-red-500'>pasvord yoki email xato</p>:null}
          </form>
          <div className='mt-[18.83px] flex'>
          <p className=''>Create A New Account?</p>
          <NavLink onClick={()=>func2()} className='text-[#6C5FBC]'>Sign UP</NavLink>
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

export default LoginPG
