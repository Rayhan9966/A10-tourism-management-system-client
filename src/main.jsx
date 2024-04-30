import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import Home from './pages/Home.jsx';

import AddTouristSpot from './pages/AddTouristSpot.jsx';
import MyList from './pages/MyList.jsx';
import About from './pages/About.jsx';
import Login from './pages/Login.jsx';
import TouristSpot from './pages/TouristSpot.jsx';
import TouristCard from './pages/TouristCard.jsx';
import Register from './pages/Register.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import UpDateSpot from './CRUD/UpdateSpot.jsx'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/Root.jsx'
import AuthProvider from './component/AuthProvider.jsx';
import PrivateRoute from './component/PrivateRoute.jsx';


const router = createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    errorElement: <NotFoundPage></NotFoundPage> ,
    children:[
      // {
      //   path: "/",
      //   element:<App></App>,
      // },
      {

        path:'/',
        element:<Home></Home>,
    },
  //   {

  //     path:'/touristspot',
  //     element:<TouristCard></TouristCard>,
  // },
    {
      path: "/about",
      element:<About></About>,
    },
      {
        path: "/touristspot",
        element:<TouristSpot></TouristSpot>,
        loader: ()=> fetch(`https://travel-tourism-server.vercel.app/touristspot`)
      },
      
      {
       path: "/addtouristspot",
       element:<PrivateRoute>
        <AddTouristSpot></AddTouristSpot>
        </PrivateRoute>,
      },
      {
        path: "/mylist",
        element:<PrivateRoute><MyList></MyList></PrivateRoute>,
      },
      // {
      //   path: "/updatespot/:id",
      //   element:<UpDateSpot></UpDateSpot>,
      //   loader: ({params})=> fetch(`https://travel-tourism-server-k8z4ujrfc-mohammed-rayhan-uddins-projects.vercel.app/touristspot/${params.id}`)
      // },
      {
        path: "/login",
        element:<Login></Login>,
      },
      {
        path: "/register",
        element:<Register></Register>,
      }
    ]

  }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<AuthProvider>    <RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
