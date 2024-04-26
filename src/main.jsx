import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/Home.jsx'

import AddTouristSpot from './pages/AddTouristSpot.jsx'
import MyList from './pages/MyList.jsx'
import About from './pages/About.jsx'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
  },
  {
    path: "/",
    element:<Home></Home>,
  },
  {
    path: "/about",
    element:<About></About>,
  },
  {
    path: "/addtouristspot",
    element:<AddTouristSpot></AddTouristSpot>,
  },
  {
    path: "/mylist",
    element:<MyList></MyList>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
