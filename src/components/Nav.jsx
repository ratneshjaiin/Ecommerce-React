import React from 'react'
import { NavLink } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi";
import { useCartContext } from '../context/cartContext';


const Nav = () => {
  const {total_item} =useCartContext();  
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  mb-2 mb-lg-0 ms-auto">
            <li className="nav-item">
                <NavLink to="/" className="nav-link active" aria-current="page" href="#">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/about" className="nav-link " aria-current="page" href="#">About</NavLink>
            </li>
            
            <li className="nav-item">
                <NavLink to="/products" className="nav-link " aria-current="page" href="#">Products</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/contract" className="nav-link " aria-current="page" href="#">Contract</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/cart" className="nav-link " aria-current="page" href="#">
                <i className="fa-solid fa-cart-shopping  position-relative" style={{fontSize: "25px"}}  ><span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{fontSize: "10PX"}}>
                {total_item}
                <span className="visually-hidden">unread messages</span></span></i>
                </NavLink>
            </li>
            </ul> 
        </div>
  )
}

export default Nav