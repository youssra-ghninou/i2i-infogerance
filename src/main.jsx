import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter,
  Routes,
  Route, } from "react-router-dom";
import App from './App'
import './index.css'
import WhoAreWe from './routes/whoarewe';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="whoarewe" element={<WhoAreWe />}/>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
)
