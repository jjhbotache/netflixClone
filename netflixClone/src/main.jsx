import App from "./App";
import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from "./assets/globalStyles";

import { Provider } from "react-redux";
import store from "./redux/store.jsx";



  
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>,
)
