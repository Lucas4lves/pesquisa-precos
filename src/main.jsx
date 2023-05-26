import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import AppContextProvider from './Context/index.jsx'
import "./main.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContextProvider>
    <ChakraProvider>
      <App />
    </ChakraProvider>
    </AppContextProvider>
  </React.StrictMode>,
)
