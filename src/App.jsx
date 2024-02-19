import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom"
import HomePG from "./Pages/HomePG"
import AllCardsPG from "./Pages/AllCardsPG"
import KorzinkaPG from "./Pages/KorzinkaPG"
import { useEffect, useState } from "react"
import SiginUpPG from "./Pages/SiginUpPG"
import LoginPG from "./Pages/LoginPG"
import ParamsPG from "./Pages/ParamsPG"

function App() {
  let users=JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : ''
  let [y,setY]=useState('')
  let [c,setC]=useState(false)
  let [x,setX]=useState(0)
  let [pram,setParam]=useState('')
  // // let navg=useNavigate()
  // let navigatsiya=()=>{
  //   if (users) {
  //     <Navigate to='/'/>
  //   }else{
  //     // <Navigate to='/sup'/>
  //     // console.log('salom');
  //   }
  // }
  // useEffect(()=>{ 
  //  navigatsiya()
  // },[])
  return (
    <BrowserRouter>
     
      {
        c?<Routes><Route path="/" element={<HomePG  x={x} setX={setX} />}/>
        <Route path="/dish" element={<AllCardsPG x={x} setX={setX} pram={pram} setParam={setParam}/>}/>
        <Route path="/kor" element={<KorzinkaPG  x={x} setX={setX} />}/>
        <Route path="/sup" element={<SiginUpPG/>}/>
        <Route path="/log" element ={<LoginPG/>}/>
        <Route path="/parm" element={<ParamsPG pram={pram}/>}/></Routes>:<>{users?<LoginPG setC={setC} c={c}/>:<SiginUpPG setC={setC} c={c}/>}</>
      }
     
    </BrowserRouter>
  )
}

export default App
