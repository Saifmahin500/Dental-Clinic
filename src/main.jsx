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
import Contract from './Pages/Contract/Contract';
import Login from './Components/Login/Login';
import Registration from './Components/Registration/Registration';
import AuthProvider from './AuthProvider/AuthProvider';
import ServicesDetails from './Components/ServicesCards/ServicesDetails';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Appointment from './Pages/Appointment/Appointment';
import ErrorPage from './Pages/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
     {
      path : "/",
      element : <Home></Home>
     },
     {
      path : "/login",
      element : <Login></Login>
     },
     {
      path : "/reg",
      element : <Registration></Registration>
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
      path : "/card/:id",
      element : <PrivateRoute><ServicesDetails></ServicesDetails></PrivateRoute>,
      loader : () => fetch('../Services.json')
     },
     {
      path : "/Appointment",
      element : <PrivateRoute><Appointment></Appointment></PrivateRoute>
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
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
     
  </React.StrictMode>,
)
