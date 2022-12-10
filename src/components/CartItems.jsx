import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { useCartContext } from '../context/cartContext'
import FormatePrice from '../Helperse/FormatePrice'
import CartAmountToggle from './CartAmountToggle'

const CartItems = ({ id, name, image, color, price, amount }) => {
  const {removeItem,setDecrease,setIncrease} = useCartContext();
  // const setDecrease =() => {
  //   // amount > 1 ? setAmount(amount - 1) :setDecrease(1) 
  //   } 

  // const setIncrease =() =>{
  // // amount < stock ?setAmount(amount + 1) :setAmount(stock)  
  // }
    return (
      <div className='row'>
       <div className="col-md-3">
       <div className="card" >
           <div className='image-section'>
             <figure>
               <img src={image} alt={name}/>
             </figure>
           </div>
           <div className='name_and_color'>
              <h6>{name}</h6>
              <div className='d-flex align-items-center'>
              <p>Color:</p>
              <p className='add-item-color'  style={{background:color}}></p>
              </div>
           </div> 
       </div>
       </div>
       <div className="col-md-3">
        <div className='cart-hide'>
          <p>
            <FormatePrice price={price}/>
          </p>
        </div>
       </div>
       <div className="col-md-2">
         <div className='Quantity'>
           <CartAmountToggle amount={amount} setDecrease={()=> setDecrease(id)} setIncrease={()=> setIncrease(id)}/>
         </div>
       </div>
       <div className="col-md-2">
        <div className='cart-hide'>
        <p>
          <FormatePrice price={price*amount}/>
        </p>
        </div>
       </div>
       <div className="col-md-2">
        <div className='remove_cart'>
          <FaTrash onClick={()=>removeItem(id)}/>
        </div>
       </div>
       <hr />
      </div>
        )
  
}

export default CartItems