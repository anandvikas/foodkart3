import { useState } from "react";
import {Route, Routes} from 'react-router-dom'

import Nav from "./components/navbar/Nav";
import Home from './components/home/home'
import About from './components/about/about'
import CustSup from './components/customerSupport/custSup'
import Contact from './components/contact/contact'
import Cart from "./components/cart/cart"
import Product from "./components/product/Product";
import Footer from './components/footer/footer'


const App = () => {  

  // FOR SHOPPING CART 
  const [cartItems, updateCartItems] = useState([])
  const addToCart = (item)=>{    
    updateCartItems((prev)=>{
      let arr = [...new Set([...prev, item])]
      return arr      
    })    
  }
  
  // ==========================
  // TO RENDER THE PRODUCT PAGE 
  const [state1, update1] = useState(<Product id={1}  addToCart={addToCart}/>)
  const setItem = (id)=>{
    // console.log(id)
    update1(<Product
      id={id}
      addToCart={addToCart}
    />)
  }
  // ===========================
  // TO RENDER FILTERED ITEM LIST 
  const [state2, update2] = useState(<Home setItem={setItem}/>)
  function updateListByNav(catg){    
    console.log(catg)
    
  }
  // ===========================


  return (
    <>
      <Nav 
        updateListByNav={updateListByNav}
      />
      <Routes>
        <Route path="/" element={state2}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/customer_support" element={<CustSup/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/cart" element={<Cart cartItems={cartItems}/>}/>
        <Route path="/product/:id" element={state1}/>
        <Route path="*" element={<h1>404 error</h1>}/>
      </Routes>
      <Footer/>      
    </>

  )
}
export default App;