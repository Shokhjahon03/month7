import React, { useState } from 'react'
import food1 from '../assets/food1.svg'
const Take = ({data,minus}) => {
    let [n,setN]=useState(1)
  return (
    <div>
       {
        data.map((e,i)=>(
            <div className='kk w-[315.61px] h-[66.12px] pr-[15.39px] pl-[6.99px] flex justify-between items-center bg-white rounded-[7.18px] mb-[20.22px]' key={i}>
               <div className='flex items-center gap-x-[8.38px]'>
                 <img className='w-[59.24px] h-[61.4px]' src={food1} alt="alt" />
                 <div className=''>
                   <p className='text-[13.2px] leading-[18.48px] font-semibold text-[#323142]'>{e.foodname}</p>
                   <p className='text-[10.8px] leading-[15.12px] font-semibold text-[#323142]'>${e.foodprice}.99</p>
                 </div>
               </div>
               <div className='w-[63.65px] flex flex-col items-center'>
                 <div className='w-full flex justify-between items-center mb-[5.07px]'>
                   <button onClick={()=>setN(n>0? n-1:0)} className='w-[20.02px] h-[18.93px] rounded border border-[#323142] flex justify-center items-center'>-</button>
                   <p className='text-[10.55px] leading-[14.78px] font-normal'>0{n}</p>
                   <button onClick={()=>setN(n+1)} className='w-[20.02px] h-[18.93px] bg-[#323142] rounded flex justify-center items-center text-white'>+</button>
                 </div>
                 <p className='text-[9.57px] leading-[13.4px] font-semibold text-[#323142]'>${n*(Number(e.foodprice)+0.99)  }</p>
               </div>
             </div>
        ))
       }
    </div>
  )
}

export default Take
