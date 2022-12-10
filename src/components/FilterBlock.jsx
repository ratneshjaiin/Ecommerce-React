import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/FilterContext'
import FormatePrice from "../Helperse/FormatePrice"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';
// import Button from '@mui/material-next/Button';
import {FaCheck} from "react-icons/fa"
// checkbox

const FilterBlock = () => {
  const {  filters: { text, category, color ,price , maxPrice ,minPrice}, updateFilterValue, all_products,clearFilters} = useFilterContext();

  const getUniqueData = (data, attr) => {
    let newVal = data.map((curElem) => {
      return curElem[attr];
    });
    
    if(attr === "colors" ){
      // return(newVal = ["all",...new Set([].concat(...newVal))])
      newVal=newVal.flat();
    }
      return(newVal = ["all", ...new Set(newVal)])  
      // console.log("newVAl:", newVal)
  };  
  
  const categoryData = getUniqueData(all_products, "category");
  const companyData = getUniqueData(all_products, "company");
  const colorsData = getUniqueData(all_products, "colors");
  // console.log("color:",colorsData)
  return (
    <Wrapper>
      <div className='Filter_Search_box'>
          <div className="search__container">
              <form onSubmit={(e)=>e.preventDefault()}> <input type="text"  name="text" value={text} onChange={updateFilterValue} placeholder="search..." className='search__input'/> </form>
          </div>
      </div>
      <div className='category-block'>  
        <FormControl>
         <FormLabel id="demo-form-control-label-placement">Category</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-form-control-label-placement"
            name="position"
            defaultValue="All">    
            {categoryData.map((curElem,index) => {
              return (
                <FormControlLabel
                  key={index}
                  type="button"
                  name="category"
                  value={curElem}
                  control={<Radio />} 
                  label={curElem}
                  // className={curElem === category ? "active" : ""}
                  onClick={updateFilterValue}>
                  {curElem}
                </FormControlLabel>
              );
            })}
          </RadioGroup>
        </FormControl>  
      </div>
      <div className='company_wise_product'>
        <h5>Company</h5>
        <form action='#'> 
          <label forhtml="sort">Company</label>
          <select id="company_pro" name="company" onClick={updateFilterValue} >
            {companyData.map((curElem,index)=>{
              return(<option key={index}  value={curElem}>{curElem}</option>)
            })}
          </select>
        </form>
      </div>
      <div className="filter-colors">
        <h5>Colors</h5>
         <div className='filter-color-style'> 
        {colorsData.map((curColor, index) => {
          if (curColor === "all") {
            return (
              <button
                key={index}
                type="button"
                value={curColor}
                name="color"
                className="color-all--style"
                onClick={updateFilterValue}>
                all
              </button>
            );
          }
          return (
            <button
              key={index}
              type="button"
              value={curColor}
              name="color"
              style={{ backgroundColor: curColor }}
              className={color === curColor ? "btnStyle active" : "btnStyle"}
              onClick={updateFilterValue}>
              {color === curColor ? <FaCheck className="checkStyle" /> : null}
            </button>
          );
        })}
        </div>
      </div>
      <div className="filter_price">
        <h6>price</h6>  
        <FormatePrice price={price}>  
        </FormatePrice>
        <div className='range_feild'>
          <input type="range" id="range_price" name="price" min={minPrice} max={maxPrice} value={price} onChange={updateFilterValue} step="10"  />
        </div> 
      </div>
      <div className='clear_filter'>
       <Button variant="outlined" color="error" onClick={clearFilters} >Clear Filter</Button>
      </div>

    </Wrapper>
  )
}
const Wrapper = styled.div`
// .search {
//   &__container {
//   }
  
//   &__title {
//       font-size: 22px;
//       font-weight: 900;
//       text-align: center;
//       color: #ff8b88;
//   }
  
//   &__input {
//       width: 100%;
//       padding: 12px 24px;

//       background-color: transparent;
//       transition: transform 250ms ease-in-out;
//       font-size: 14px;
//       line-height: 18px;
      
//       color: #575756;
//       background-color: transparent;
// /*    background-image: url(http://mihaeltomic.com/codepen/input-search/ic_search_black_24px.svg); */

//     background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E");
//       background-repeat: no-repeat;
//       background-size: 18px 18px;
//       background-position: 95% center;
//       border-radius: 50px;
//       border: 1px solid #575756;
//       transition: all 250ms ease-in-out;
//       backface-visibility: hidden;
//       transform-style: preserve-3d;
      
//       &::placeholder {
//           color: color(#575756 a(0.8));
//           text-transform: uppercase;
//           letter-spacing: 1.5px;
//       }
      
//       &:hover,
//       &:focus {
//           padding: 12px 0;
//           outline: 0;
//           border: 1px solid transparent;
//           border-bottom: 1px solid #575756;
//           border-radius: 0;
//           background-position: 100% center;
//       }
//   }
// } 
.category-block  {
  padding:10px 10px;
  label{
    display: block;
    width: 100%;
    text-transform: capitalize;
    color:#ffff
  }
}
.company_wise_product {
  h5{
    color:#ffff;
  }
  select#company_pro {
  padding: 7px 10px;
  width: 100%;
  text-transform: capitalize;
  }
}
.filter-color-style {
  display: flex;
  justify-content: center;
}
.color-all--style {
  background-color: transparent;
  color:#fff;
  text-transform: capitalize;
  border: none;
  cursor: pointer;
}
.filter-colors{
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
}
  
`  
export default FilterBlock