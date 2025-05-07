import React, { useEffect, useState } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NewPage from './pages/NewPage'
import EditPage from './pages/EditPage'
import LocacoesPage from './pages/LocacoesPage'

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LocacoesPage />} />
      <Route path="/novo" element={<NewPage />} />
      <Route path="/editar/:id" element={<EditPage />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
