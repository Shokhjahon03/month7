import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import foodsapi from '../App/foods'
import img1 from '../assets/food1.svg'
import star from '../assets/Star.svg'
import { useNavigate } from 'react-router-dom'
const AllCardsPG = ({x,setX,setParam}) => {
  let navg=useNavigate()
  let [heart,setHeart]=useState(true)
  let [pm,setPm]=useState(false)
  let [pm2,setPm2]=useState(false)
  let [pm3,setPm3]=useState(false)
  let [pm4,setPm4]=useState(false)
  let [pm5,setPm5]=useState(false)
  let ii=JSON.parse(localStorage.getItem('val'))?JSON.parse(localStorage.getItem('val')):[]
  let {loading, foods, error,getFoods,idfood,getidFood}=foodsapi()
  let korz=(id)=>{
    setX(x+1)
    let news=foods.filter((e)=>e.id===id)
        localStorage.setItem('val',JSON.stringify([...ii,...news]))
  }
  useEffect(()=>{
    getFoods()
  },[])
  let handalPage=(id)=>{
    setParam(id)
    navg('/parm')
  }
  return (
    <>
      <Navbar x={x} />

      <div className='container'>
      <div className=' w-full flex sm:flex  flex-wrap justify-center gap-y-[41.67px] gap-x-[21.07px] mt-[186px] border-b pb-[57.67px]'>
                      {
                        foods.map((e,i)=>(
                          <div className='cc relative w-[146.93px] lg:w-[224.63px] lg:h-[390.36px] rounded-[22.62px]  p-[17.92px]' key={i}>
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
                                <button onClick={()=>korz(e.id)} className='w-[28.67px] lg:w-[43.83px] lg:h-[39.72px] lg:rounded-[8.93px] h-[28.67px] rounded-[5.84px] bg-[#323142] text-white'>+</button>
                              </div>
                            </div>
                            <button className=' absolute top-0 lg:text-[25px] lg:top-1 lg:right-2 right-0' onClick={()=>setHeart(!heart)}>{heart ? <i className='bx bx-heart' ></i>:<i className='bx bxs-heart' ></i>}</button>
                          </div>
                        ))
                      }
                    </div>
      </div>
      <section className='w-full mt-[103.47px]'>
                  <div className="container">
                    <div className='w-full flex flex-col items-center'>
                        <p className='text-center mb-[67.01px] text-[23.64px] leading-[28.37px] font-semibold'>Frequently Asked <br /> <span className='text-[#6C5FBC]'>Questions</span></p>
                        <div className='w-full flex flex-col'>
                            <div className='w-full mb-[15.41px] pb-[41px] border-b'>
                              <div className='flex justify-between items-center w-full'>
                                <p className='text-[12.3px] leading-[31.12px] font-semibold text-[#323142] lg:text-[16.65px] lg:leading-[42.13px]'>How long does delivery take?</p>
                                <button onClick={()=>setPm(!pm)} className='flex justify-center items-center w-[15.82px] h-[15.82px] rounded-full bg-[#6C5FBC] text-white lg:w-[21.42px] lg:h-[21.42px]'>{pm?'-':'+'}</button>
                              </div>
                              <p className={pm?'w-full h-[30px] text-[11px] leading-[17.6px] font-normal lg:text-[14.22px] lg:leading-[22.76px] text-[#686868]':'hidden'}>
                              You Can Get Information By Contacting Our Support Team Have 24/7 Service. Whats The Difference Between Free And Paid Plan ?
                              </p>
                            </div>
                            <div className='w-full mb-[15.41px] pb-[41px] border-b'>
                              <div className='flex justify-between items-center w-full'>
                                <p className='text-[12.3px] leading-[31.12px] font-semibold text-[#323142] lg:text-[16.65px] lg:leading-[42.13px]'>How Does It Work ?</p>
                                <button onClick={()=>setPm2(!pm2)} className='flex justify-center items-center w-[15.82px] h-[15.82px] rounded-full bg-[#6C5FBC] text-white lg:w-[21.42px] lg:h-[21.42px]'>{pm2?'-':'+'}</button>
                              </div>
                              <p className={pm2?'w-full h-[30px] text-[11px] leading-[17.6px] font-normal lg:text-[14.22px] lg:leading-[22.76px] text-[#686868]':'hidden'}>
                              You Can Get Information By Contacting Our Support Team Have 24/7 Service. Whats The Difference Between Free And Paid Plan ?
                              </p>
                            </div>
                            <div className='w-full mb-[15.41px] pb-[41px] border-b'>
                              <div className='flex justify-between items-center w-full'>
                                <p className='text-[12.3px] leading-[31.12px] font-semibold text-[#323142] lg:text-[16.65px] lg:leading-[42.13px]'>How does your food delivery service work?</p>
                                <button onClick={()=>setPm3(!pm3)} className='flex justify-center items-center w-[15.82px] h-[15.82px] rounded-full bg-[#6C5FBC] text-white lg:w-[21.42px] lg:h-[21.42px]'>{pm3?'-':'+'}</button>
                              </div>
                              <p className={pm3?'w-full h-[30px] text-[11px] leading-[17.6px] font-normal lg:text-[14.22px] lg:leading-[22.76px] text-[#686868]':'hidden'}>
                              You Can Get Information By Contacting Our Support Team Have 24/7 Service. Whats The Difference Between Free And Paid Plan ?
                              </p>
                            </div>
                            <div className='w-full mb-[15.41px] pb-[41px] border-b'>
                              <div className='flex justify-between items-center w-full'>
                                <p className='text-[12.3px] leading-[31.12px] font-semibold text-[#323142] lg:text-[16.65px] lg:leading-[42.13px]'>What payment options do you accept?</p>
                                <button onClick={()=>setPm4(!pm4)} className='flex justify-center items-center w-[15.82px] h-[15.82px] rounded-full bg-[#6C5FBC] text-white lg:w-[21.42px] lg:h-[21.42px]'>{pm4?'-':'+'}</button>
                              </div>
                              <p className={pm4?'w-full h-[30px] text-[11px] leading-[17.6px] font-normal lg:text-[14.22px] lg:leading-[22.76px] text-[#686868]':'hidden'}>
                              You Can Get Information By Contacting Our Support Team Have 24/7 Service. Whats The Difference Between Free And Paid Plan ?
                              </p>
                            </div>
                            <div className='w-full mb-[15.41px] pb-[41px] border-b'>
                              <div className='flex justify-between items-center w-full'>
                                <p className='text-[12.3px] leading-[31.12px] font-semibold text-[#323142] lg:text-[16.65px] lg:leading-[42.13px]'>Do you offer discounts or promotions?</p>
                                <button onClick={()=>setPm5(!pm5)} className='flex justify-center items-center w-[15.82px] h-[15.82px] rounded-full bg-[#6C5FBC] text-white lg:w-[21.42px] lg:h-[21.42px]'>{pm5?'-':'+'}</button>
                              </div>
                              <p className={pm5?'w-full h-[30px] text-[11px] leading-[17.6px] font-normal lg:text-[14.22px] lg:leading-[22.76px] text-[#686868]':'hidden'}>
                              You Can Get Information By Contacting Our Support Team Have 24/7 Service. Whats The Difference Between Free And Paid Plan ?
                              </p>
                            </div>
                        </div>
                    </div>
                  </div>
      </section>
      <Footer/>
    </>
  )
}

export default AllCardsPG
