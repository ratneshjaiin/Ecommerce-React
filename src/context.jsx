import axios from "axios";
import React, { useContext, useEffect, useReducer,createContext } from "react";
import reducer from "./reducer/productReducer";
const AppContext = createContext()

const API = "https://api.pujakaitem.com/api/products";
const intialState = {
    name:"",
    // image:"",
    title:"",
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading:false,
    singleProduct: {},
};

const AppProvider = ({children}) =>{
    const [state , dispatch] = useReducer(reducer, intialState)
    const getProducts = async (url) => {
      dispatch({ type: "SET_LOADING" });
      try {
        const res = await axios.get(url);
        const products = await res.data;
        // console.log("products:",products)
        dispatch({ type: "SET_API_DATA", payload: products });
      } catch (error) {
        dispatch({ type: "API_ERROR" });
      }
    };
    // 2nd Api
    const getSingleProduct = async (url) => {
      dispatch({ type: "SET_SINGLE_LOADING" });
      try {
        const res = await axios.get(url);
        const singleProduct = await res.data;
        dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
      } catch (error) {
        dispatch({ type: "SET_SINGLE_ERROR" });
      }
    };
    useEffect(() => {
      getProducts(API);
    }, []);   
    const updateHomePage = () => {
        return dispatch({
             type:"HOME_UPDATE",
             payload:{
                name:"Parallels Partner",
                title:"Lavorare da casa come in azienda, con la massima sicurezza - Webinar Awingu"
             }
        })
    }
    const updateAboutPage = () => {
        return dispatch({
             type:"ABOUT_UPDATE",
             payload:{
                name:"Awingu Partner",
                title:"Parallels Desktop for Mac Business Edition is built on the world’s best desktop virtualization solution, but also incorporates centralized administration capabilities to keep IT in control of virtual machines."
             }
        })
    }
      // useEffect(() => {
      //     fetch('https://fakestoreapi.com/products' , {
      //     method: "GET",
      //     headers: {
      //       "Content-Type" : "application/json"
      //     }  
      //   }).then(async(res) => {
      //     const data = await res.json()
      //     console.log(data);
      //     dispatch({ type:"GET_SERVICES", payload:data});
      //   }).catch((error) => {
      //       console.log(error);  
      //   })
      // }, []);

    return <AppContext.Provider value={{ ...state  ,updateHomePage , updateAboutPage , getSingleProduct }}>{children}</AppContext.Provider>
} 

const useGlobleContext =() =>{
  return useContext(AppContext);
}

export {AppContext, AppProvider, useGlobleContext};