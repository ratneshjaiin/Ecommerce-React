import { useContext, useEffect, useReducer } from "react";
import { createContext } from "react";
import { useGlobleContext } from "../context";
import  reducer  from "../reducer/filterReducer";

const FilterContext = createContext();
const initialState = {
    filter_products :[],
    all_products :[] ,
    grid_view : false, 
    sorting_value: "lowest",
    filters:{
      text:"",
      category:"all",
      company:"all",
      color:"all",
      price:0,
      maxPrice:0,
      minPrice:0
    }
}
const FilterContextProvider = ({children}) =>{
  const {products} =useGlobleContext(); 
//   console.log("FCP:",products) 
  const [state ,dispatch] = useReducer(reducer, initialState)

  const getGridView =()=>{
    return dispatch({type:"SET_GRID_VIEW"})
  }
  const getListView =()=>{
    return dispatch({type:"SET_LIST_VIEW"})
  }
  // Sortfilter(prices,a-z,z-a)
  const shorting =(event)=>{
      let userValue = event.target.value; 
      dispatch({type:"GET_SORT_VALUE",payload:userValue})
  }

  // Searching-product
  const updateFilterValue =(event) =>{
    let name = event.target.name;
    let value = event.target.value;
    return dispatch({type:"UPDATE_FILTER_VALUE",payload:{name,value}}) 

  }

  const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
  };
  
  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORTING_PRODUCTS" });
  }, [products, state.sorting_value, state.filters]); 

  useEffect(()=>{
    return dispatch({type:"LOAD_FILTER_PRODUCT",payload:products})
   },[products])

 
  return(
    <FilterContext.Provider
      value={{ ...state, getGridView ,getListView ,shorting ,updateFilterValue,clearFilters}}>
      {children}
    </FilterContext.Provider>
  );
}

const useFilterContext = () =>{
    return useContext(FilterContext)
}
export {FilterContextProvider ,useFilterContext ,};