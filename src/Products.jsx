import React from 'react'
import styled from 'styled-components'
import FilterBlock from './components/FilterBlock'
import ProductList from './components/ProductList'
import SortFilter from './components/SortFilter'


const Products = () => {
  
  return (
    <Wrapper className=''>
      <div className="container all_products_details">
        <div className='row'>
            <div className="col-md-3 col-12 filter">
                <FilterBlock/>
            </div>
            <div className="col-md-9">
               <div className='filter-block'>
                   <SortFilter/>
               </div>
               <hr/>
               <div className="main-products">
                   <ProductList/>
               </div>
            </div>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .all_products_details{
       .filter{
        position:relative;
        padding-top: 15px;
        padding-bottom: 15px; 
        &:before{
          content: '';
          display: block;
          height: 100%;
          width: 9999px;
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          background-color: #3333;
          z-index:-99;
         }
       }
  }

`
export default Products