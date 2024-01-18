import React from 'react'
import ReactDOM from 'react-dom/client'

import GlobalStyle from './globalStyles.jsx';
import detailsCloser from './functions/simpleHelpers/detailsCloser.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import router from './router/router.jsx';

document.addEventListener('click', detailsCloser);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
    <GlobalStyle />
  </>,
)
