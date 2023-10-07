import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import Dentist from './Pages/Dentist/Dentist';
import Contract from './Pages/Contract/Contract';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children : [
     {
      path : "/",
      element : <Home></Home>
     },
     {
      path : "/about",
      element : <About></About>
     },
     {
      path : "/services",
      element : <Services></Services>
     },
     {
      path : "/dentist",
      element : <Dentist></Dentist>
     },
     {
      path : "/contract",
      element : <Contract></Contract>
     },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
