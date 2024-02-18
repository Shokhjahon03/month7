import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import foodsapi from '../App/foods'
import food1 from '../assets/food1.svg'
import { Navigate, useNavigate } from 'react-router-dom'
import Take from '../components/take'
const KorzinkaPG = ({y,c}) => {
  // let { foods, error,getFoods,idfood,getidFood}=foodsapi()
  let ii=JSON.parse(localStorage.getItem('val'))?JSON.parse(localStorage.getItem('val')):[]
  let [a,setA]=useState(ii)
  let [n,setN]=useState(1)
  let navg=useNavigate()
  let minus=()=>{
    if (n > 1) {
      setN(n-1)
    }
  }
  return (
    <>
      <Navbar/>
      <section className='mt-[189px] w-full'>
          <div className="container">
          <div className='mt-[200px] w-full flex flex-col items-center'>
        {
          a.length>0?<div>
            {
              a.map((e,i)=>(
                <Take key={i} minus={minus} n={n} setN={setN} data={[e]} />
              ))
            }
          </div>:null
        }
      </div>
          </div>
      </section>
    </>
  )
}

export default KorzinkaPG
