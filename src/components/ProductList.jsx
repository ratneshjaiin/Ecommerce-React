import React from 'react'
import { useFilterContext } from '../context/FilterContext';
import GridView from './GridView';
import ListView from './ListView';
// import { useFilterContext } from '../context/FilterContext';

const ProductList = () => {
    const {filter_products , grid_view} =useFilterContext();
    // console.log("gridView:",grid_view)
    if(grid_view === true){
        return <GridView products={filter_products}/>
    }
    if(grid_view === false){
        return <ListView products = {filter_products}/>
    }
  // return (
  //   <div>ProductList</div>
  // )
}
export default ProductList