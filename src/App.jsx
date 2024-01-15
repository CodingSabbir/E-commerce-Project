import { Route,  Routes } from "react-router-dom"
import Home from "./Home/Home"
import Blog from "./Blog/Blog"
import NavItems from "./components/NavItems/NavItems"
import Footer from "./components/Footer"
import Shop from "./Shop/Shop"


function App() {
 
  return (
    <>
    <NavItems/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/blog" element={<Blog/>}/>
    <Route path="/shop" element={<Shop/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
