import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Category from "./pages/Category"
import Game from "./pages/Game"
import NotFound from "./pages/NotFound"
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/category" element={<Category/>}/>
        <Route path="/game/:id" element={<Game/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
