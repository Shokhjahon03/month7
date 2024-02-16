import React from 'react'
import Navbar from '../components/Navbar'
import heros from '../assets/Hero.svg'
import herosd from '../assets/herodesk.svg'
import i14 from '../assets/scren.svg'
// import BG from '../assets/BG.png'
const HomePG = () => {
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
          <section className='w-full flex justify-center mt-[67px] border-b'>
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
        </main>
    </>
  )
}

export default HomePG
