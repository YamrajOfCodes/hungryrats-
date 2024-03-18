import './App.css'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import {Routes,Route, BrowserRouter} from "react-router-dom"
import Footer from "./Components/Footer/Footer"
import Login from './Pages/Login/Login'
import Contact from './Pages/Contact/Contact'
import Cartitem from './Pages/CartItem/Cartitem'
import Product from './Pages/Product/Product'
import Food from './Pages/Foodpage/Food'
import Admin from "./Pages/Admin/Admin"
import Addproduct from './Components/admin_Addproduct/Addproduct'
import Listproduct from './Components/admin_Listproduct/Listproduct'

function App() {


  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Hero/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/cart' element={<Cartitem/>}/>
    <Route path='/food' element={<Food/>}/>
    <Route path='/product' element={<Product/>}>
       <Route path=':productId' element={<Product/>}/>
    </Route>
    <Route path='/admin' element={<Admin/>}>
  </Route>
  <Route path='/addproduct' element={<Addproduct/>}/>
  <Route path='/listproduct' element={<Listproduct/>}/>
 
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
