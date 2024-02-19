import React, { useEffect, useState } from 'react'
import foodsapi from '../App/foods'
import foods1 from '../assets/food1.svg'
import img1 from '../assets/food1.svg'
import star from '../assets/Star.svg'
import { NavLink, useNavigate } from 'react-router-dom'
const ParamsPG = ({pram}) => {
  let navg=()=>useNavigate()
  let {loading, foods, error,getFoods,idfood,getidFood}=foodsapi()
  let [one,setOne]=useState([])

  let func=()=>{
    let news=foods.filter((e)=>e.id===pram)
    setOne(news)
  }

  useEffect(()=>{
      func()
  },[])
  return (
    <div>
      {
        one.map((e,i)=>(
          <div className=' relative w-[146.93px] lg:w-[500.63px]  lg:h-[390.36px] rounded-[22.62px]  p-[17.92px]' key={i}>
                            {/* <img src={e.id%2?img1:img2} alt="alt" /> */}
                            <img onClick={()=>handalPage(e.id)} className='lg:w-[201.14px] cursor-pointer' src={img1} alt="alt" />
                            <div className='felx flex-col items-start'>
                             {e.button==='H'? <button className='lg:w-[58.9px] w-[38.52px] h-[14.53px] text-[#DAA31A] bg-[#F7EDD0] text-[7.47px] leading-[11.21px] font-normal rounded-[3.16px]'>Healthy</button>:null}
                             {e.button==='T'? <button className='lg:w-[58.9px] w-[42.11px] h-[14.33px] text-[#FB471D] bg-[#F7C5BA] text-[7.47px] leading-[11.21px] font-normal rounded-[3.16px]'>Trending</button>:null}
                             {e.button==='S'? <button className='lg:w-[58.9px] w-[42.11px] h-[14.33px] text-[#309D5B] bg-[#8cf0b4] text-[7.47px] leading-[11.21px] font-normal rounded-[3.16px]'>Supreme</button>:null}
                              <div className=''>
                                <p className='text-[15.08px] leading-[24.5px] font-semibold text-[#323142]'>{e.foodname}</p>
                                <div className='flex items-end'>
                                  <p className='text-[11.31px] leading-[15.08px] font-medium text-[#8E97A6]'>{e.time}min <li className='lis'></li></p>
                                  <img src={star} alt="alt" />
                                  <p className='text-[11.31px] leading-[15.08px] font-medium text-[#8E97A6]'>{e.stars}</p>
                                </div>
                              </div>
                              <div className='flex w-full justify-between items-center'>
                                <p className=' leading-[26.39px] text-[16.96px] text-[#323142] lg:text-[18.81px]'>${e.foodprice}.<span className='text-[#8E97A6] text-[12.3px] font-bold'>99</span></p>
                                {/* <button onClick={()=>korz(e.id)} className='w-[28.67px] lg:w-[43.83px] lg:h-[39.72px] lg:rounded-[8.93px] h-[28.67px] rounded-[5.84px] bg-[#323142] text-white'>+</button> */}
                              </div>
                            </div>
                            {/* <button className=' absolute top-0 lg:text-[25px] lg:top-1 lg:right-2 right-0'></button> */}
                          </div>
        ))
      }
      <div className='flex flex-col bg-'>
      {/* <button onClick={()=>navg('/dish')}>
        Go Dishish
      </button> */}
      {/* <button onClick={()=>navg('/')}>
        Go Home
      </button> */}
      <NavLink to='/' replace={true}>
        gohome
      </NavLink>
      </div>
    </div>
  )
}

export default ParamsPG
