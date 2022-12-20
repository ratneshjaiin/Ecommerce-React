const cartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
      let { id, color, amount, product } = action.payload;
      // console.log(
      //   "🚀 ~ file: cartReducer.js ~ line 4 ~ cartReducer ~ product",
      //   product
      // );
      
      let existingProduct = state.cart.find((curElem)=> curElem.id === id+color )
      // console.log("existingPro:",existingProduct)

          if(existingProduct){
                let updateProduct = state.cart.map((curElem)=>{
                    if(curElem.id === id+color){
                    let newAmount = curElem.amount + amount;
                    if(newAmount >= curElem.max){
                      newAmount = curElem.max;
                    }
                    return{
                      ...curElem,amount:newAmount
                    } 
                    }else{
                    return curElem
                    } 
                })  
                return {
                  ...state,
                  cart: updateProduct,
                };
          }else{
              let cartProduct = {
              id: id + color,
              name: product.name,
              color,
              amount,
              image: product.image[0].url,
              price: product.price,
              max: product.stock,
            };
            return {
              ...state,
              cart: [...state.cart, cartProduct],
            };
          }
      
    }
  //  decrement the product
    if(action.type === "SET_DECREMENT"){
      let updateProduct = state.cart.map((curElem)=>{
        if(curElem.id === action.payload){
          // console.log("match",curElem)
          let decAmount = curElem.amount - 1;
          if(decAmount <= 1){
            decAmount = 1 ;
          }
          return {
            ...curElem ,
            amount : decAmount
          } 
          }else{
            return curElem;
          }
      });
      return{
        ...state,cart:updateProduct
      }
    }
  // increment the product
  if(action.type === "SET_INCREMENT"){
    let updateProduct = state.cart.map((curElem)=>{
      if(curElem.id === action.payload){
        // console.log("match",curElem)
        let incAmount = curElem.amount + 1;
        if(incAmount >= curElem.max){
          incAmount = curElem.max ;
        }
        return {
          ...curElem ,
          amount : incAmount
        } 
        }else{
          return curElem;
        }
    });
    return{
      ...state,cart:updateProduct
    }
  }
  
  // remove the items
    if (action.type === "REMOVE_ITEM") {
      let updatedCart = state.cart.filter(
        (curItem) => curItem.id !== action.payload
      );
      return {
        ...state,
        cart: updatedCart,
      };
    }

   // to empty or to clear to cart
   if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }
  // CART_TOTAL_ITEM
  if(action.type === "CART_TOTAL_ITEM"){
      let updatedTotalItemVal = state.cart.reduce((initialVal, curElem)=>{
      let {amount} = curElem;
      initialVal =initialVal + amount ;
      return initialVal;
    },0)
  
    return{
      ...state,
      total_item :updatedTotalItemVal
    }
  }
  
  // cart total price
  if(action.type  === "CART_TOTAL_PRICE"){
     let total_price  = state.cart.reduce((initialVal,curElem)=>{
       let {price , amount} = curElem;
       initialVal= initialVal +price*amount;
       return initialVal
     },0)
     return {
      ...state,
      total_price :total_price

     }
  }
    return state;
  };
  
  export default cartReducer;