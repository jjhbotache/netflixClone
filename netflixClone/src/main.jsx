import App from "./App";
import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from "./assets/globalStyles";


  
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
)
