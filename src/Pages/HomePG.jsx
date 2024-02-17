import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import heros from '../assets/Hero.svg'
import herosd from '../assets/herodesk.svg'
import i14 from '../assets/scren.svg'
import chek from '../assets/sss.svg'
import star from '../assets/Star.svg'
import foodsapi from '../App/foods'
import img1 from '../assets/food1.svg'
import img2 from '../assets/food2.svg'
import food1 from '../assets/food1.svg'
import { NavLink } from 'react-router-dom'

// import BG from '../assets/BG.png'
const HomePG = () => {
  let [heart,setHeart]=useState(true)
  let {loading, foods, error,getFoods}=foodsapi()
  useEffect(()=>{
    getFoods()
  },[])
  return (
    <>
      <Navbar/>
        <header className='mt-[150px]'>
          <div className="container flex justify-center">
           <div className='flex w-full justify-between flex-col items-center sm:flex-row sm:items-start'>
           <div className='w-full flex flex-col items-center gap-[5px] mt-[57px] sm:items-start sm:w-[403.91px] xl:w-[568px]'>
              <div className='w-full flex justify-center items-center gap-[12.33px] sm:justify-start sm:text-[#c4c2c2]'>
                <span className='w-[33.29px] h-0 border border-[#201F1F] sm:border-[#c4c2c2]'></span>
                <p className=' font-semibold text-[9.25px] leading-[11.1px] xl:text-[15px] xl:leading-[18px] xl:text-[#201F1F33 ]'>OVER 1000 USERS</p>
              </div>
              <div className=' w-full flex flex-col gap-[15.7px] items-center sm:items-start'>
                <h1 className=' sm:hidden text-[46.24px] text-center font-semibold leading-[55.5px] sm:text-start'>
                Enjoy Foods <br /> Over <span className='text-[#6C5FBC]'>World</span>
                </h1>
                <h1 className='hidden sm:block text-[48.24px] xl:text-[70px] xl:leading-[90px] text-center font-semibold leading-[55.5px] sm:text-start'>
                Enjoy Foods All Over The <span className='text-[#6C5FBC]'>World</span>
                </h1>
                <p className=' roundxl:leading-[28px] xl:text-[18px] xl:font-medium pp text-center text-[11.1px] leading-[17.26px] text-[#676767] sm:text-start sm:w-[354.84px] xl:w-[499px] sm:text-[12.8px]'>
                Eatly help you set saving goals, earn cash back offers, Go to disclaimer for more details and get paychecks up to two days early. Get a <span className='text-[#6155AE]'>$20 bonus</span>.
                </p>
              </div>
              <button className='mt-[36.3px] w-[125px] h-[47.24px] rounded-[9.94px] text-white font-medium text-[13.03px] bg-[#6C5FBC] xl:w-[159px]'>Get Started</button>
            </div>
            <img className=' inline-block w-[286.37px] h-[256.6px] sm:w-[429px] sm:h-[384.41px] xl:hidden mt-[119.34px] sm:mt-0' src={heros} alt="alt" />
            <img className='hidden xl:inline-block' src={herosd} alt="alt" />
           </div>
          </div>
        </header>
        <main>
          <section id='sec_one' className='w-full pt-[99px] pb-[54.7px] mt-[91.81px] lg:mt-[147.47px]'>
            <div className="container">
            <div className='flex  flex-col items-center sm:flex-row w-full pl-[9px] pr-[9px] gap-[60px] sm:justify-around'>
              <div className='text-center' >
                  <h2 className='text-[43.2px] leading-[54px] font-bold text-white mb-[10.8px]'>10K+</h2>
                  <p className='text-[14.4px] leading-[21.6px] font-medium text-[#C5BFED]'>Satisfied Costumers <br />
All Great Over The World </p>
              </div>
              <span className='w-full border border-[#C5C5C5] sm:h-[123px] sm:w-0'></span>
              <div className='text-center' >
                  <h2 className='text-[43.2px] leading-[54px] font-bold text-white mb-[10.8px]'>4M</h2>
                  <p className='text-[14.4px] leading-[21.6px] font-medium text-[#C5BFED]'>Satisfied Costumers <br />
All Great Over The World </p>
              </div>
              <span className='w-full border border-[#C5C5C5] sm:h-[123px] sm:w-0 '></span>
              <div className='text-center' >
                  <h2 className='text-[43.2px] leading-[54px] font-bold text-white mb-[10.8px]'>99.99%</h2>
                  <p className='text-[14.4px] leading-[21.6px] font-medium text-[#C5BFED]'>Satisfied Costumers <br />
All Great Over The World </p>
              </div>
            </div>
            </div>
          </section>
          <section className='w-full flex justify-center mt-[67px] border-b pb-[66px]'>
            <div className="container">
              <div className='w-full flex flex-col items-center md:items-center md:flex-row md:justify-between'>
                  <div className=' order-1 md:order-2 md:w-[398.23px] lg:items-start lg:w-[559.71px]'>
                    <p className='text-[30px] text-center font-semibold leading-[34.23px] mb-[37px] lg:text-start lg:text-[50.92px] lg:leading-[58.2px]'>Premium <span className='text-[#6C5FBC]'>Quality</span> <br /> For Your Health</p>
                    <div className='flex mb-[16px]'>
                      <li className='ppp text-[#676767]'></li>
                      <p className='text-[11.96px] font-normal text-[#676767] leading-[17.94px] lg:text-[20.33px] lg:leading-[30.5px]'>Premium quality food is made with ingredients that are packed with essential vitamins, minerals.</p>
                    </div>
                    <div className='flex'>
                      <li className='ppp text-[#676767]'></li>
                      <p className='text-[11.96px] font-normal text-[#676767] leading-[17.94px] lg:text-[20.33px] lg:leading-[30.5px]'>These foods promote overall wellness by support healthy digestion and boosting immunity</p>
                    </div>
                    <div className='w-full flex justify-center lg:justify-start mt-[35px]'>
                    <button className='w-[121.77px] flex items-center justify-center gap-[8.99px] text-[11.82px] font-medium leading-[14.78px] h-[41.24px] rounded-[9.61px] bg-[#6C5FBC] text-white lg:w-[186px] lg:h-[63px] lg:rounded-[14.68px] lg:text-[18.06px]'>Download <i class='bx bx-right-arrow-alt'></i></button>
                    </div>
                  </div>
                  <div className='w-full md:w-[216.18px] md:h-[433.07px] lg:w-[304px] lg:h-[609px] flex justify-center mt-[109.74px] order-2 md:order-1'>
                    <img src={i14} alt="alt" />
                  </div>
              </div>
            </div>
          </section>
          <section className='w-full'>
              <div className="container">
                <div className='tt w-full flex flex-col mt-[39px] rounded-[23.88px]'>
                    <img className='w-full h-full lg:h-[378px]' src={chek} alt="alt" />
                    <div className='pt-[8.7px] pl-[26.09px] pr-[26.09px] pb-[14.31px] flex flex-col'>
                        <button className='lg:hidden w-[52.4px] h-[19.76px] rounded-[4.3px] bg-[#F7EDD0] text-[#DAA31A] text-[10.16px] font-normal leading-[15.24px]'>Healthy</button>
                        <div className='w-full flex items-end justify-between  lg:pt-[30px] lg:pb-[35px]'>
                          <div className='lg:flex lg:gap-[170px]'>
                            <p className='text-[20.51px] font-semibold leading-[33.33px] text-[#323142] lg:text-[40px]'>The Chicken King</p>
                            <div className='flex items-center'>
                              <p className='text-[15.38px] font-normal leading-[20.51px] text-[#8E97A6]'>
                              24min •
                              </p>
                              <img src={star} alt="alt" />
                              <p className='text-[15.38px] font-normal leading-[20.51px] text-[#8E97A6]'>
                                4.8
                              </p>
                            </div>
                          </div>
                          <button className='w-[31.89px] h-[31.89px] lg:w-[61.78px] lg:h-[61.78px] rounded-full bg-[#DBD9EE] '>
                          <i className='bx bxs-bookmark text-[#6C5FBC] lg:text-[30px]'></i>
                          </button>
                        </div>
                    </div>
                </div>
              </div>
          </section>
          <section className='mt-[57.27px]'>
              <div className="container">
                <div className='w-full flex flex-col border-b pb-[66px] mb-[57px]'>
                    <p className='text-[#323142] text-[30px] leading-[36px] font-bold text-center mb-[61px]'>
                    Our Top <br /> <span className='text-[#6C5FBC]'>Dishes</span>
                    </p>
                    <div className='w-full flex  flex-wrap justify-center gap-y-[41.67px] gap-x-[21.07px]'>
                      {
                        foods.map((e,i)=>(
                          <div className='cc relative w-[146.93px] rounded-[22.62px]  p-[17.92px]' key={i}>
                            {/* <img src={e.id%2?img1:img2} alt="alt" /> */}
                            <img src={img1} alt="alt" />
                            <div className='felx flex-col items-start'>
                             {e.button==='H'? <button className='w-[38.52px] h-[14.53px] text-[#DAA31A] bg-[#F7EDD0] text-[7.47px] leading-[11.21px] font-normal rounded-[3.16px]'>Healthy</button>:null}
                             {e.button==='T'? <button className='w-[42.11px] h-[14.33px] text-[#FB471D] bg-[#F7C5BA] text-[7.47px] leading-[11.21px] font-normal rounded-[3.16px]'>Trending</button>:null}
                             {e.button==='S'? <button className='w-[42.11px] h-[14.33px] text-[#309D5B] bg-[#8cf0b4] text-[7.47px] leading-[11.21px] font-normal rounded-[3.16px]'>Supreme</button>:null}
                              <div className=''>
                                <p className='text-[15.08px] leading-[24.5px] font-semibold text-[#323142]'>{e.foodname}</p>
                                <div className='flex items-end'>
                                  <p className='text-[11.31px] leading-[15.08px] font-medium text-[#8E97A6]'>{e.time}min <li className='lis'></li></p>
                                  <img src={star} alt="alt" />
                                  <p className='text-[11.31px] leading-[15.08px] font-medium text-[#8E97A6]'>{e.stars}</p>
                                </div>
                              </div>
                              <div className='flex w-full justify-between items-center'>
                                <p className=' leading-[26.39px] text-[16.96px] text-[#323142]'>${e.foodprice}.<span className='text-[#8E97A6] text-[12.3px] font-bold'>99</span></p>
                                <button className='w-[28.67px] h-[28.67px] rounded-[5.84px] bg-[#323142] text-white'>+</button>
                              </div>
                            </div>
                            <button className=' absolute top-0 right-0' onClick={()=>setHeart(!heart)}>{heart ? <i className='bx bx-heart' ></i>:<i className='bx bxs-heart' ></i>}</button>
                          </div>
                        ))
                      }
                    </div>
                    <div className='w-full  mt-[67.67px]'>
                      <NavLink className='text-[20px] text-[#ACADB9] font-medium flex items-center w-full justify-end gap-[20px]'>View All <i className=' text-[35px] bx bx-right-arrow-alt'></i></NavLink>
                    </div>
                </div>
              </div>
          </section>
          <section>
            <div className="container">
                    <div className='w-full flex flex-wrap justify-between gap-y-[100.6px]'>
                    <div className='flex flex-col items-start'>
                        <p className='text-[#18181B] text-[30px] leading-[34.22px] font-bold mb-[26.54px]'>
                        Control <span className='text-[#6C5FBC]'>Purchases</span> <br /> Via Dashboard
                        </p>
                       <div iv className='w-[228px] flex flex-col gap-y-[9.94px] bb rounded-[7.95px] mb-[9.94px]'>
                          <div className='flex gap-[28.03px]'>
                            <div className='flex items-center w-[143.62px] justify-between pl-[11.27px]'>
                              <img className='w-[51.03px] h-[52.89px]' src={food1} alt="alt" />
                              <div>
                                <p className='text-[12.59px] text-[#323142] font-semibold lean-[17.63px] mb-[2.55px]'>Chicken Hell</p>
                                <p className='text-[7.95px] font-medium leading-[11.13px]'>On The Way</p>
                              </div>
                            </div>
                            <div className='flex items-end'><p className='text-[8.62px] text-[#ACADB9] leading-[12.06px] font-medium '>3:09 PM</p></div>
                          </div>
                        </div>
                        <div iv className='w-[228px] flex flex-col gap-y-[9.94px] bb rounded-[7.95px] mb-[9.94px]'>
                          <div className='flex gap-[28.03px]'>
                            <div className='flex items-center w-[143.62px] gap-x-[2.89px] pl-[11.27px]'>
                              <img className='w-[51.03px] h-[52.89px]' src={food1} alt="alt" />
                              <div>
                                <p className='text-[12.59px] text-[#323142] font-semibold lean-[17.63px] mb-[2.55px]'>Swe Dish</p>
                                <p className='text-[7.95px] font-medium leading-[11.13px]'>Delivered</p>
                              </div>
                            </div>
                            <div className='flex items-end'><p className='text-[8.62px] text-[#ACADB9] leading-[12.06px] font-medium '>Yesterday</p></div>
                          </div>
                        </div>
                        <div iv className='w-[228px] flex flex-col gap-y-[9.94px] bb  rounded-[7.95px] mb-[9.94px]'>
                          <div className='flex gap-[28.03px]'>
                            <div className='flex items-center w-[143.62px] justify-between pl-[11.27px]'>
                              <img className='w-[51.03px] h-[52.89px]' src={food1} alt="alt" />
                              <div>
                                <p className='text-[12.59px] text-[#323142] font-semibold lean-[17.63px] mb-[2.55px]'>Fish Hell Veg</p>
                                <p className='text-[7.95px] font-medium leading-[11.13px] text-[#F1534E]'>Cancelled</p>
                              </div>
                            </div>
                            <div className='flex items-end'><p className='text-[8.62px] text-[#ACADB9] leading-[12.06px] font-medium '>Yesterday</p></div>
                          </div>
                        </div>
                    </div>
                    </div>
            </div>
          </section>
        </main>
    </>
  )
}

export default HomePG
