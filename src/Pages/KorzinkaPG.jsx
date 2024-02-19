import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import foodsapi from '../App/foods'
import food1 from '../assets/food1.svg'
import { Navigate, useNavigate } from 'react-router-dom'
import Take from '../components/take'
import Footer from '../components/Footer'
const KorzinkaPG = ({}) => {
  // let { foods, error,getFoods,idfood,getidFood}=foodsapi()
  let ii=JSON.parse(localStorage.getItem('val'))?JSON.parse(localStorage.getItem('val')):[]
  let [a,setA]=useState(ii)
  let [n,setN]=useState(1)
  let [total,setTotal]=useState(0)
  let [cash,setCash]=useState(0)
  let navg=useNavigate()
  let minus=()=>{
    if (n > 1) {
      setN(n-1)
    }
  }
  useEffect(()=>{
    setCash(cash+total)
  },[])
  return (
    <>
      <Navbar/>
      <section className='mt-[189px] w-full'>
          <div className="container">
          {a.length>0?<div className='mt-[200px] w-full flex flex-col items-center '>
          {
          a.length>0?<div>
            {
              a.map((e,i)=>(
                <Take total={total} setTotal={setTotal} key={i} minus={minus} n={n} setN={setN} data={[e]} />
              ))
            }
          </div>:null
        }
      </div>:<div className='w-full h-[300px] flex justify-center items-center border-[2px] border-dashed'><p className='text-[#6C5FBC]'>no food selected !</p></div>}
          </div>
      </section>
      <section className='mt-[149.78px] w-full'>
          <div className="container">
            <div className='w-full flex justify-center'>
            <div className='w-[314.37px] lg:w-[492.06px] flex flex-col'>
              <div>
                <div className='flex w-full justify-between items-center border-b border-dashed pb-[7.68px] mb-[9.58px]'>
                    <p className='text-[12px] lg:text-[14.22px] leading-[14.1px] font-normal text-[#323142]'>Subtotal</p>
                    <p className='text-[12px] lg:text-[14.22px] leading-[14.1px] font-normal text-[#323142]'>${total}</p>
                </div>
                <div className='flex w-full justify-between items-center border-b border-dashed pb-[7.68px] mb-[9.58px]'>
                  <p className='text-[12px] lg:text-[14.22px] leading-[14.1px] font-normal text-[#323142]'>Delivery</p>
                  <p  className='text-[12px] lg:text-[14.22px] leading-[14.1px] font-normal text-[#323142]'>${(total*6)/100}</p>
                </div>
              </div>
              <div className='flex w-full justify-between items-center mt-[17.69px]'>
                <p className='text-[15px] leading-[17.63px] font-semibold'>Total</p>
                <p className='text-[15px] leading-[17.63px] font-semibold'>${total+((total*6)/100)}</p>
              </div>
              <button className='w-full h-[46.16px] lg:h-[54.76px] rounded-[9.03px] text-white bg-[#6C5FBC] text-[12px] leading-[18px] font-semibold mt-[51.23px]'>
              Review Payment
              </button>
            </div>
            </div>
          </div>
      </section>
      <section className='b mt-[115px] w-full'>
                      <div className="container">
                        <div className=' ff rounded-[15px] pt-[35.96px] w-full h-[256.97px] relative flex flex-col items-center gap-y-[15.92px]'>
                            <p className='text-[41.45px] font-extrabold text-[#FFFFFF]'>
                            GET 50%
                            </p>
                            <div className='w-[260.29px] h-[48.08px] rounded-[9.26px] relative bg-[#0000001A]'>
                              <input type="email" className=' text-[10.58px] w-full h-full pl-[14.15px] rounded-[9.26px]' placeholder='Email Address' />
                              <button className='text-[#F7F8FA] uppercase left-[166.76px] top-[7.2px] absolute w-[86.09px] h-[34.76px] rounded-[7.32px] text-[9.59px] leading-[14.39px] font-medium bg-[#6C5FBC]'>
                              subscribe
                              </button>
                            </div>
                            <div className='w-full top-[189px] absolute flex justify-center'>
                                <img className='w-[169.45px] h-[170.66px]' src={food1} alt="alt" />
                            </div>
                        </div>
                      </div>
          </section>
      <Footer/>
    </>
  )
}

export default KorzinkaPG
