import React from 'react'
import Product from './Product'

const GridView = ({products}) => {
  return (
    <div className="row">
    {products.map((curElem)=>{
      return(
        <Product key={curElem.id} {...curElem} />
      )
    })}  
     </div>
  )
}

export default GridView