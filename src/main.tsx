import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App'
import {createHashRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import Gojo from './pages/Gojo';
import Sukuna from './pages/Sukuna';
import Toji from './pages/Toji';
import Vivy from './pages/Vivy';

const router = createHashRouter([
  {
    path:'/',
    element:<Home />
  },
  {
    path:'/Gojo',
    element:<Gojo />
  },
  {
    path:'/Sukuna',
    element:<Sukuna />
  },
  {
    path:'/Toji',
    element:<Toji />
  },
  {
    path:'/Vivy',
    element:<Vivy />
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
