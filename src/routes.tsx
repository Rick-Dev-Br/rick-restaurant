import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Categories from './pages/Categorias'

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cardapio" element={<Categories />} />
    </Routes>
  )
}

export default AppRoutes
