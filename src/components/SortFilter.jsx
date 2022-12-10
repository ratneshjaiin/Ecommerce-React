import React from 'react'
import {BsFillGridFill} from "react-icons/bs"
import styled from 'styled-components'
import { useFilterContext } from '../context/FilterContext'
const SortFilter = () => {
    const {grid_view ,getGridView,getListView,filter_products ,shorting} = useFilterContext();
  return (
    <Wrapper>
        <div className='short_filter-block'>
         <div className='list_and_grid'>
            <button className={grid_view ? "active sort-btn" : "sort-btn" }  onClick={getGridView}>
              <BsFillGridFill/>
            </button>  
            <button className={grid_view ? "sort-btn" : "active sort-btn" } onClick={getListView}>
              <i className="fa-solid fa-bars"></i> 
            </button>
        </div>
        <div className='Filter_total_itam'>{`${filter_products.length} Product Available`} </div>
        <div className="filter_catagorys">
           <form>
           <label forhtml="cars">Sort by :</label>
           <select id="sort_by" onClick={shorting}>
             <option value="lowest">Low to high</option>
             <option value="highest">High to low</option>
             <option value="a-z" >A-Z</option>
             <option value="z-a" >Z-A</option>
           </select>
           </form>
        </div>
       </div>
   </Wrapper>
  )
}
const Wrapper = styled.div` 
.short_filter-block{
        padding:15px 0px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    .list_and_grid {
        display: flex;
        gap: 0px 10px;
        align-items: center;
        .sort-btn{
            padding: 5px 10px;
        }
        .active{
            background : #000000;
            color:#ffffff;
        }
    }
.filter_catagorys{
    form {
        padding: 7px 10px;
        border: 1px solid #000000;
        select{
            border: none;
            outline: none;
        }
    }
}
 }
`
export default SortFilter