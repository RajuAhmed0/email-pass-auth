import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import route from './Components/Route/route.jsx'
import { Toaster } from 'react-hot-toast'
import AuthContext from './Components/Provider/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContext>
      <RouterProvider router={route} />
      <Toaster />
    </AuthContext>
  </StrictMode>,
)
