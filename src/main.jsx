import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import StoresProvider from "./Contexts/Stores";
import ProductsProvider from "./Contexts/Products";

import "./main.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductsProvider>
    <StoresProvider>
      <App />
    </StoresProvider>
    </ProductsProvider>
  </React.StrictMode>,
)
