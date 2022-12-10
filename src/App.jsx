import React from 'react'
import Header from './components/Header'
// import { ThemeProvider } from "styled-components"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Services from './components/Services'
import Contract from './components/Contract'
import About from './components/About'
import Home from './components/Home'
import ErrorPage from './components/ErrorPage'
import GoToTop from './components/GoToTop'
import Footer from './components/Footer'
import SingleProducts from './components/SingleProducts'
import Cart from './components/Cart'
import Products from './Products'
function App() {
  return (
    
    <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element = { <Home/> }/> 
            <Route path="/About" element = { <About/> }/> 
            <Route path="/services" element = { <Services/> }/>
            <Route path="/products" element = { <Products/> }/>
            <Route path="/contract" element = { <Contract/> }/>
            <Route path="/singlepreoduct/:id" element = { <SingleProducts/> }/>
            <Route path="/cart" element = { <Cart/>}/>    
            <Route path="*" element = {<ErrorPage/>}/>
        </Routes>
       <GoToTop/> 
       <Footer/>
    </BrowserRouter>
    
  )
}
export default App
