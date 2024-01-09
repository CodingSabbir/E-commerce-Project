import { Route,  Routes } from "react-router-dom"
import Home from "./Home/Home"
import Blog from "./Blog/Blog"
import NavItems from "./components/NavItems/NavItems"


function App() {
 
  return (
    <>
    <NavItems/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/blog" element={<Blog/>}/>
    </Routes>
    </>
  )
}

export default App
