import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './Login/Loginpage'
import SignUp from './SignUp/SignUpPage';
import MainPage from './MainPage/MainPage';
import Setting from './setting_details/SettingPage';
import Applications from './Applications/ApplicationsPage';
import Companies from './CompaniesListing/CompaniesPage';
import JobsPage from './JobsListing/JobsPage';
const router = createBrowserRouter([
  {
    path: '/',
    element:<Login/>,
  },
  {
    path:'/SignUp',
    element:<SignUp/>
  },
  {
    path:'/MainPage',
    element:<MainPage/>
  },
  {
    path:'/Settings',
    element:<Setting/>
  },
  {
    path:'/Applications',
    element:<Applications/>
  },
  {
    path:'/Companies',
    element:<Companies/>
  },
  {
    path:'/Jobs',
    element:<JobsPage/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
