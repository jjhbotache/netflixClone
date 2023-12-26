import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import GlobalStyle from './globalStyles.jsx';
import detailsCloser from './functions/simpleHelpers/detailsCloser.jsx';

document.addEventListener('click', detailsCloser);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>,
)
