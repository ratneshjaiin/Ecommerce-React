const productReducer = (state,action) => {
  
    // if(action.type === "HOME_UPDATE"){
    //     return{
    //         ...state,
    //         name:action.payload.name,
    //         title:action.payload.title
    //     }
    // }
    // if(action.type === "ABOUT_UPDATE"){
    //     return{
    //         ...state,
    //         name:action.payload.name,
    //         title:action.payload.title
    //     }
    // }
    // if(action.type === "SET_LOADING"){
    //     return{
    //         ...state,
    //         isLoading:true
    //     } 
    // }
    // if(action.type === "API_ERROR"){
    //     return{
    //         ...state,
    //         isLoading:false,
    //         isError:true
    //     } 
    // }
    switch (action.type) {
        case "HOME_UPDATE":
                return{
                    ...state,
                    name:action.payload.name,
                    title:action.payload.title
                }
        case "ABOUT_UPDATE":
             return{
                ...state,
            name:action.payload.name,
            title:action.payload.title
             }            
        case "SET_LOADING":
          return {
            ...state,
            isLoading: true,
          };
    
        case "SET_API_DATA":
          const featureData = action.payload.filter((curElem) => {
            return curElem.featured === true;
          });
    
          return {
            ...state,
            isLoading: false,
            products: action.payload,
            featureProducts: featureData,
          };
    
        case "API_ERROR":
          return {
            ...state,
            isLoading: false,
            isError: true,
          };
    
          case "SET_SINGLE_LOADING":
            return {
              ...state,
              isSingleLoading: true,
            };
      
          case "SET_SINGLE_PRODUCT":
            return {
              ...state,
              isSingleLoading: false,
              singleProduct: action.payload,
            };
      
          case "SET_SINGLE_ERROR":
            return {
              ...state,
              isSingleLoading: false,
              isError: true,
            };

        default:
          return state;
      }
    };
export default productReducer
