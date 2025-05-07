import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import NewPage from './pages/NewPage'
import EditPage from './pages/EditPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/novo" element={<NewPage />} />
      <Route path="/editar/:id" element={<EditPage />} />
    </Routes>
  </BrowserRouter>
)
