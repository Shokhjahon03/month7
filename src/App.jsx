import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePG from "./Pages/HomePG"
import AllCardsPG from "./Pages/AllCardsPG"

function App() {
 

  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<HomePG/>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App
