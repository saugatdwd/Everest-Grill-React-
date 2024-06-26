import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Components/Home/Home.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import AboutPage from './Components/About/AboutPage.jsx'





const router = createBrowserRouter([
  
  {
    path: '/',
    element: <Layout />,
    children: [{

      path: '',
      element: <Home />,
 
    },
    {
      path: '/aboutpage',
      element: <AboutPage />,
    },

  
  
  ]
  }

]

)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
