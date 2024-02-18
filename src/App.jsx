import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePG from "./Pages/HomePG"
import AllCardsPG from "./Pages/AllCardsPG"
import KorzinkaPG from "./Pages/KorzinkaPG"
import { useState } from "react"

function App() {
  let [y,setY]=useState('')
  let [c,setC]=useState(false)
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<HomePG/>}/>
      <Route path="/dish" element={<AllCardsPG c={c} setC={setC} y={y} setY={setY}/>}/>
      <Route path="/kor" element={<KorzinkaPG c={c} y={y}/>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App
