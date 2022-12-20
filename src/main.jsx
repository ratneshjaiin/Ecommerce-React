import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from './App'
import './index.css';
import { AppProvider } from './context';
import { FilterContextProvider } from './context/FilterContext';
import { CartProvider } from './context/cartContext';
import { Auth0Provider } from "@auth0/auth0-react";
// import { CartProvider } from './context/CartContext';

// const domain = process.env.
ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
  domain="dev-rrv01095.us.auth0.com"
  clientId="halHn7CGHT9FpgpF3GjjMcTrG2deVpgY"
  redirectUri={window.location.origin}
  >
  <AppProvider>
   <FilterContextProvider>
      <CartProvider>
            <React.StrictMode>
              <App />
          </React.StrictMode>
        </CartProvider>
    </FilterContextProvider>
  </AppProvider>
  </Auth0Provider>
)
