import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePG from "./Pages/HomePG"
import AllCardsPG from "./Pages/AllCardsPG"
import KorzinkaPG from "./Pages/KorzinkaPG"
import { useState } from "react"
import SiginUpPG from "./Pages/SiginUpPG"
import LoginPG from "./Pages/LoginPG"
import ParamsPG from "./Pages/ParamsPG"

function App() {
  let [y,setY]=useState('')
  let [c,setC]=useState(false)
  let [x,setX]=useState(0)
  let [pram,setParam]=useState('')
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<HomePG  x={x} setX={setX} />}/>
      <Route path="/dish" element={<AllCardsPG x={x} setX={setX} pram={pram} setParam={setParam}/>}/>
      <Route path="/kor" element={<KorzinkaPG  x={x} setX={setX} />}/>
      <Route path="/sup" element={<SiginUpPG/>}/>
      <Route path="/log" element ={<LoginPG/>}/>
      <Route path="/parm" element={<ParamsPG pram={pram}/>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App
