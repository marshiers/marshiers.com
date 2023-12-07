import React from 'react'
import ReactDOM from 'react-dom/client'

import App from "./pages/App/App.jsx"
import NotFound404 from './pages/NotFound404/NotFound404.jsx'

import './index.scss'

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/*",
    element: <NotFound404 />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
