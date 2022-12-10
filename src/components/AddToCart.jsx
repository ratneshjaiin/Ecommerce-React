import React,{ useState } from 'react'
import {FaCheck} from "react-icons/fa"
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useCartContext } from '../context/cartContext';
import CartAmountToggle from './CartAmountToggle';
const AddToCart = ({product}) => {
  const { addToCart } = useCartContext();
  const {id ,colors ,stock} = product;  
  const [color , setColor] =useState(colors[0])
  const [amount ,setAmount] =useState(1) 
  
  const setDecrease =() => {
  amount > 1 ? setAmount(amount - 1) :setDecrease(1) 
  } 
  const setIncrease =() =>{
  amount < stock ?setAmount(amount + 1) :setAmount(stock)  
  }
    
  return (
    <Wrapper>
      <div className="multiple_colors">
        Colors: 
        { colors.map((curColor,index)=>{
          return <button key={index}  style={{backgroundColor:curColor}} className={color === curColor ? "btnStyle active" : "btnStyle" } onClick={()=> setColor(curColor)}>
                  {color === curColor ? <FaCheck/> :null}
                </button>
          })
        }
      </div>
      <CartAmountToggle amount={amount} setDecrease={setDecrease} setIncrease={setIncrease}/>
      <NavLink to="/cart" onClick={() => addToCart(id, color, amount, product)}>
       <button type='button' className="btn btn-primary">Add To Cart</button>
      </NavLink>
    </Wrapper> 
  )
}
const Wrapper = styled.section`
  
`
export default AddToCart