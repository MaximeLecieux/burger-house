import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage.js'

export default function Router() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}
