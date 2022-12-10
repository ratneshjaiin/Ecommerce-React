import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from './App'
import './index.css';
import { AppProvider } from './context';
import { FilterContextProvider } from './context/FilterContext';
import { CartProvider } from './context/cartContext';
// import { CartProvider } from './context/CartContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider>
   <FilterContextProvider>
      <CartProvider>
            <React.StrictMode>
              <App />
          </React.StrictMode>
        </CartProvider>
    </FilterContextProvider>
  </AppProvider>
)
