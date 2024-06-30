import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import HomePages from './Components/HomePages.jsx';
import Home from './Components/Home.jsx'
import Blogs from './Components/Blogs.jsx';
import Contect from './Components/Contect.jsx'
import Coin from './Components/Coin.jsx';
import Mansection from './Components/Mansection.jsx';
import Womensection from './Components/Womensection.jsx';
import Kidsection from './Components/Kidsection.jsx';
import BridelCards from './Components/BridelCards.jsx';

  

const router=createBrowserRouter(
  createRoutesFromElements(
   <Route  path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='HomePages' element={<HomePages/>}/>
      <Route path='coins' element={<Coin/>}/>
      <Route path='Blogs' element={<Blogs/>}/>
      <Route path='Contact' element={<Contect/>}/>
      <Route path='Mansection' element={<Mansection/>}/>
      <Route path='Womensection' element={<Womensection/>}/>
      <Route path='Kidsection' element={<Kidsection/>}/>
      <Route path='BridelCards' element={<BridelCards/>}/>
      
     
         

   </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
 <Auth0Provider
    domain="dev-71hxkyvvider3pjm.us.auth0.com"
    clientId="2WVJ3N3QURWNPeNAdoyzbDPA7HBTbhRC"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <RouterProvider router={router}/>
  </Auth0Provider>


)
