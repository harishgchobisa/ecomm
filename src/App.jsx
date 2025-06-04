import { Route, Routes } from "react-router"
import Footer from "./components/common/footer/Footer"
import Header from "./components/common/header/Header"
import Home from "./components/pages/home/Home"
import Blogs from "./components/pages/blogs/Blogs"
import BlogDetail from "./components/pages/blogs/BlogDetail"
import Products from "./components/pages/products/Products"

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path="/blogs/:id" element={<BlogDetail />} />
        <Route path='/about' element={"about page"}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
