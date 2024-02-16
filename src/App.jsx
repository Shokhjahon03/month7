import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePG from "./Pages/HomePG"

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
