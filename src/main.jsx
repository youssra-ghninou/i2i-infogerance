import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AnimatedRoutes from './components/AnimatedRoutes'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>   
  </React.StrictMode>
)
