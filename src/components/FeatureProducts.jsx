import React from 'react'
import { useGlobleContext } from '../context'
import Product from './Product';

const FeatureProducts = () => {
   const  {isLoading, products,featureProducts } = useGlobleContext();
  //  console.log("fp:",featureProducts)
  //  console.log("pro:",products)

   if(isLoading){
    return <div> Loading...... </div>
   }

  return (
  <section className="products">
  <div className="container">
    <div className="row">
    {featureProducts.map((curElem)=>{
      return(
        <Product key={curElem.id} {...curElem} />
      )
    })}  
     </div>
   </div>
</section>
  )
}

export default FeatureProducts