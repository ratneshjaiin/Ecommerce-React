import React from 'react'
import styled from 'styled-components'
import {FaMinus,FaPlus} from "react-icons/fa"

const CartAmountToggle = ({amount, setDecrease, setIncrease}) => {
  return (
    <Wrapper>
      <div className="increase_and_decrise_btn">
        <button onClick={()=>setDecrease()}><FaMinus/></button>
        <div className="inc_dec_data">{amount}</div>
        <button onClick={()=>setIncrease()}><FaPlus/></button>
      </div>
    </Wrapper>
    
  )
}
const Wrapper = styled.div`
    .increase_and_decrise_btn {
        display: flex;
        gap: 5px;
        margin-top: 15px;
           button{
            border: 1px solid darkorange;
            border-radius: 5px;
           }
    }
`
export default CartAmountToggle