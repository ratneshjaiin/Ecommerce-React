import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();
const getLocalCartData = () =>{
  let newCartData = localStorage.getItem("rjcart");
  if(newCartData == []){
    return [] ;
  }else{
    return JSON.parse(newCartData);
  }
};
const initialState = {
  cart:getLocalCartData(),
  total_item: "",
  total_price: "",
  shipping_fee: 50000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };
 
  // increment and decrement the product

  const setDecrease = (id) => { 
        dispatch({type:"SET_DECREMENT",payload:id})
  }
  const setIncrease = (id) => { 
    dispatch({type:"SET_INCREMENT",payload:id})
}

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

 
  // Add Data Localstorage
  useEffect(()=>{
    dispatch({type:"CART_TOTAL_ITEM"})
    dispatch({type:"CART_TOTAL_PRICE"})
    localStorage.setItem("rjcart",JSON.stringify(state.cart))
  },[state.cart])

  return (
    <CartContext.Provider value={{ ...state,addToCart,removeItem,clearCart,setDecrease,setIncrease}}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };