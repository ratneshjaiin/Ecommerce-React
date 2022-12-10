import React from 'react'
import { NavLink } from 'react-router-dom';
// import CartItem from './cartItem';
import { useCartContext } from '../context/cartContext'
import CartItems from './CartItems';
import '../index.css';
import FormatePrice from '../Helperse/FormatePrice';
const Cart = () => {
  const {cart, clearCart ,total_price,shipping_fee} = useCartContext();
  // console.log("addtocart:",cart)
  if(cart.length === 0){
    return(
      <div className='p-4'>No Cart Item</div>
    )
  } 
  return (
    <section className='cart-block'>
    <div className="container">
      <div className='row'>
      <div className="col-md-3">Item</div>
      <div className="col-md-3">Price</div>
      <div className="col-md-2">Quality</div>
      <div className="col-md-2">SubTotal</div>
      <div className="col-md-2">Remove</div>
      <hr />
      </div>
        <div className="cart-item">
          {cart.map((curElem) => {
            return <CartItems key={curElem.id} {...curElem}/>
          })}
        </div>
      <div className='continue_and_clear_btn'>
        <NavLink to="/products"><button className='continue-shopping'>Continue Shopping</button></NavLink>
        <button type='button' className='clear_all_data' onClick={clearCart}>Clear Data</button>
      </div>
      <div className='total_payment_amount'>
         <div className="order_subtotal">
           <p>SubTotal :<span> <FormatePrice price={total_price}/> </span></p>
         </div>
         <div className='shipping_fee'>
           Shipping fee : <span><FormatePrice price={shipping_fee}/></span>
         </div>
         <hr />
         <div className='total_order_val'>
           Total Payment :<span><FormatePrice price={total_price + shipping_fee}/></span> 
         </div>
      </div> 
       
  </div>
  </section>


  )
}

export default Cart;